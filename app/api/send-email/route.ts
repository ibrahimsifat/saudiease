import {
  sendEmail,
  type ConsultationFormData,
  type ContactFormData,
  type EmailType,
  type QuoteFormData,
} from "@/lib/email";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email type
    if (!["contact", "quote", "consultation"].includes(type)) {
      return NextResponse.json(
        { success: false, error: "Invalid email type" },
        { status: 400 }
      );
    }

    // Validate required fields based on type
    if (!data.name || !data.email || !data.recaptchaToken) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email based on type
    const result = await sendEmail(
      type as EmailType,
      data as ContactFormData | QuoteFormData | ConsultationFormData
    );

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in send-email route:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
