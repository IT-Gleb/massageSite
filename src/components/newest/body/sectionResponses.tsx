import { CaruselResponses } from "@/components/gallery/caruselResponses";
import { SvgLogo1 } from "@/components/svg_components/svgLogo1";
import { SvgLogo2 } from "@/components/svg_components/svgLogo2";
import React, { Suspense } from "react";

export const SectionResponses = () => {
  return (
    <div className="relative">
      <section
        className="min-h-[40vh] mx-auto bg-emerald-50 dark:bg-slate-600 
      rounded-3xl overflow-hidden
    "
      >
        <header className="w-full bg-emerald-400 dark:bg-slate-800 text-neutral-600 dark:text-neutral-300 p-2">
          <div className="w-fit mx-auto flex items-center gap-x-2">
            <div className="w-[90px] rotate-[20deg]">
              <SvgLogo1 />
            </div>
            <h3 className="w-fit mx-auto">Отзывы</h3>
          </div>
        </header>
        <div className="my-10 h-[34vh]">
          <Suspense>
            <CaruselResponses />
          </Suspense>
        </div>
      </section>
      <div
        className="absolute w-[50px] h-[50px] md:w-[80px] md:h-[80px] z-10 rounded-full overflow-hidden bg-emerald-500 dark:bg-slate-500 border-4 border-emerald-200 dark:border-slate-900 
      left-0 -top-2 md:-top-8"
      >
        <div className="w-[95%] h-[95%] text-emerald-100 dark:text-slate-100">
          <SvgLogo2 />
        </div>
      </div>
    </div>
  );
};

/*
[mask-image:radial-gradient(circle_closest-side,theme(colors.black)_75%,theme(colors.transparent)_25%)]
[mask-size:5rem_5rem] [mask-position:left_top] [mask-repeat:no-repeat] [mask-origin:border-box] [mask-mode:match-source] [mask-composite:substract]
[mask-image:url('/images/svg/caplya.svg')] [mask-clip:view-box] [mask-composite:substract] [mask-repeat:no-repeat]

*/
