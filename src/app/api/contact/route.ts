import { NextResponse } from "next/server";
import { createRequest } from "@/lib/client/actions";
import { sendContactEmails } from "@/lib/server/contact";

export async function POST(req: Request) {
  const { name, email, phone, category, message, consent } = await req.json();

  // Kun de nødvendige felter for at gemme i DB
  if (!name || !phone || !consent) {
    return NextResponse.json({ error: "Manglende felter" }, { status: 400 });
  }

  try {
    // 1. Gem i databasen
    await createRequest(
      name,
      phone,
      email || "",
      category,
      consent,
      message || ""
    );

    // 2. Send e-mail (kun navn og evt. email medsendes)
    await sendContactEmails({ name, email });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(
      "[Kontakt fejl]",
      error instanceof Error ? error.message : error
    );
    return NextResponse.json({ error: "Serverfejl" }, { status: 500 });
  }
}
