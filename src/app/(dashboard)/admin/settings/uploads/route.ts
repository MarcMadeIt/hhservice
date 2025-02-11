import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { IncomingForm, Fields, Files } from "formidable";
import fs from "fs-extra";
import sharp from "sharp";
import { Readable } from "stream";
import { IncomingMessage } from "http";

export const config = {
  api: { bodyParser: false },
  runtime: "nodejs",
};

// ✅ **Autentificering**
async function isAdmin(req: NextRequest): Promise<boolean> {
  const authHeader = req.headers.get("Authorization");
  return authHeader === "Bearer SECRET_ADMIN_KEY"; // ERSTAT med din egen nøgle!
}

// ✅ **Konverter NextRequest til IncomingMessage**
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

// ✅ **Resize & konverter billede**
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

  const tempOutputPath = `${outputPath}.tmp`;

  await sharp(filePath)
    .resize(sizes[fileType].width, sizes[fileType].height, { fit: "cover" })
    .toFormat("png")
    .toFile(tempOutputPath);

  await fs.move(tempOutputPath, outputPath, { overwrite: true });
}

// ✅ **UPLOAD HANDLER**
export async function POST(req: NextRequest) {
  console.log("🔵 Modtager fil-upload request...");

  if (!(await isAdmin(req))) {
    console.log("❌ Unauthorized request!");
    return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
  }

  try {
    const form = new IncomingForm({
      multiples: false,
      maxFileSize: 5 * 1024 * 1024, // 5MB limit
    });

    console.log("📥 Parser form-data...");

    const incomingReq: IncomingMessage =
      await convertNextRequestToIncomingMessage(req);

    const { fields, files }: { fields: Fields; files: Files } =
      await new Promise((resolve, reject) => {
        form.parse(incomingReq, (err, fields, files) => {
          if (err) {
            console.log("❌ Form parsing fejl:", err);
            reject(err);
          } else {
            console.log("✅ Form parsed!", fields, files);
            resolve({ fields, files });
          }
        });
      });

    if (!files.file) {
      console.log("❌ Fejl: Ingen fil fundet!");
      return NextResponse.json({ message: "No file found" }, { status: 400 });
    }

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    if (!file.filepath) {
      console.log("❌ Filen blev ikke korrekt uploaded.");
      return NextResponse.json(
        { message: "File upload failed" },
        { status: 400 }
      );
    }

    // ✅ **Valider filtype**
    const fileType = Array.isArray(fields.type) ? fields.type[0] : fields.type;
    const validTypes = ["hero", "about"];

    if (!fileType || !validTypes.includes(fileType)) {
      console.log("❌ Ugyldig filtype:", fileType);
      return NextResponse.json(
        { message: "Invalid file type. Use 'hero' or 'about'." },
        { status: 400 }
      );
    }

    // ✅ **Gem i `/public/` mappen**
    const appPublicDir = path.join(process.cwd(), "public");
    await fs.ensureDir(appPublicDir); // Sørg for at `public` eksisterer

    const fileName = `${fileType}.png`;
    const newPath = path.join(appPublicDir, fileName);

    console.log("🔄 Resizing billede...");
    await processImage(file.filepath, newPath, fileType);

    console.log("✅ Upload fuldført!");
    return NextResponse.json({
      message: "Upload successful!",
      filePath: `/${fileName}`,
    });
  } catch (error) {
    console.error("❌ Upload fejlede:", error);
    return NextResponse.json(
      {
        message: "Upload failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
