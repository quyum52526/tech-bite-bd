import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, products, services, site } from "@/lib/site";
import { Logo } from "./Logo";
import { SocialIcon } from "./SocialIcon";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-brand-navy-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.4fr] lg:px-8">
        <div>
          <Logo className="h-20 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-slate-400">
            {site.tagline} helping businesses build, brand and grow with technology, marketing and creative.
          </p>
          <SocialLinks size="sm" className="mt-6" />
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
          <ul className="mt-4 space-y-2 text-sm">
            {[...new Set(services.map((s) => s.category))].map((category) => (
              <li key={category}>
                <a href="#services" className="text-slate-400 hover:text-brand-orange">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Products</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {products.map((p) => (
              <li key={p.name}>
                <a href="#products" className="text-slate-400 hover:text-brand-orange">
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-orange" />
              <a href={site.phoneHref} className="hover:text-brand-orange">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <SocialIcon platform="whatsapp" className="mt-0.5 size-4 shrink-0 text-brand-orange" />
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-orange"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-orange" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-brand-orange">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-orange" />
              <address className="not-italic">{site.address}</address>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Chittagong, Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
