import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(req: Request) {
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

  if (!name || !contact || !email || !occupation || !location || !state || !requirement) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: "New Inquiry - Iconic Turf Club",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact No:</strong> ${contact}</p>
        <p><strong>Email ID:</strong> ${email}</p>
        <p><strong>Occupation:</strong> ${occupation}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Requirement:</strong> ${requirement}</p>
      `,
    });

    return NextResponse.json({ message: "Form submitted successfully!" });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
