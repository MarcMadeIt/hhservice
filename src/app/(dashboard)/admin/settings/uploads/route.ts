import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { IncomingForm, File, Fields, Files } from "formidable";
import fs from "fs-extra";
import sharp from "sharp";

export const config = { api: { bodyParser: false } };

// **Autentificering**
async function isAdmin(req: NextRequest) {
  const authHeader = req.headers.get("Authorization");
  return authHeader === "Bearer SECRET_ADMIN_KEY"; // ERSTAT med din egen nøgle!
}

// **Upload & konverter billede**
export async function POST(req: NextRequest) {
  if (!(await isAdmin(req))) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
  }

  try {
    const form = new IncomingForm({ multiples: false });

    const formData = await new Promise<{ files: Files; fields: Fields }>(
      (resolve, reject) => {
        form.parse(req as any, (err, fields, files) => {
          if (err) reject(err);
          else resolve({ fields, files });
        });
      }
    );

    const file = formData.files.file
      ? ((Array.isArray(formData.files.file)
          ? formData.files.file[0]
          : formData.files.file) as File)
      : null;

    if (!file || !file.filepath) {
      return NextResponse.json(
        { message: "File upload failed" },
        { status: 400 }
      );
    }

    const fileType = formData.fields.type ? String(formData.fields.type) : null;
    const validTypes = ["hero", "about"];

    if (!fileType || !validTypes.includes(fileType)) {
      return NextResponse.json(
        { message: "Invalid file type. Use 'hero' or 'about'." },
        { status: 400 }
      );
    }

    // **Gem i public mappen**
    const uploadDir = path.join(process.cwd(), "public");
    await fs.ensureDir(uploadDir);

    const fileName = `${fileType}.png`;
    const newPath = path.join(uploadDir, fileName);

    await fs.move(file.filepath, newPath);

    // **Resize & konverter**
    await sharp(newPath)
      .resize(
        fileType === "hero" ? 1920 : 1000,
        fileType === "hero" ? Math.round(1920 / (16 / 9)) : 1000
      )
      .toFormat("png")
      .toFile(newPath);

    return NextResponse.json({
      message: "Upload successful!",
      filePath: `/${fileName}`,
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
