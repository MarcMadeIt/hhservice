import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { IncomingForm, Fields, Files } from "formidable";
import fs from "fs-extra";
import sharp from "sharp";

// Deaktiver Next.js bodyParser
export const config = { api: { bodyParser: false } };

// **Autentificering**
async function isAdmin(req: NextRequest) {
  const authHeader = req.headers.get("Authorization");
  return authHeader === "Bearer SECRET_ADMIN_KEY"; // ERSTAT med din egen nøgle!
}

// **Resize & konverter billede**
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

// **UPLOAD HANDLER**
export async function POST(req: NextRequest) {
  console.log("🔵 Modtager fil-upload request...");

  if (!(await isAdmin(req))) {
    console.log("❌ Unauthorized request!");
    return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
  }

  try {
    const form = new IncomingForm({
      multiples: false,
      maxFileSize: 5 * 1024 * 1024,
    });

    console.log("📥 Parser fil fra request...");
    const formData = await new Promise<{ fields: Fields; files: Files }>(
      (resolve, reject) => {
        form.parse(req as any, (err, fields, files) => {
          if (err) reject(err);
          else resolve({ fields, files });
        });
      }
    );

    if (!formData.files.file) {
      console.log("❌ Ingen fil fundet i request.");
      return NextResponse.json({ message: "No file found" }, { status: 400 });
    }

    const file = Array.isArray(formData.files.file)
      ? formData.files.file[0]
      : formData.files.file;
    if (!file.filepath) {
      console.log("❌ Filen blev ikke korrekt uploaded.");
      return NextResponse.json(
        { message: "File upload failed" },
        { status: 400 }
      );
    }

    // **Valider filtypen**
    const fileType = Array.isArray(formData.fields.type)
      ? formData.fields.type[0]
      : formData.fields.type;
    const validTypes = ["hero", "about"];

    if (!fileType || !validTypes.includes(fileType)) {
      console.log("❌ Ugyldig filtype:", fileType);
      return NextResponse.json(
        { message: "Invalid file type. Use 'hero' or 'about'." },
        { status: 400 }
      );
    }

    // **Gem i `/public/` mappen**
    const appPublicDir = path.join(process.cwd(), "public");
    await fs.ensureDir(appPublicDir); // Sørg for at `public` eksisterer

    const fileName = `${fileType}.png`;
    const newPath = path.join(appPublicDir, fileName);

    console.log(`📂 Flytter filen til: ${newPath}`);
    await fs.move(file.filepath, newPath);

    console.log("🔄 Resizing billede...");
    await processImage(newPath, newPath, fileType);

    console.log("✅ Upload og resizing fuldført!");
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
