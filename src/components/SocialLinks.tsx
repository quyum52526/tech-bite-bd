import { socialLinks } from "@/lib/site";
import { SocialIcon } from "./SocialIcon";

export function SocialLinks({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" }) {
  const box = size === "sm" ? "size-9" : "size-10";
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {socialLinks.map(({ platform, label, href }) => (
        <li key={platform}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} (opens in a new tab)`}
            className={`grid ${box} place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-brand-orange hover:bg-brand-orange hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange`}
          >
            <SocialIcon platform={platform} className="size-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
