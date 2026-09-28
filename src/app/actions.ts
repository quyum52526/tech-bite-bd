"use server";

import { services } from "@/lib/site";

export type LeadState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "service" | "message", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SERVICE_OPTIONS = new Set([...services.map((s) => s.title), "Not sure yet"]);

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  // Honeypot: real users never see or fill this field.
  if (String(formData.get("company_website") ?? "")) {
    return { status: "success", message: "Thanks! We'll be in touch soon." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: LeadState["errors"] = {};
  if (name.length < 2 || name.length > 100) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email) || email.length > 200) errors.email = "Please enter a valid email address.";
  if (!SERVICE_OPTIONS.has(service)) errors.service = "Please choose a service.";
  if (message.length < 10 || message.length > 2000)
    errors.message = "Tell us a little about your project (at least 10 characters).";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors };
  }

  // TODO: deliver the lead (email via Resend/SMTP, Google Sheets, CRM webhook, etc.).
  // Until then leads only appear in the server logs.
  console.info("[lead]", { name, email, phone, service, budget, message, at: new Date().toISOString() });

  return {
    status: "success",
    message: `Thanks, ${name.split(" ")[0]}! We'll get back to you within one business day.`,
  };
}
