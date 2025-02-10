import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { IncomingForm, Fields, Files } from "formidable";
import { Readable } from "stream";
import { IncomingMessage } from "http";
import sharp from "sharp";

export const config = { api: { bodyParser: false } };

async function isAdmin(req: NextRequest) {
  const authHeader = req.headers.get("Authorization");
  return authHeader === "Bearer SECRET_ADMIN_KEY";
}

async function convertNextRequestToIncomingMessage(
  req: NextRequest
): Promise<IncomingMessage> {
  const arrayBuffer = await req.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
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
  let width: number, height: number;

  if (fileType === "hero") {
    width = 1920;
    height = Math.round(width / (16 / 9));
  } else if (fileType === "about") {
    width = 1000;
    height = 1000;
  } else {
    throw new Error("Invalid file type");
  }

  await sharp(filePath)
    .resize(width, height, { fit: "cover" })
    .toFormat("png")
    .toFile(outputPath);
}

export async function POST(req: NextRequest) {
  if (!(await isAdmin(req))) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
  }

  try {
    const form = new IncomingForm({
      multiples: false,
      maxFileSize: 5 * 1024 * 1024, // 5MB limit
    });

    // Convert Next.js request into IncomingMessage
    const incomingReq = await convertNextRequestToIncomingMessage(req);

    const { fields, files }: { fields: Fields; files: Files } =
      await new Promise((resolve, reject) => {
        form.parse(incomingReq, (err, fields, files) => {
          if (err) reject(err);
          else resolve({ fields, files });
        });
      });

    if (!files.file) {
      return NextResponse.json({ message: "No file found" }, { status: 400 });
    }

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    if (!file.filepath) {
      return NextResponse.json(
        { message: "File upload failed" },
        { status: 400 }
      );
    }

    const fileType = Array.isArray(fields.type) ? fields.type[0] : fields.type;
    const validTypes = ["hero", "about"];

    if (!fileType || !validTypes.includes(fileType)) {
      return NextResponse.json(
        { message: "Invalid file type. Use 'hero' or 'about'." },
        { status: 400 }
      );
    }

    const uploadDir = path.join(process.cwd(), "public");
    const fileName = `${fileType}.png`; // Altid gem som PNG
    const newPath = path.join(uploadDir, fileName);

    // Resize og konverter billede til PNG
    await processImage(file.filepath, newPath, fileType);

    return NextResponse.json({
      message: `File uploaded and converted successfully!`,
      filePath: `/public/${fileName}`,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Upload failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
