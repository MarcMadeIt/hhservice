import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST!,
  port: Number(process.env.SMTP_PORT!),
  secure: false,
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
  },
});

export async function sendContactEmails({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const adminHtml = `
  <div style="max-width:600px;margin:40px auto;padding:24px;border:1px solid #ccc;border-radius:10px;font-family:Arial;">
    <h2>Ny kundehenvendelse!</h2>
    <p>En kunde har udfyldt kontaktformularen på hjemmesiden.</p>
    <a href="https://hhservice.dk/admin/messages"
       style="display:inline-block;margin-top:20px;padding:12px 20px;background-color:#169445;color:#fff;text-decoration:none;border-radius:6px;font-weight:bold;">
      Gå til administration
    </a>
    <p style="margin-top:24px;font-size:12px;color:#888;">Automatisk besked fra hhservice.dk</p>
  </div>`;

  const userHtml = `
  <div style="max-width:600px; padding:32px 24px; background-color:#ffffff; border:1px solid #e2e8f0; border-radius:12px; font-family:Arial, sans-serif; color:#1a1a1a;">
    <div style="display:flex; align-items:center; gap:12px; margin-bottom:24px;">
      <img src="https://hhservice.dk/favicon1.png" alt="Halsnæs Haveservice logo" width="40" height="40" style="display:block;" />
      <div>
        <div style="font-size:19px; font-weight:bold; padding-left:5px; margin-top:8px;">Halsnæs Haveservice</div>
      </div>
    </div>

    <h2 style="font-size:20px; margin-bottom:8px;">Tak for din henvendelse</h2>
    <p style="font-size:15px; margin-bottom:16px;">Vi har modtaget din besked og vender tilbage hurtigst muligt – typisk inden for 24 timer.</p>

    <p style="margin-top:32px; font-size:14px; color:#555;">
      Med venlig hilsen<br><strong>Halsnæs Haveservice</strong>
    </p>

    <hr style="margin:32px 0; border:none; border-top:1px solid #eee;" />

    <p style="font-size:12px; color:#888;">
      Dette er en automatisk besked – du behøver ikke svare på denne e-mail.
    </p>
  </div>`;

  // Send admin-mail
  await transporter.sendMail({
    from: `"Halsnæs Haveservice" <${process.env.SMTP_USER!}>`,
    to: process.env.ADMIN_EMAIL!,
    subject: `Ny kundehenvendelse fra ${name}`,
    html: adminHtml,
  });

  // Send til bruger hvis email er angivet
  if (email?.trim()) {
    await transporter.sendMail({
      from: `"Halsnæs Haveservice" <${process.env.SMTP_USER!}>`,
      to: email,
      subject: `Vi har modtaget din besked`,
      html: userHtml,
    });
  }
}
