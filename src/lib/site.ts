import {
  AudioLines,
  Calculator,
  CodeXml,
  FileCog,
  Handshake,
  Megaphone,
  Palette,
  ScanBarcode,
  ShoppingCart,
  Smartphone,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Tech Bite BD",
  tagline: "IT & Creative Agency",
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
  { href: "#products", label: "Products" },
  { href: "#stack", label: "Tech Stack" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export type ServiceCategory =
  | "Development"
  | "Business Software"
  | "AI & Automation"
  | "Marketing & Creative";
export type ServiceVisual = "browser" | "phone" | "dashboard" | "voice" | "document" | "chart" | "design";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  category: ServiceCategory;
  // Mockup drawn in CSS until a real screenshot is added via `image` (path in /public).
  visual: ServiceVisual;
  image?: string;
};

export const services: Service[] = [
  {
    icon: CodeXml,
    title: "Web & App Development",
    description:
      "Fast, SEO-ready websites and mobile apps built on modern frameworks that scale with your business.",
    category: "Development",
    visual: "browser",
  },
  {
    icon: Smartphone,
    title: "Progressive Web App (PWA)",
    description: "Convert your website into a mobile app for better accessibility and engagement.",
    category: "Development",
    visual: "phone",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Website & App",
    description: "Full-featured e-commerce solutions with multi-vendor and multi-payment gateway support.",
    category: "Development",
    visual: "browser",
  },
  {
    icon: ScanBarcode,
    title: "POS (Point of Sale) System",
    description: "Smart billing solution for both physical and online stores.",
    category: "Business Software",
    visual: "dashboard",
  },
  {
    icon: Calculator,
    title: "Accounting & Inventory Software",
    description: "Manage stock, sales, accounts, and profit analytics in one platform.",
    category: "Business Software",
    visual: "chart",
  },
  {
    icon: Users,
    title: "HRM & Payroll Software",
    description: "Complete employee management with attendance, salary, and leave automation.",
    category: "Business Software",
    visual: "dashboard",
  },
  {
    icon: Handshake,
    title: "CRM System",
    description: "Customer relationship management with automated follow-up and communication workflows.",
    category: "Business Software",
    visual: "chart",
  },
  {
    icon: AudioLines,
    title: "AI Voice Agent",
    description: "Voice-based customer support system for call center automation.",
    category: "AI & Automation",
    visual: "voice",
  },
  {
    icon: FileCog,
    title: "Document & Email Automation",
    description: "Auto-generate PDFs, invoices, and email triggers with AI-driven workflows.",
    category: "AI & Automation",
    visual: "document",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & SEO",
    description:
      "Data-driven campaigns and technical SEO that put your brand in front of buyers who are ready to act.",
    category: "Marketing & Creative",
    visual: "chart",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Manage and optimize Facebook, Instagram, and LinkedIn ad campaigns.",
    category: "Marketing & Creative",
    visual: "phone",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description:
      "Graphics, motion design and video editing that make your brand look as good as it performs.",
    category: "Marketing & Creative",
    visual: "design",
  },
];

export type Product = {
  name: string;
  kind: string;
  description: string;
  features: string[];
  mockup: "crm" | "hrms" | "pos";
};

export const products: Product[] = [
  {
    name: "Techbite-CRM",
    kind: "Customer relationship management",
    description: "Streamlined lead tracking, pipeline automation, and multi-channel customer communication.",
    features: ["Lead tracking", "Pipeline automation", "Multi-channel communication"],
    mockup: "crm",
  },
  {
    name: "Techbite-HRMS",
    kind: "HR & payroll management",
    description:
      "Attendance tracking, automated payroll, leave workflows, and employee performance dashboard.",
    features: ["Attendance tracking", "Automated payroll", "Leave workflows", "Performance dashboard"],
    mockup: "hrms",
  },
  {
    name: "bitePOS",
    kind: "Retail & restaurant POS",
    description:
      "Ultra-fast, cloud & offline hybrid retail/restaurant POS with inventory sync and receipt printing.",
    features: ["Cloud + offline hybrid", "Inventory sync", "Receipt printing"],
    mockup: "pos",
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
    summary: "A headless storefront with fast product search, local payment gateways and an admin dashboard.",
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
    summary: "Brand identity, motion teasers and a paid social campaign for a new consumer product launch.",
    tags: ["Branding", "Motion", "Meta Ads"],
    accent: "from-fuchsia-500/60 to-brand-orange/70",
  },
];
