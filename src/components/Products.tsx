import { Check, CirclePlay, PackageCheck } from "lucide-react";
import { demoChoice } from "@/lib/lead";
import { products } from "@/lib/site";
import { InquiryButton } from "./InquiryButton";
import { ProductMockup } from "./ProductMockup";
import { SectionHeading } from "./SectionHeading";

export function Products() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="relative isolate overflow-hidden border-y border-white/10 bg-brand-navy-900/60 py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -z-10 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-brand-orange/10 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="products-heading"
          eyebrow="Ready products"
          title="Our Ready-to-Deploy Products"
          description="In-house software you can start using quickly — no long build cycle. See it running on a live demo first."
        />

        <ul className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.name}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-brand-navy-950/80 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-brand-orange/60 hover:shadow-brand-orange/10">
                <ProductMockup mockup={product.mockup} />
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange-light">
                    <PackageCheck aria-hidden="true" className="size-3.5" />
                    {product.kind}
                  </p>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white">{product.name}</h3>
                  <p className="mt-2 text-slate-300">{product.description}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-200">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <Check aria-hidden="true" className="size-4 shrink-0 text-brand-orange" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-7">
                    <InquiryButton
                      service={demoChoice(product.name)}
                      message={`I'd like a live demo of ${product.name}.`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3 font-semibold text-white shadow-lg shadow-brand-orange/25 transition hover:bg-brand-orange-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
                    >
                      <CirclePlay aria-hidden="true" className="size-5" />
                      Request a Live Demo
                      <span className="sr-only"> of {product.name}</span>
                    </InquiryButton>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
