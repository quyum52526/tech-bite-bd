import { navLinks, services, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-brand-navy-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-slate-400">
            {site.tagline} helping businesses build, brand and grow with technology, marketing and creative.
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold text-white">Company</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-slate-400 hover:text-brand-orange">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            {services.map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} {site.name}. All rights reserved.</p>
          <a href={`mailto:${site.email}`} className="hover:text-slate-300">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
