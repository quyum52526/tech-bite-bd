import { Gauge, Layers, ShieldCheck, Zap } from "lucide-react";
import { capabilities, techStack } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

const capabilityIcons = [Layers, Gauge, Zap, ShieldCheck];

export function TechStack() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="relative py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="stack-heading"
          eyebrow="Tech stack & capabilities"
          title="Modern tools. Proven process."
          description="We pick battle-tested technology so your product is fast today and easy to grow tomorrow."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map(({ group, items }) => (
            <div key={group} className="rounded-2xl border border-white/10 bg-brand-navy-950/60 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-orange">{group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((label, i) => {
            const Icon = capabilityIcons[i % capabilityIcons.length];
            return (
              <li key={label} className="flex items-center gap-3 rounded-xl bg-white/5 px-5 py-4">
                <Icon aria-hidden="true" className="size-5 shrink-0 text-brand-orange" />
                <span className="text-sm font-medium text-white">{label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
