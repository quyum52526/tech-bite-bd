export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-extrabold tracking-tight ${className}`}>
      <span
        aria-hidden="true"
        className="grid size-8 place-items-center rounded-lg bg-brand-orange text-sm text-white shadow-lg shadow-brand-orange/30"
      >
        TB
      </span>
      <span className="text-lg text-white">
        Tech Bite <span className="text-brand-orange">BD</span>
      </span>
    </span>
  );
}
