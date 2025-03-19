import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { IncomingForm, Fields, Files } from "formidable";
import fs from "fs-extra";
import sharp from "sharp";
import { Readable } from "stream";
import { IncomingMessage } from "http";
import { createServerClientInstance } from "@/utils/supabase/server"; // Ensure this import is correct

export const config = {
  api: { bodyParser: false },
  runtime: "nodejs",
};

async function isAdmin(req: NextRequest): Promise<boolean> {
  const supabase = await createServerClientInstance();

  const authHeader = req.headers.get("authorization");

  if (!authHeader) {
    console.error("🔴 No Authorization header provided!");
    return false;
  }

  const token = authHeader.replace("Bearer ", "");

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(token);

  if (error) {
    console.error("🔴 Supabase Auth error:", error.message);
    return false;
  }

  return !!user;
}

async function convertNextRequestToIncomingMessage(
  req: NextRequest
): Promise<IncomingMessage> {
  const reader = req.body?.getReader();
  const chunks: Uint8Array[] = [];

  if (reader) {
    let done = false;
    while (!done) {
      const { value, done: readerDone } = await reader.read();
      if (value) {
        chunks.push(value);
      }
      done = readerDone;
    }
  }

  const buffer = Buffer.concat(chunks);
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);

  return Object.assign(stream, {
    headers: Object.fromEntries(req.headers.entries()),
    method: req.method,
    url: req.url,
  }) as IncomingMessage;
}

async function processImage(
  filePath: string,
  outputPath: string,
  fileType: string
) {
  const sizes: { [key: string]: { width: number; height: number } } = {
    hero: { width: 1920, height: 1080 },
    about: { width: 1000, height: 1000 },
  };

  if (!sizes[fileType]) {
    throw new Error("Invalid file type");
  }

  console.log(`🟢 Processing image: ${filePath} -> ${outputPath}`);

  if (await fs.pathExists(outputPath)) {
    console.log(`🟠 Deleting old file: ${outputPath}`);
    await fs.remove(outputPath);
  } else {
    console.log(`🟢 No existing file found, skipping delete.`);
  }

  const tempOutputPath = `${outputPath}.tmp`;

  console.log(`🟢 Resizing and converting image to WebP: ${tempOutputPath}`);

  await sharp(filePath)
    .resize(sizes[fileType].width, sizes[fileType].height, { fit: "cover" })
    .toFormat("webp")
    .toFile(tempOutputPath);

  await fs.move(tempOutputPath, outputPath, { overwrite: true });

  console.log(`✅ Image successfully saved: ${outputPath}`);
}

const versionFilePath = path.join(process.cwd(), "public", "version.json");

async function updateVersion(fileType: string) {
  let versions = { hero: 1, about: 1 };

  if (await fs.pathExists(versionFilePath)) {
    versions = await fs.readJson(versionFilePath);
  }

  versions[fileType] = versions[fileType] + 1;

  await fs.writeJson(versionFilePath, versions);
}

export async function POST(req: NextRequest) {
  if (!(await isAdmin(req))) {
    // ✅ Pass `req` to `isAdmin()`
    return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
  }

  try {
    console.log("🟢 Upload request received");

    const form = new IncomingForm({
      multiples: false,
      maxFileSize: 5 * 1024 * 1024,
      uploadDir: path.join(process.cwd(), "public/uploads"), // ✅ Fix: Explicit upload directory
      keepExtensions: true,
    });

    console.log("🟢 Parsing request...");

    const incomingReq: IncomingMessage =
      await convertNextRequestToIncomingMessage(req);

    const { fields, files }: { fields: Fields; files: Files } =
      await new Promise((resolve, reject) => {
        form.parse(incomingReq, (err, fields, files) => {
          if (err) {
            console.error("🔴 Formidable parsing error:", err);
            reject(err);
          } else {
            console.log("🟢 Parsed fields:", fields);
            console.log("🟢 Parsed files:", files);
            resolve({ fields, files });
          }
        });
      });

    if (!files.file) {
      console.error("🔴 No file received.");
      return NextResponse.json({ message: "No file found" }, { status: 400 });
    }

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    if (!file.filepath) {
      console.error("🔴 File upload failed - missing filepath");
      return NextResponse.json(
        { message: "File upload failed - missing filepath" },
        { status: 400 }
      );
    }

    console.log(`🟢 Received file at: ${file.filepath}`);

    const fileType = Array.isArray(fields.type) ? fields.type[0] : fields.type;
    const validTypes = ["hero", "about"];

    if (!fileType || !validTypes.includes(fileType)) {
      console.error("🔴 Invalid file type:", fileType);
      return NextResponse.json(
        { message: "Invalid file type. Use 'hero' or 'about'." },
        { status: 400 }
      );
    }

    const appPublicDir = path.join(process.cwd(), "public");
    await fs.ensureDir(appPublicDir);

    const fileName = `${fileType}.webp`;
    const newPath = path.join(appPublicDir, fileName);

    console.log(`🟢 Saving processed image to: ${newPath}`);

    await processImage(file.filepath, newPath, fileType);
    await updateVersion(fileType);

    console.log("✅ Upload successful!");

    return NextResponse.json({
      message: "Upload successful!",
      filePath: `/${fileName}`,
    });
  } catch (error) {
    console.error("🔴 Upload failed:", error);

    return NextResponse.json(
      {
        message: "Upload failed",
        error: error instanceof Error ? error.message : JSON.stringify(error),
      },
      { status: 500 }
    );
  }
}
