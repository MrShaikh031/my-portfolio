import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // Check Resend API key
    const apiKey = process.env.RESEND_API_KEY;
    console.log("Resend API key loaded:", Boolean(apiKey));

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing from .env.local");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    // Read form data
    const body = await request.json();

    const { name, email, subject, message } = body;

    // Validate required fields
    if (
      !name?.trim() ||
      !email?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    // Initialize Resend
    const resend = new Resend(apiKey);

    // Send email
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["shaikhtohid890@gmail.com"],
      subject: `Portfolio Contact: ${subject}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    });

    // Handle email errors
    if (error) {
      console.error("Resend email error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send email. Please try again later.",
        },
        { status: 502 }
      );
    }

    console.log("Email sent successfully:", data?.id);

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while processing your message.",
      },
      { status: 500 }
    );
  }
}