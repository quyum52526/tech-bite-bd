import Image from "next/image";

// Trimmed, web-sized copies of /logo.png and /icon.png live in /public/brand.
export function Logo({ className = "h-12 w-auto", eager = false }: { className?: string; eager?: boolean }) {
  return (
    <Image
      src="/brand/logo.png"
      alt="Tech Bite"
      width={287}
      height={240}
      loading={eager ? "eager" : "lazy"}
      className={className}
    />
  );
}

export function LogoMark({ className = "h-10 w-auto", eager = false }: { className?: string; eager?: boolean }) {
  return (
    <Image
      src="/brand/icon.png"
      alt="Tech Bite"
      width={140}
      height={160}
      loading={eager ? "eager" : "lazy"}
      className={className}
    />
  );
}
