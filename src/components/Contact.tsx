import { Clock, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";

const steps = [
  "Share your goals using the form",
  "Get a free 30-minute strategy call",
  "Receive a clear proposal & timeline",
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden border-t border-white/10 bg-brand-navy-900/50 py-20 sm:py-28"
    >
      <div aria-hidden="true" className="absolute -bottom-40 -left-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-brand-orange/15 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">Let&apos;s work together</p>
          <h2 id="contact-heading" className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Book your <span className="text-gradient">free consultation</span>
          </h2>
          <p className="mt-5 text-lg text-slate-300">
            Tell us where you want to be. We&apos;ll map out the fastest route there — whether that&apos;s a
            new website, custom software, or a growth campaign.
          </p>

          <ol className="mt-10 space-y-5">
            {steps.map((step, i) => (
              <li key={step} className="flex items-center gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-brand-orange/40 bg-brand-orange/10 font-bold text-brand-orange">
                  {i + 1}
                </span>
                <span className="text-slate-200">{step}</span>
              </li>
            ))}
          </ol>

          <ul className="mt-10 space-y-4 text-slate-300">
            <li className="flex items-center gap-3">
              <Mail aria-hidden="true" className="size-5 text-brand-orange" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            {site.phone && (
              <li className="flex items-center gap-3">
                <Phone aria-hidden="true" className="size-5 text-brand-orange" />
                <a href={`tel:${site.phone.replace(/\s|-/g, "")}`} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
            )}
            <li className="flex items-center gap-3">
              <MapPin aria-hidden="true" className="size-5 text-brand-orange" />
              {site.location}
            </li>
            <li className="flex items-center gap-3">
              <Clock aria-hidden="true" className="size-5 text-brand-orange" />
              Replies within one business day
            </li>
            <li className="flex items-center gap-3">
              <MessageSquare aria-hidden="true" className="size-5 text-brand-orange" />
              Consultations in English & বাংলা
            </li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
