import { Check } from "lucide-react";
import { services } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="services-heading"
          eyebrow="What we do"
          title="Everything your brand needs to win online"
          description="One partner for technology, marketing and creative — so your product, message and visuals all pull in the same direction."
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description, points }) => (
            <li
              key={title}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-brand-navy-900/60 p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-orange/50 hover:bg-brand-navy-800/60"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-brand-orange/15 text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                <Icon aria-hidden="true" className="size-6" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-slate-300">{description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <Check aria-hidden="true" className="size-4 shrink-0 text-brand-orange" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange-dark p-8">
            <div>
              <h3 className="text-xl font-semibold text-white">Not sure where to start?</h3>
              <p className="mt-3 text-white/90">
                Tell us your goal. We&apos;ll recommend the right mix of services — no obligation.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex w-fit items-center rounded-full bg-white px-6 py-3 font-semibold text-brand-navy-900 transition hover:bg-brand-navy-950 hover:text-white"
            >
              Talk to an expert
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
