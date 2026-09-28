import "server-only";
import type { LeadValues } from "@/lib/lead";

const RESEND_URL = "https://api.resend.com/emails";

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

// Keep header values single-line.
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ");

function renderLead(lead: LeadValues, submittedAt: string) {
  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone / WhatsApp", lead.phone || "—"],
    ["Service", lead.service],
    ["Budget", lead.budget || "Prefer not to say"],
    ["Submitted", submittedAt],
  ];
  const waDigits = lead.phone.replace(/\D/g, "");

  const text = [
    "New inquiry from the Tech Bite BD website",
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Project details:",
    lead.message,
    "",
    "Reply to this email to answer the lead directly.",
  ].join("\n");

  const html = `<!doctype html><html><body style="margin:0;background:#f4f5f8;font-family:Arial,Helvetica,sans-serif;color:#0a1631">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 12px"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden">
<tr><td style="background:#0a1631;padding:20px 24px;color:#ffffff;font-size:18px;font-weight:bold">
Tech <span style="color:#ff6b1a">Bite</span> BD &middot; New website inquiry</td></tr>
<tr><td style="padding:24px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px">
${rows
  .map(
    ([k, v]) =>
      `<tr><td style="padding:8px 0;color:#5b6478;width:150px;vertical-align:top">${k}</td><td style="padding:8px 0;font-weight:bold">${escape(v)}</td></tr>`,
  )
  .join("")}
</table>
<p style="margin:20px 0 8px;color:#5b6478;font-size:14px">Project details</p>
<div style="background:#f4f5f8;border-left:4px solid #ff6b1a;padding:14px 16px;font-size:14px;line-height:1.6;white-space:pre-wrap">${escape(lead.message)}</div>
<p style="margin:24px 0 0">
<a href="mailto:${encodeURIComponent(lead.email)}" style="display:inline-block;background:#ff6b1a;color:#ffffff;text-decoration:none;padding:10px 18px;border-radius:999px;font-weight:bold;font-size:14px">Reply by email</a>
${waDigits.length >= 7 ? `&nbsp;<a href="https://wa.me/${waDigits}" style="display:inline-block;background:#25d366;color:#0a1631;text-decoration:none;padding:10px 18px;border-radius:999px;font-weight:bold;font-size:14px">WhatsApp</a>` : ""}
</p>
</td></tr></table>
<p style="font-size:12px;color:#8a92a6">Sent from the contact form on the Tech Bite BD website.</p>
</td></tr></table></body></html>`;

  return { html, text };
}

export class EmailNotConfiguredError extends Error {}

export async function sendLeadEmail(lead: LeadValues) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new EmailNotConfiguredError("RESEND_API_KEY is not set");

  const to = process.env.LEAD_TO_EMAIL || "quyum52526@gmail.com";
  const from = process.env.LEAD_FROM_EMAIL || "Tech Bite BD Website <onboarding@resend.dev>";
  const submittedAt = new Date().toLocaleString("en-GB", { timeZone: "Asia/Dhaka", dateStyle: "medium", timeStyle: "short" }) + " (BST)";
  const { html, text } = renderLead(lead, submittedAt);

  const res = await fetch(RESEND_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: lead.email,
      subject: oneLine(`New inquiry: ${lead.service} — ${lead.name}`),
      html,
      text,
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!res.ok) {
    throw new Error(`Resend responded ${res.status}: ${await res.text().catch(() => "")}`);
  }
}
