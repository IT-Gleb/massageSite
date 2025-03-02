import { SvgLogo1 } from "@/components/svg_components/svgLogo1";
import { ThemeButton } from "@/components/ui/buttons/themeButton";
import { InfoObj } from "@/utils/info";
import React, { FC } from "react";

export const HeaderMenu: FC = () => {
  return (
    <nav
      className="sticky top-0 z-10
      bg-emerald-700 dark:bg-slate-700 text-emerald-200 dark:text-slate-200 
    text-[clamp(1.5rem,4vw,3rem)]/[clamp(1.8rem,4vw,3.2rem)] p-1 border-t-2 border-b-2 border-emerald-700 dark:border-slate-700 flex items-center justify-between gap-x-2"
    >
      <div className="font-materialSymbolsOulined text-[2rem]/[2.1rem]">
        menu
      </div>
      <div className="text-emerald-100 dark:text-salte-100">
        <a href={`tel:+${InfoObj.phoneReg}`}>{InfoObj.phone_mask}</a>
      </div>
      <div>
        <ThemeButton />
      </div>
    </nav>
  );
};
