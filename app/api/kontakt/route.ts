import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  ime: z.string().min(2).max(100),
  kontakt: z.string().min(5).max(100),
  poruka: z.string().min(10).max(1000),
});

const resend = new Resend(process.env.RESEND_API_KEY);
const contactEmail = process.env.CONTACT_EMAIL || "vrt.roselia@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Neispravni podaci u formi." },
        { status: 400 }
      );
    }

    const { ime, kontakt, poruka } = parsed.data;

    const { error } = await resend.emails.send({
      from: "Roselia Web <noreply@roselia.ba>",
      to: [contactEmail],
      replyTo: kontakt.includes("@") ? kontakt : undefined,
      subject: `Nova poruka od ${ime} – Roselia Vrtni Centar`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #FAF7F2; border-radius: 8px;">
          <div style="background: #8B1A1A; color: white; padding: 20px 24px; border-radius: 8px 8px 0 0; margin: -24px -24px 24px;">
            <h1 style="margin: 0; font-size: 22px; font-weight: 700;">Nova poruka — Roselia Vrtni Centar</h1>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #8B6355; font-size: 13px; width: 120px; vertical-align: top;">Ime:</td>
              <td style="padding: 8px 0; color: #1A1A1A; font-size: 16px; font-weight: 600;">${escapeHtml(ime)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8B6355; font-size: 13px; width: 120px; vertical-align: top;">Kontakt:</td>
              <td style="padding: 8px 0; color: #1A1A1A; font-size: 16px;">${escapeHtml(kontakt)}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #E8E0D5; margin: 16px 0;" />
          <p style="color: #8B6355; font-size: 13px; margin-bottom: 8px;">Poruka:</p>
          <div style="background: white; border: 1px solid #E8E0D5; border-radius: 8px; padding: 16px; color: #1A1A1A; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(poruka)}</div>
          <p style="margin-top: 24px; color: #8B6355; font-size: 13px; text-align: center;">
            Poruka primljena putem web forme na roselia.ba
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { message: "Greška pri slanju emaila. Pokušajte ponovo." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Kontakt API error:", err);
    return NextResponse.json(
      { message: "Interna greška servera." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
