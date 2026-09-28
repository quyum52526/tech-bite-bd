import {
  Clapperboard,
  CodeXml,
  Cpu,
  Megaphone,
  Share2,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Tech Bite BD",
  tagline: "IT & Digital Creative Agency",
  email: "quyum52526@gmail.com",
  phone: "+880 1962-434901",
  phoneHref: "tel:+8801962434901",
  whatsappHref: "https://wa.me/8801962434901",
  address: "East Nasirabad, Baizid, Chittagong, Bangladesh",
};

export const socialLinks = [
  { platform: "facebook", label: "Facebook", href: "https://www.facebook.com/techbitesbd" },
  { platform: "instagram", label: "Instagram", href: "https://www.instagram.com/techbitbd" },
  { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/techbitesofficial" },
] as const;

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Tech Stack" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    icon: CodeXml,
    title: "Web & App Development",
    description:
      "Fast, SEO-ready websites and mobile apps built on modern frameworks that scale with your business.",
    points: ["Next.js & React sites", "iOS & Android apps", "E-commerce stores"],
  },
  {
    icon: Cpu,
    title: "Custom Software Solutions",
    description:
      "Tailored business software that replaces spreadsheets and manual work with clean, automated workflows.",
    points: ["Dashboards & portals", "ERP / inventory tools", "API integrations"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & SEO",
    description:
      "Data-driven campaigns and technical SEO that put your brand in front of buyers who are ready to act.",
    points: ["Technical & local SEO", "Google & Meta ads", "Analytics & reporting"],
  },
  {
    icon: Clapperboard,
    title: "Creative Design",
    description:
      "Graphics, motion design and video editing that make your brand look as good as it performs.",
    points: ["Brand identity & graphics", "Motion graphics", "Video editing & AI video"],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Consistent, on-brand content and community management across the platforms your customers use.",
    points: ["Content calendars", "Reels & short-form video", "Community management"],
  },
];

export const techStack: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "PostgreSQL", "MongoDB", "REST & GraphQL"] },
  { group: "Mobile", items: ["React Native", "Flutter"] },
  { group: "Cloud & DevOps", items: ["Vercel", "AWS", "Docker", "GitHub Actions"] },
  { group: "Design & Motion", items: ["Figma", "Adobe Suite", "After Effects", "Premiere Pro"] },
  { group: "Marketing", items: ["Google Analytics", "Search Console", "Meta Ads", "Google Ads"] },
];

export const capabilities = [
  "Mobile-first, accessible builds",
  "Core Web Vitals optimised",
  "Clear weekly progress updates",
  "Post-launch support",
];

export type Project = {
  title: string;
  category: string;
  summary: string;
  tags: string[];
  // Tailwind gradient classes for the preview tile until real screenshots are added.
  accent: string;
};

// Sample entries — replace with real client work (title, summary, results, screenshot).
export const projects: Project[] = [
  {
    title: "E-commerce Storefront",
    category: "Web Development",
    summary:
      "A headless storefront with fast product search, local payment gateways and an admin dashboard.",
    tags: ["Next.js", "Stripe / SSLCommerz", "SEO"],
    accent: "from-brand-orange/80 to-amber-400/60",
  },
  {
    title: "Logistics Operations Portal",
    category: "Custom Software",
    summary:
      "Internal tool that tracks shipments, billing and staff tasks in one place instead of scattered sheets.",
    tags: ["Dashboard", "PostgreSQL", "Automation"],
    accent: "from-sky-500/70 to-brand-navy-400/60",
  },
  {
    title: "Brand Launch Campaign",
    category: "Design & Marketing",
    summary:
      "Brand identity, motion teasers and a paid social campaign for a new consumer product launch.",
    tags: ["Branding", "Motion", "Meta Ads"],
    accent: "from-fuchsia-500/60 to-brand-orange/70",
  },
];
