import type { LucideIcon } from "lucide-react";
import type { ServiceCategory, ServiceVisual as Visual } from "@/lib/site";

const accents: Record<ServiceCategory, string> = {
  Development: "from-brand-orange/70 via-amber-500/40 to-brand-navy-800",
  "Business Software": "from-sky-500/60 via-brand-navy-400/40 to-brand-navy-800",
  "AI & Automation": "from-violet-500/60 via-fuchsia-500/30 to-brand-navy-800",
  "Marketing & Creative": "from-pink-500/60 via-brand-orange/40 to-brand-navy-800",
};

const bar = "rounded-sm bg-white/20";

function Mock({ visual }: { visual: Visual }) {
  switch (visual) {
    case "phone":
      return (
        <div className="absolute bottom-0 left-1/2 h-[88%] w-[34%] -translate-x-1/2 translate-y-3 rounded-t-2xl border border-white/25 bg-brand-navy-950/80 p-2.5 shadow-2xl transition-transform duration-500 group-hover:translate-y-1">
          <div className="mx-auto h-1 w-8 rounded-full bg-white/25" />
          <div className="mt-3 h-12 rounded-md bg-brand-orange/40" />
          <div className={`mt-2 h-1.5 w-3/4 ${bar}`} />
          <div className={`mt-1.5 h-1.5 w-1/2 ${bar} bg-white/10`} />
          <div className="mt-3 grid grid-cols-2 gap-1.5">
            <div className="h-7 rounded bg-white/10" />
            <div className="h-7 rounded bg-white/10" />
          </div>
        </div>
      );
    case "voice":
      return (
        <div className="absolute inset-x-[12%] bottom-[14%] flex h-[55%] items-center justify-center gap-1 rounded-xl border border-white/20 bg-brand-navy-950/70 px-4 shadow-2xl">
          {[30, 55, 80, 45, 95, 60, 35, 75, 50, 85, 40, 65, 30].map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}%` }}
              className="w-1.5 rounded-full bg-gradient-to-t from-brand-orange to-amber-300 motion-safe:group-hover:animate-pulse"
            />
          ))}
        </div>
      );
    case "document":
      return (
        <>
          <div className="absolute bottom-0 left-[16%] h-[80%] w-[40%] translate-y-3 -rotate-6 rounded-t-lg border border-white/20 bg-white/10 p-3 shadow-xl" />
          <div className="absolute bottom-0 left-[30%] h-[86%] w-[42%] translate-y-3 rounded-t-lg border border-white/25 bg-brand-navy-950/80 p-3 shadow-2xl transition-transform duration-500 group-hover:translate-y-1">
            <div className="flex justify-between">
              <div className={`h-2 w-1/3 ${bar}`} />
              <div className="h-2 w-6 rounded-sm bg-brand-orange/60" />
            </div>
            {[90, 70, 80, 60].map((w, i) => (
              <div key={i} style={{ width: `${w}%` }} className={`mt-2 h-1.5 ${bar} bg-white/10`} />
            ))}
            <div className="mt-3 ml-auto h-3 w-1/3 rounded-sm bg-emerald-400/50" />
          </div>
        </>
      );
    case "chart":
      return (
        <div className="absolute inset-x-[10%] bottom-0 h-[78%] translate-y-3 rounded-t-xl border border-white/20 bg-brand-navy-950/75 p-3 shadow-2xl transition-transform duration-500 group-hover:translate-y-1">
          <div className="flex gap-1.5">
            <div className="h-6 flex-1 rounded bg-white/10" />
            <div className="h-6 flex-1 rounded bg-white/10" />
            <div className="h-6 flex-1 rounded bg-brand-orange/40" />
          </div>
          <div className="mt-3 flex h-[45%] items-end gap-1.5">
            {[35, 55, 40, 70, 60, 85, 75].map((h, i) => (
              <span
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 rounded-t-sm bg-white/20 last:bg-brand-orange/70"
              />
            ))}
          </div>
        </div>
      );
    case "dashboard":
      return (
        <div className="absolute inset-x-[10%] bottom-0 flex h-[78%] translate-y-3 gap-2 rounded-t-xl border border-white/20 bg-brand-navy-950/75 p-3 shadow-2xl transition-transform duration-500 group-hover:translate-y-1">
          <div className="w-1/4 space-y-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`h-1.5 ${bar} ${i === 1 ? "bg-brand-orange/60" : "bg-white/15"}`} />
            ))}
          </div>
          <div className="flex-1 space-y-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-1.5 rounded bg-white/5 p-1">
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className={`h-1.5 flex-1 ${bar} bg-white/15`} />
                <span
                  className={`h-1.5 w-5 rounded-sm ${i % 2 ? "bg-emerald-400/50" : "bg-brand-orange/50"}`}
                />
              </div>
            ))}
          </div>
        </div>
      );
    case "design":
      return (
        <div className="absolute inset-x-[10%] bottom-0 h-[78%] translate-y-3 rounded-t-xl border border-white/20 bg-brand-navy-950/75 p-3 shadow-2xl transition-transform duration-500 group-hover:translate-y-1">
          <div className="grid h-full grid-cols-3 gap-1.5 pb-3">
            <div className="col-span-2 row-span-2 rounded bg-gradient-to-br from-brand-orange/70 to-pink-500/50" />
            <div className="rounded bg-sky-400/40" />
            <div className="rounded bg-amber-300/40" />
            <div className="rounded bg-white/15" />
            <div className="col-span-2 rounded bg-violet-400/40" />
          </div>
        </div>
      );
    default:
      return (
        <div className="absolute inset-x-[10%] bottom-0 h-[78%] translate-y-3 rounded-t-xl border border-white/20 bg-brand-navy-950/75 p-3 shadow-2xl transition-transform duration-500 group-hover:translate-y-1">
          <div className="flex gap-1">
            <span className="size-2 rounded-full bg-white/30" />
            <span className="size-2 rounded-full bg-white/30" />
            <span className="size-2 rounded-full bg-white/30" />
          </div>
          <div className={`mt-3 h-2 w-2/3 ${bar}`} />
          <div className={`mt-1.5 h-2 w-1/2 ${bar} bg-white/10`} />
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            <div className="h-9 rounded bg-white/10" />
            <div className="h-9 rounded bg-white/10" />
            <div className="h-9 rounded bg-brand-orange/40" />
          </div>
        </div>
      );
  }
}

export function ServiceVisual({
  visual,
  category,
  icon: Icon,
}: {
  visual: Visual;
  category: ServiceCategory;
  icon: LucideIcon;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${accents[category]}`}
    >
      <div className="absolute inset-0 bg-grid opacity-50" />
      <Mock visual={visual} />
      <span className="absolute top-3 left-3 grid size-10 place-items-center rounded-xl bg-brand-navy-950/80 text-brand-orange ring-1 ring-white/15 backdrop-blur">
        <Icon className="size-5" />
      </span>
    </div>
  );
}
