import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, contact, email, occupation, location, state, requirement } =
    body;
  const messageHtml = `<h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Occupation:</strong> ${occupation}</p>
        <p><strong>Location:</strong> ${location}, ${state}</p>
        <p><strong>Requirement:</strong><br>${requirement}</p>`;
  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!, // Must be a verified sender
      to: process.env.RESEND_TO_EMAIL!,
      subject: "New Contact Form Submission - Iconic Turf Club",
      html: messageHtml,
    });
    // ✅ Auto-reply to submitter
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: email,
      subject: "Thank you for contacting Iconic Turf Club",
      html: `
    <p>Dear ${name},</p>
    <p>Thank you for reaching out to <strong>Iconic Turf Club</strong>! We have received your inquiry and will get back to you shortly.</p>
    
    <p><strong>Your submitted details:</strong></p>
    ${messageHtml}

    <p>Best regards,<br/>Team Iconic Turf Club</p>

    <hr style="margin-top:20px;"/>
    <p style="font-size: 0.9rem; color: gray;">
      Please do not reply to this email. This is a system generated message.
    </p>
  `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed", error);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
