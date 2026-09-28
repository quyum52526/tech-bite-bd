import { ArrowRight, CircleCheck, Sparkles } from "lucide-react";

const highlights = ["Web & App Development", "Custom Software", "SEO & Marketing", "Design & Video"];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div aria-hidden="true" className="absolute -top-40 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-orange/20 blur-3xl" />
      <div aria-hidden="true" className="absolute top-40 -right-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-navy-700/50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 text-sm font-medium text-brand-orange-light">
          <Sparkles aria-hidden="true" className="size-4" />
          IT & Digital Creative Agency
        </p>

        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          We build, brand and grow <span className="text-gradient">digital businesses</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          From high-performance websites and custom software to SEO, social media and scroll-stopping
          video — Tech Bite BD is the one team that takes your idea from launch to growth.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-8 py-4 text-base font-semibold text-white shadow-xl shadow-brand-orange/30 transition hover:bg-brand-orange-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange sm:w-auto"
          >
            Book a Free Consultation
            <ArrowRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#work"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/5 sm:w-auto"
          >
            See Our Work
          </a>
        </div>

        <ul className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-300">
          {highlights.map((item) => (
            <li key={item} className="inline-flex items-center gap-2">
              <CircleCheck aria-hidden="true" className="size-4 text-brand-orange" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
