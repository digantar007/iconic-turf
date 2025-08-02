import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const body = await req.json();
  const {
    name,
    contact,
    email,
    occupation,
    location,
    state,
    requirement,
  } = body;

  try {
    console.log("FROM:", process.env.RESEND_FROM_EMAIL);
console.log("TO:", process.env.RESEND_TO_EMAIL);
console.log("KEY:", process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!, // Must be a verified sender
      to: process.env.RESEND_TO_EMAIL!,
      subject: "New Contact Form Submission - Iconic Turf Club",
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Occupation:</strong> ${occupation}</p>
        <p><strong>Location:</strong> ${location}, ${state}</p>
        <p><strong>Requirement:</strong><br>${requirement}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email send failed", error);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
