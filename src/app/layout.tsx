import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tech Bite BD — IT & Digital Creative Agency",
  description:
    "Tech Bite BD builds websites, apps and custom software, and grows brands with SEO, digital marketing, creative design and social media management.",
  openGraph: {
    title: "Tech Bite BD — IT & Digital Creative Agency",
    description:
      "Web & app development, custom software, SEO, creative design and social media — under one roof.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050b1c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`}>
      <body className="min-h-dvh font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-orange focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
