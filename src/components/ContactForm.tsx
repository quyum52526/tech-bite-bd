"use client";

import { CircleCheck, LoaderCircle, Send } from "lucide-react";
import { useActionState } from "react";
import { submitLead, type LeadState } from "@/app/actions";
import { services } from "@/lib/site";

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
  const errors = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div role="status" className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-brand-navy-900/80 p-10 text-center">
        <CircleCheck aria-hidden="true" className="size-14 text-brand-orange" />
        <h3 className="mt-4 text-2xl font-semibold text-white">Request received</h3>
        <p className="mt-2 text-slate-300">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
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
            className={inputClass}
            placeholder="Optional"
          />
        </div>
        <div>
          <label htmlFor="service" className="text-sm font-medium text-slate-200">
            Service needed <span className="text-brand-orange">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={inputClass}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.title} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
          <FieldError id="service-error" error={errors.service} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="budget" className="text-sm font-medium text-slate-200">
            Estimated budget
          </label>
          <select id="budget" name="budget" defaultValue="" className={inputClass}>
            <option value="">Prefer not to say</option>
            <option>Small project</option>
            <option>Medium project</option>
            <option>Large / ongoing</option>
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
            required
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

      {state.status === "error" && state.message && (
        <p role="alert" className="mt-5 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {state.message}
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
  );
}
