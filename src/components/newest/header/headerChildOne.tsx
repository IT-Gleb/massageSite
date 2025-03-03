import { SvgLogo2 } from "@/components/svg_components/svgLogo2";
import React, { FC } from "react";

export const HeaderChildOne: FC = () => {
  return (
    <div
      className="bg-emerald-600 dark:bg-slate-600 content-center uppercase text-[clamp(1rem,8vw,2rem)]/[clamp(1.2rem,8vw,2.4rem)] font-roboto
     p-1 flex items-center justify-start gap-x-4"
    >
      <div
        aria-hidden="true"
        className="w-[45px] -scale-x-100 text-emerald-100 dark:text-slate-200"
      >
        <SvgLogo2 />
      </div>
      <div className="h-fit my-auto font-oswald text-emerald-200 dark:text-slate-200 whitespace-nowrap text-center">
        <span className="text-[clamp(1rem,2vw,1.4rem)]/[clamp(0.9rem,2vw,1.8rem)]">
          биоэнергомассаж
        </span>{" "}
        <span className="text-emerald-50 dark:text-slate-50">fohow</span>
      </div>
    </div>
  );
};
