import { products, services } from "@/lib/site";

// Shared by the client (instant feedback) and the server action (source of truth).

export const LEAD_FIELDS = ["name", "email", "phone", "service", "budget", "message"] as const;
export type LeadField = (typeof LEAD_FIELDS)[number];
export type LeadValues = Record<LeadField, string>;
export type LeadErrors = Partial<Record<LeadField, string>>;

export const SERVICE_CHOICES = services.map((s) => s.title);
export const PRODUCT_CHOICES = products.map((p) => `${p.name} (live demo)`);
export const OTHER_CHOICES = ["Custom software / something else", "Not sure yet"];
export const SERVICE_OPTIONS = [...SERVICE_CHOICES, ...PRODUCT_CHOICES, ...OTHER_CHOICES];

export const demoChoice = (productName: string) => `${productName} (live demo)`;
export const BUDGET_OPTIONS = ["Small project", "Medium project", "Large / ongoing"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[\d\s\-()]{7,20}$/;

export function readLead(formData: FormData): LeadValues {
  return Object.fromEntries(LEAD_FIELDS.map((f) => [f, String(formData.get(f) ?? "").trim()])) as LeadValues;
}

export function validateLead(v: LeadValues): LeadErrors {
  const errors: LeadErrors = {};
  if (v.name.length < 2 || v.name.length > 100) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(v.email) || v.email.length > 200) errors.email = "Please enter a valid email address.";
  if (v.phone && !PHONE_RE.test(v.phone)) errors.phone = "Please enter a valid phone number.";
  if (!SERVICE_OPTIONS.includes(v.service)) errors.service = "Please choose a service.";
  if (v.budget && !BUDGET_OPTIONS.includes(v.budget)) errors.budget = "Please choose a budget option.";
  if (v.message.length < 10) errors.message = "Tell us a little about your project (at least 10 characters).";
  else if (v.message.length > 2000) errors.message = "Please keep it under 2000 characters.";
  return errors;
}
