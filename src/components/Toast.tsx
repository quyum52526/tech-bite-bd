"use client";

import { CircleAlert, CircleCheck, X } from "lucide-react";
import { useEffect } from "react";

export type ToastData = { id: number; tone: "success" | "error"; message: string };

export function Toast({ toast, onClose }: { toast: ToastData | null; onClose: () => void }) {
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(onClose, 6000);
    return () => clearTimeout(t);
  }, [toast, onClose]);

  const success = toast?.tone === "success";
  return (
    // The live region stays mounted so screen readers announce each new toast.
    <div aria-live="polite" className="pointer-events-none fixed inset-x-4 bottom-4 z-[60] flex justify-center sm:inset-x-auto sm:right-6 sm:bottom-6">
      {toast && (
        <div
          key={toast.id}
          role={success ? "status" : "alert"}
          className={`pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-xl border bg-brand-navy-900 p-4 shadow-2xl motion-safe:animate-[toast-in_.25s_ease-out] ${
            success ? "border-emerald-400/40" : "border-red-400/40"
          }`}
        >
          {success ? (
            <CircleCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-emerald-400" />
          ) : (
            <CircleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-red-400" />
          )}
          <p className="flex-1 text-sm text-white">{toast.message}</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Dismiss notification"
            className="-m-1 rounded p-1 text-slate-400 hover:text-white focus-visible:outline-2 focus-visible:outline-brand-orange"
          >
            <X aria-hidden="true" className="size-4" />
          </button>
        </div>
      )}
    </div>
  );
}
