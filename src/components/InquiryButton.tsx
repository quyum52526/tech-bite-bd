"use client";

import type { ReactNode } from "react";
import { requestInquiry } from "@/lib/inquiry";

// A plain #contact link (works without JS) that also pre-fills the contact form.
export function InquiryButton({
  service,
  message,
  className,
  children,
}: {
  service: string;
  message?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href="#contact" onClick={() => requestInquiry({ service, message })} className={className}>
      {children}
    </a>
  );
}
