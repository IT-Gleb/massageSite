import { CaruselResponses } from "@/components/gallery/caruselResponses";
import { SvgLogo1 } from "@/components/svg_components/svgLogo1";
import React, { Suspense } from "react";

export const SectionResponses = () => {
  return (
    <section className="min-h-[40vh] mx-auto bg-emerald-200 dark:bg-slate-600 rounded-3xl overflow-hidden">
      <header className="w-full bg-emerald-400 dark:bg-slate-800 text-neutral-600 dark:text-neutral-300 p-2">
        <div className="w-fit mx-auto flex items-center gap-x-2">
          <div className="w-[90px] rotate-[20deg]">
            <SvgLogo1 />
          </div>
          <h3 className="w-fit mx-auto">Отзывы</h3>
        </div>
      </header>
      <div className="my-10">
        <Suspense>
          <CaruselResponses />
        </Suspense>
      </div>
    </section>
  );
};
