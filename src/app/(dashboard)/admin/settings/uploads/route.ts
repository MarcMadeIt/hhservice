import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { IncomingForm, Fields, Files } from "formidable";
import fs from "fs-extra";
import sharp from "sharp";

export const config = {
  api: { bodyParser: false },
  runtime: "nodejs",
};

// **Sikrer kun administratorer kan uploade**
async function isAdmin(req: NextRequest) {
  const authHeader = req.headers.get("Authorization");
  return authHeader === "Bearer SECRET_ADMIN_KEY"; // Erstat med din rigtige nøgle
}

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

    const { fields, files } = await new Promise<{
      fields: Fields;
      files: Files;
    }>((resolve, reject) => {
      form.parse(req as any, (err, fields, files) => {
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

    // **Hent filtypen**
    const fileType = Array.isArray(fields.type) ? fields.type[0] : fields.type;
    const validTypes = ["hero", "about"];

    if (!fileType || !validTypes.includes(fileType)) {
      console.log("❌ Ugyldig filtype:", fileType);
      return NextResponse.json(
        { message: "Invalid file type. Use 'hero' or 'about'." },
        { status: 400 }
      );
    }

    // **Definer filsti i `/public/`**
    const uploadDir = path.join(process.cwd(), "public");
    await fs.ensureDir(uploadDir); // Sikrer at mappen eksisterer

    const fileName = `${fileType}.png`; // Overskriver eksisterende fil
    const newPath = path.join(uploadDir, fileName);

    console.log(`📂 Flytter og overskriver: ${newPath}`);
    await fs.move(file.filepath, newPath, { overwrite: true });

    console.log("🔄 Resizing billede...");
    await sharp(newPath)
      .resize(1920, 1080, { fit: "cover" })
      .toFormat("png")
      .toFile(newPath);

    console.log("✅ Upload fuldført!");
    return NextResponse.json({
      message: "Upload successful!",
      filePath: `/${fileName}`,
    });
  } catch (error) {
    console.log("❌ Upload fejlede:", error);
    return NextResponse.json(
      {
        message: "Upload failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
