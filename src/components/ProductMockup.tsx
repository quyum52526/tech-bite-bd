import type { Product } from "@/lib/site";

const panel =
  "absolute inset-x-5 bottom-0 top-8 rounded-t-xl border border-white/15 bg-brand-navy-950/85 p-3 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1";

function Crm() {
  const cols = [
    { label: "New", cards: 3, tone: "bg-sky-400/60" },
    { label: "Qualified", cards: 2, tone: "bg-amber-300/60" },
    { label: "Won", cards: 2, tone: "bg-emerald-400/60" },
  ];
  return (
    <div className={panel}>
      <div className="grid h-full grid-cols-3 gap-2">
        {cols.map((c) => (
          <div key={c.label} className="rounded-lg bg-white/5 p-1.5">
            <div className="flex items-center gap-1 text-[9px] font-semibold text-slate-300">
              <span className={`size-1.5 rounded-full ${c.tone}`} />
              {c.label}
            </div>
            {Array.from({ length: c.cards }).map((_, i) => (
              <div key={i} className="mt-1.5 rounded-md border border-white/10 bg-brand-navy-800/80 p-1.5">
                <div className="h-1.5 w-3/4 rounded-sm bg-white/25" />
                <div className="mt-1 flex items-center justify-between">
                  <div className="h-1 w-1/3 rounded-sm bg-white/10" />
                  <span className="size-2.5 rounded-full bg-brand-orange/70" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Hrms() {
  return (
    <div className={panel}>
      <div className="grid grid-cols-3 gap-1.5">
        {[
          ["Present", "bg-emerald-400/60"],
          ["On leave", "bg-amber-300/60"],
          ["Payroll", "bg-brand-orange/70"],
        ].map(([label, tone]) => (
          <div key={label} className="rounded-md bg-white/5 p-1.5">
            <div className="text-[9px] text-slate-400">{label}</div>
            <div className={`mt-1 h-2 w-2/3 rounded-sm ${tone}`} />
          </div>
        ))}
      </div>
      <div className="mt-2 flex h-[40%] items-end gap-1 rounded-md bg-white/5 p-1.5">
        {[60, 75, 70, 90, 85, 95, 80, 88, 92, 78].map((h, i) => (
          <span key={i} style={{ height: `${h}%` }} className="flex-1 rounded-t-sm bg-sky-400/50" />
        ))}
      </div>
      <div className="mt-2 space-y-1">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="size-3 rounded-full bg-white/20" />
            <span className="h-1.5 flex-1 rounded-sm bg-white/15" />
            <span className="h-1.5 w-6 rounded-sm bg-emerald-400/50" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Pos() {
  return (
    <div className={`${panel} flex gap-2`}>
      <div className="grid flex-1 grid-cols-3 content-start gap-1.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square rounded-md ${i === 4 ? "bg-brand-orange/60" : "bg-white/10"}`}
          />
        ))}
      </div>
      <div className="flex w-[38%] flex-col rounded-md bg-white/90 p-2 text-brand-navy-900">
        <div className="mx-auto h-1.5 w-1/2 rounded-sm bg-brand-navy-900/60" />
        {[80, 65, 72, 55].map((w, i) => (
          <div key={i} className="mt-1.5 flex justify-between gap-1">
            <span style={{ width: `${w - 25}%` }} className="h-1 rounded-sm bg-brand-navy-900/30" />
            <span className="h-1 w-3 rounded-sm bg-brand-navy-900/30" />
          </div>
        ))}
        <div className="mt-auto border-t border-dashed border-brand-navy-900/30 pt-1.5">
          <div className="h-2 rounded-sm bg-brand-orange" />
        </div>
      </div>
    </div>
  );
}

export function ProductMockup({ mockup }: { mockup: Product["mockup"] }) {
  return (
    <div
      aria-hidden="true"
      className="relative h-52 overflow-hidden bg-gradient-to-br from-brand-navy-700 via-brand-navy-800 to-brand-navy-950"
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -top-16 -right-10 size-40 rounded-full bg-brand-orange/30 blur-3xl" />
      {mockup === "crm" ? <Crm /> : mockup === "hrms" ? <Hrms /> : <Pos />}
    </div>
  );
}
