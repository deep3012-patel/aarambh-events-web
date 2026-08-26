import { NextResponse } from "next/server";
import { Resend } from "resend";
import { enquirySchema } from "@/lib/enquiry-schema";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Please submit the form again." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ message: "Please check the form and try again." }, { status: 400 });
  }

  const enquiry = parsed.data;
  if (enquiry.website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ENQUIRY_FROM_EMAIL;
  const to = process.env.ENQUIRY_TO_EMAIL;
  if (!apiKey || !from || !to) {
    return NextResponse.json(
      { message: "Enquiry email is not configured yet. Please contact us by WhatsApp or email." },
      { status: 503 },
    );
  }

  const date = enquiry.eventDate || "Not specified";
  const text = [
    "New Aarambh Events & Production enquiry",
    "",
    `Name: ${enquiry.name}`,
    `Phone: ${enquiry.phone}`,
    `Email: ${enquiry.email}`,
    `Event type: ${enquiry.eventType}`,
    `Event date: ${date}`,
    `City: ${enquiry.city}`,
    "",
    "Message:",
    enquiry.message,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: enquiry.email,
      subject: `New enquiry: ${enquiry.eventType} — ${enquiry.name}`,
      text,
    });
    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "We could not send your enquiry right now. Please contact us by WhatsApp or email." },
      { status: 502 },
    );
  }
}
