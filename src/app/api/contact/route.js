import { NextResponse } from "next/server";
import {
  RECAPTCHA_SECRET_KEY,
  CONTACT_API_BASE_URL,
  CONTACT_API_ENDPOINT,
  CONTACT_API_TOKEN,
  CONTACT_RECEIVER_EMAIL,
} from "@/lib/constants";

export async function POST(request) {
  try {
    const { fullName, email, subject, message, captchaToken } =
      await request.json();

    // Verify reCAPTCHA server-side
    if (!captchaToken) {
      return NextResponse.json(
        { error: "Captcha verification required" },
        { status: 400 }
      );
    }

    const captchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      }
    );

    const captchaData = await captchaRes.json();

    if (!captchaData.success) {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 403 }
      );
    }

    // Send to external contact API
    const contactRes = await fetch(
      `${CONTACT_API_BASE_URL}${CONTACT_API_ENDPOINT}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Contact-Token": CONTACT_API_TOKEN,
        },
        body: JSON.stringify({
          fullname: fullName,
          email,
          receiver: CONTACT_RECEIVER_EMAIL,
          subject,
          message,
        }),
      }
    );

    const responseText = await contactRes.text();

    if (!contactRes.ok) {
      console.error("Contact API error:", contactRes.status, responseText);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    let contactData;
    try {
      contactData = JSON.parse(responseText);
    } catch {
      contactData = { message: responseText };
    }

    return NextResponse.json({ success: true, data: contactData });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
