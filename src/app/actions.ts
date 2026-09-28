"use server";

import { EmailNotConfiguredError, sendLeadEmail } from "@/lib/email";
import { readLead, validateLead, type LeadErrors, type LeadValues } from "@/lib/lead";
import { site } from "@/lib/site";

export type LeadState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: LeadErrors;
  values?: LeadValues;
  // Changes on every submission so the client can re-show the same toast.
  id?: number;
};

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  const values = readLead(formData);
  const id = Date.now();

  // Honeypot: real users never see or fill this field.
  if (String(formData.get("company_website") ?? "")) {
    return { status: "success", message: "Thanks! We'll be in touch soon.", id };
  }

  const errors = validateLead(values);
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors, values, id };
  }

  try {
    await sendLeadEmail(values);
  } catch (err) {
    if (err instanceof EmailNotConfiguredError && process.env.NODE_ENV !== "production") {
      console.warn("[lead] RESEND_API_KEY not set — lead logged instead of emailed:", values);
    } else {
      console.error("[lead] email delivery failed", err, values);
      return {
        status: "error",
        message: `Sorry, we couldn't send your message. Please try again, or reach us on WhatsApp (${site.phone}).`,
        values,
        id,
      };
    }
  }

  return {
    status: "success",
    message: `Thanks, ${values.name.split(" ")[0]}! We'll get back to you within one business day.`,
    id,
  };
}
