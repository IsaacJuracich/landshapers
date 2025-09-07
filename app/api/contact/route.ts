import { NextRequest, NextResponse } from "next/server";
import { validateEmail, validatePhone } from "@/app/lib/utils";
import { ContactFormData } from "@/app/lib/types/forms";

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Server-side validation
    const errors: Record<string, string> = {};

    if (!data.name?.trim()) {
      errors.name = "Name is required";
    }

    if (!data.email?.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(data.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!data.phone?.trim()) {
      errors.phone = "Phone number is required";
    } else if (!validatePhone(data.phone)) {
      errors.phone = "Please enter a valid phone number";
    }

    if (!data.projectType) {
      errors.projectType = "Please select a project type";
    }

    if (!data.message?.trim()) {
      errors.message = "Message is required";
    } else if (data.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM system
    // 4. Send auto-response email

    console.log("Contact form submission:", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      projectType: data.projectType,
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message:
        "Thank you for your message. We will get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
