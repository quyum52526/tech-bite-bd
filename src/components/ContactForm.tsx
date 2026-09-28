"use client";

import { CircleCheck, LoaderCircle, Send } from "lucide-react";
import { useActionState, useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { submitLead, type LeadState } from "@/app/actions";
import {
  BUDGET_OPTIONS,
  LEAD_FIELDS,
  readLead,
  OTHER_CHOICES,
  PRODUCT_CHOICES,
  SERVICE_CHOICES,
  validateLead,
  type LeadErrors,
  type LeadField,
} from "@/lib/lead";
import { INQUIRY_EVENT, type InquiryDetail } from "@/lib/inquiry";
import { Toast, type ToastData } from "./Toast";

const initialState: LeadState = { status: "idle" };

const inputClass =
  "mt-2 block w-full rounded-lg border border-white/15 bg-brand-navy-950/70 px-4 py-3 text-white placeholder:text-slate-500 transition focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/40 aria-[invalid=true]:border-red-400";

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-red-300">
      {error}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitLead, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [toast, setToast] = useState<ToastData | null>(null);
  const [dismissedId, setDismissedId] = useState<number>();
  const [seenId, setSeenId] = useState<number>();
  const closeToast = useCallback(() => setToast(null), []);

  // Sync server results into local UI state once per submission.
  if (state.id !== seenId) {
    setSeenId(state.id);
    setErrors(state.errors ?? {});
    if (state.message)
      setToast({
        id: state.id!,
        tone: state.status === "success" ? "success" : "error",
        message: state.message,
      });
  }

  const focusFirstError = (errs: LeadErrors) => {
    const first = LEAD_FIELDS.find((f) => errs[f]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  };

  useEffect(() => {
    if (state.status === "error" && state.errors) focusFirstError(state.errors);
  }, [state]);

  // "Request a Live Demo" / "Talk to an expert" buttons elsewhere on the page pre-fill the form.
  const [prefill, setPrefill] = useState<InquiryDetail & { nonce: number }>();
  useEffect(() => {
    const onInquiry = (e: Event) => {
      const detail = (e as CustomEvent<InquiryDetail>).detail;
      if (state.status === "success") setDismissedId(state.id);
      setErrors((prev) => ({ ...prev, service: undefined }));
      setPrefill({ ...detail, nonce: Date.now() });
    };
    window.addEventListener(INQUIRY_EVENT, onInquiry);
    return () => window.removeEventListener(INQUIRY_EVENT, onInquiry);
  }, [state.status, state.id]);

  const autoMessage = useRef("");
  useEffect(() => {
    const form = formRef.current;
    if (!prefill || !form) return;
    const select = form.elements.namedItem("service") as HTMLSelectElement | null;
    if (select) select.value = prefill.service;
    // Fill the message only if it is empty or still holds text we filled in earlier.
    const message = form.elements.namedItem("message") as HTMLTextAreaElement | null;
    const current = message?.value.trim() ?? "";
    if (message && (!current || current === autoMessage.current)) {
      message.value = prefill.message ?? "";
      autoMessage.current = prefill.message ?? "";
    }
    // Move keyboard focus to the first empty field once the #contact jump has happened.
    const firstEmpty = ["name", "email"]
      .map((f) => form.elements.namedItem(f) as HTMLInputElement | null)
      .find((el) => el && !el.value);
    const t = setTimeout(() => firstEmpty?.focus({ preventScroll: true }), 50);
    return () => clearTimeout(t);
  }, [prefill]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const errs = validateLead(readLead(new FormData(e.currentTarget)));
    if (Object.keys(errs).length > 0) {
      e.preventDefault();
      setErrors(errs);
      focusFirstError(errs);
    } else {
      setErrors({});
    }
  };

  const clearError = (field: LeadField) =>
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });

  const v = state.values;
  const errorCount = Object.keys(errors).length;

  if (state.status === "success" && state.id !== dismissedId) {
    return (
      <>
        <div
          role="status"
          className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-brand-navy-900/80 p-10 text-center"
        >
          <CircleCheck aria-hidden="true" className="size-14 text-brand-orange" />
          <h3 className="mt-4 text-2xl font-semibold text-white">Request received</h3>
          <p className="mt-2 text-slate-300">{state.message}</p>
          <button
            type="button"
            onClick={() => setDismissedId(state.id)}
            className="mt-6 rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
          >
            Send another message
          </button>
        </div>
        <Toast toast={toast} onClose={closeToast} />
      </>
    );
  }

  return (
    <>
      <form
        ref={formRef}
        key={state.id}
        action={formAction}
        onSubmit={onSubmit}
        onChange={(e) => clearError(((e.target as EventTarget & { name?: string }).name ?? "") as LeadField)}
        noValidate
        aria-busy={pending}
        className="rounded-2xl border border-white/10 bg-brand-navy-900/80 p-6 shadow-2xl sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-slate-200">
              Full name <span className="text-brand-orange">*</span>
            </label>
            <input
              id="name"
              name="name"
              defaultValue={v?.name}
              autoComplete="name"
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={inputClass}
              placeholder="Your name"
            />
            <FieldError id="name-error" error={errors.name} />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-slate-200">
              Email <span className="text-brand-orange">*</span>
            </label>
            <input
              id="email"
              name="email"
              defaultValue={v?.email}
              type="email"
              autoComplete="email"
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={inputClass}
              placeholder="you@company.com"
            />
            <FieldError id="email-error" error={errors.email} />
          </div>
          <div>
            <label htmlFor="phone" className="text-sm font-medium text-slate-200">
              Phone / WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              defaultValue={v?.phone}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={inputClass}
              placeholder="Optional, e.g. +880 1XXX-XXXXXX"
            />
            <FieldError id="phone-error" error={errors.phone} />
          </div>
          <div>
            <label htmlFor="service" className="text-sm font-medium text-slate-200">
              Service or product <span className="text-brand-orange">*</span>
            </label>
            <select
              id="service"
              name="service"
              required
              defaultValue={v?.service ?? ""}
              aria-invalid={!!errors.service}
              aria-describedby={errors.service ? "service-error" : undefined}
              className={inputClass}
            >
              <option value="" disabled>
                Select a service or product
              </option>
              {(
                [
                  ["Services", SERVICE_CHOICES],
                  ["Ready products", PRODUCT_CHOICES],
                  ["Other", OTHER_CHOICES],
                ] as const
              ).map(([group, options]) => (
                <optgroup key={group} label={group}>
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <FieldError id="service-error" error={errors.service} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="budget" className="text-sm font-medium text-slate-200">
              Estimated budget
            </label>
            <select id="budget" name="budget" defaultValue={v?.budget ?? ""} className={inputClass}>
              <option value="">Prefer not to say</option>
              {BUDGET_OPTIONS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-200">
              Project details <span className="text-brand-orange">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={2000}
              required
              defaultValue={v?.message}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={inputClass}
              placeholder="What are you looking to build or grow?"
            />
            <FieldError id="message-error" error={errors.message} />
          </div>

          {/* Honeypot for bots */}
          <div aria-hidden="true" className="hidden">
            <label htmlFor="company_website">Leave this empty</label>
            <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
          </div>
        </div>

        {errorCount > 0 && (
          <p className="mt-5 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-200">
            Please fix {errorCount === 1 ? "the highlighted field" : `the ${errorCount} highlighted fields`}.
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-8 py-4 font-semibold text-white shadow-lg shadow-brand-orange/25 transition hover:bg-brand-orange-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? (
            <>
              <LoaderCircle aria-hidden="true" className="size-5 animate-spin" /> Sending…
            </>
          ) : (
            <>
              Book My Free Consultation <Send aria-hidden="true" className="size-5" />
            </>
          )}
        </button>
        <p className="mt-3 text-center text-xs text-slate-400">
          No spam. We only use your details to reply to this request.
        </p>
      </form>
      <Toast toast={toast} onClose={closeToast} />
    </>
  );
}
