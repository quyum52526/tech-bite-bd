import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/site";
import { InquiryButton } from "./InquiryButton";
import { SectionHeading } from "./SectionHeading";

const host = (url: string) => new URL(url).host;

function StatusBadge({ status = "live" }: { status?: Project["status"] }) {
  const prototype = status === "prototype";
  const dot = prototype ? "bg-amber-400" : "bg-emerald-400";
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-medium ${prototype ? "text-amber-300" : "text-emerald-300"}`}
    >
      <span aria-hidden="true" className="relative flex size-2">
        <span
          className={`absolute inline-flex size-full rounded-full opacity-75 motion-safe:animate-ping ${dot}`}
        />
        <span className={`relative inline-flex size-2 rounded-full ${dot}`} />
      </span>
      {prototype ? "Interactive Prototype" : "Live Demo"}
    </span>
  );
}

export function Portfolio() {
  return (
    <section id="work" aria-labelledby="work-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="work-heading"
          eyebrow="Live ecosystem showcase"
          title="Real products, running live"
          description="No mockups — these are our deployed projects. Open any of them and click around."
        />

        <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <li key={project.url}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-brand-navy-900/70 shadow-lg transition duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.015] hover:border-brand-orange/60 hover:shadow-[0_0_0_1px_rgb(255_107_26/0.25),0_24px_60px_-15px_rgb(255_107_26/0.35)] focus-within:border-brand-orange/60 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100">
                {/* Browser window chrome */}
                <div className="flex items-center gap-3 border-b border-white/10 bg-brand-navy-950/80 px-4 py-3">
                  <div aria-hidden="true" className="flex shrink-0 gap-1.5">
                    <span className="size-2.5 rounded-full bg-red-400/60" />
                    <span className="size-2.5 rounded-full bg-amber-300/60" />
                    <span className="size-2.5 rounded-full bg-emerald-400/60" />
                  </div>
                  <p className="min-w-0 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-center font-mono text-[11px] text-slate-400 transition-colors group-hover:text-slate-200">
                    {host(project.url)}
                  </p>
                </div>

                {project.image && (
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange-light">
                      {project.category}
                    </span>
                    <StatusBadge status={project.status} />
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">{project.summary}</p>

                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li key={tag} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {/* The ::after overlay makes the whole card clickable while keeping a single link. */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full border border-brand-orange/50 px-5 py-2.5 text-sm font-semibold text-white transition group-hover:border-brand-orange group-hover:bg-brand-orange after:absolute after:inset-0 after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
                  >
                    Explore Live
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                    <span className="sr-only">: {project.title} (opens in a new tab)</span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <InquiryButton
            service="Not sure yet"
            className="inline-flex items-center gap-2 font-semibold text-brand-orange hover:text-brand-orange-light"
          >
            Want something like this for your business? Let&apos;s talk
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </InquiryButton>
        </div>
      </div>
    </section>
  );
}
