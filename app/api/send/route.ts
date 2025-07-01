import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    //console.log("Received data:", body); // ✅ Log the incoming request body

    const { name, email, contact , occupation, location, state, requirement } = body;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // ❗ only works for testing
      to: "digantar.singh4@gmail.com", // ✅ your destination
      subject: "New Contact Submission",
      html: `
        <h2>New Inquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${contact}</p>
        <p><b>Occupation:</b> ${occupation}</p>
        <p><b>Location:</b> ${location}</p>
        <p><b>State:</b> ${state}</p>
        <p><b>Requirement:</b> ${requirement}</p>
      `,
    });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    //console.error("Send email failed:", error); // ✅ This will show exact error
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
