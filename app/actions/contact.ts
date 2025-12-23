"use server";

import { z } from "zod";
import { Resend } from "resend";

// Initialize Resend with API Key
const resend = new Resend(process.env.RESEND_API_KEY);

// Define Zod Schema
export const ContactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    subject: z.string().min(2, "Please select or enter a subject"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormState = {
    success: boolean;
    message: string;
    errors?: {
        [K in keyof z.infer<typeof ContactSchema>]?: string[];
    };
};

export async function sendContactEmail(
    prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    // Validate fields
    const validatedFields = ContactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        subject: formData.get("subject"),
        message: formData.get("message"),
    });

    // If validation fails, return errors
    if (!validatedFields.success) {
        return {
            success: false,
            message: "Please check the form for errors.",
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { name, email, phone, subject, message } = validatedFields.data;

    try {
        const data = await resend.emails.send({
            from: "Western Corridor Contact <onboarding@resend.dev>", // TODO: Update with your verified domain
            to: ["delivered@resend.dev"], // TODO: Update with your destination email
            subject: `New Contact Form Submission: ${subject}`,
            text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "N/A"}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
            // You can also add an html property here for a better looking email
        });

        if (data.error) {
            console.error("Resend Error:", data.error);
            return {
                success: false,
                message: "Failed to send email. Please try again later.",
            };
        }

        return {
            success: true,
            message: "Message sent successfully!",
        };
    } catch (error) {
        console.error("Server Error:", error);
        return {
            success: false,
            message: "Something went wrong. Please try again.",
        };
    }
}
