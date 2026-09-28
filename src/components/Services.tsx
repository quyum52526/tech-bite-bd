import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site";
import { InquiryButton } from "./InquiryButton";
import { SectionHeading } from "./SectionHeading";
import { ServiceVisual } from "./ServiceVisual";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="services-heading"
          eyebrow="What we do"
          title="Everything your business needs to win online"
          description="Websites, business software, AI automation and marketing — one partner, so your product, operations and brand all pull in the same direction."
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map(({ icon, title, description, category, visual, image }) => (
            <li
              key={title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-brand-navy-900/60 transition duration-300 hover:-translate-y-1 hover:border-brand-orange/50"
            >
              {image ? (
                <div className="relative aspect-[16/9]">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <ServiceVisual visual={visual} category={category} icon={icon} />
              )}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold tracking-wider text-brand-orange uppercase">{category}</p>
                <h3 className="mt-2 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl bg-gradient-to-r from-brand-orange to-brand-orange-dark p-8 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-bold text-white">Need something custom?</h3>
            <p className="mt-1 text-white/90">
              We also build bespoke software around your workflow. Tell us your goal — no obligation.
            </p>
          </div>
          <InquiryButton
            service="Custom software / something else"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand-navy-900 transition hover:bg-brand-navy-950 hover:text-white"
          >
            Talk to an expert <ArrowRight aria-hidden="true" className="size-4" />
          </InquiryButton>
        </div>
      </div>
    </section>
  );
}
