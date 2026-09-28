import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Portfolio() {
  return (
    <section id="work" aria-labelledby="work-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="work-heading"
          eyebrow="Portfolio"
          title="Work that moves the needle"
          description="A preview of the kind of projects we deliver across development, design and marketing."
        />

        <ul className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.title}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-brand-navy-900/60 transition hover:border-brand-orange/50">
                <div
                  aria-hidden="true"
                  className={`relative aspect-[16/10] bg-gradient-to-br ${project.accent} overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-grid opacity-60" />
                  <div className="absolute inset-x-6 bottom-0 h-3/4 translate-y-4 rounded-t-xl border border-white/20 bg-brand-navy-950/70 p-4 shadow-2xl transition-transform duration-500 group-hover:translate-y-1">
                    <div className="flex gap-1.5">
                      <span className="size-2.5 rounded-full bg-white/30" />
                      <span className="size-2.5 rounded-full bg-white/30" />
                      <span className="size-2.5 rounded-full bg-white/30" />
                    </div>
                    <div className="mt-4 h-2.5 w-2/3 rounded bg-white/25" />
                    <div className="mt-2 h-2.5 w-1/2 rounded bg-white/15" />
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-10 rounded bg-white/10" />
                      <div className="h-10 rounded bg-white/10" />
                      <div className="h-10 rounded bg-brand-orange/40" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                    {project.category}
                  </p>
                  <h3 className="mt-2 flex items-start justify-between gap-2 text-xl font-semibold text-white">
                    {project.title}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-5 shrink-0 text-slate-400 transition group-hover:text-brand-orange"
                    />
                  </h3>
                  <p className="mt-3 flex-1 text-slate-300">{project.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-semibold text-brand-orange hover:text-brand-orange-light"
          >
            Want results like these? Let&apos;s talk
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
