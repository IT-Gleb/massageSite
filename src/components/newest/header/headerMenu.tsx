import { SvgLogo1 } from "@/components/svg_components/svgLogo1";
import { ThemeButton } from "@/components/ui/buttons/themeButton";
import { InfoObj } from "@/utils/info";
import React, { FC } from "react";

export const HeaderMenu: FC = () => {
  return (
    <nav
      className="sticky top-0 z-10
      bg-white text-slate-700 
    text-[clamp(1.5rem,4vw,3rem)]/[clamp(1.8rem,4vw,3.2rem)] flex items-center justify-between gap-x-2 py-2"
    >
      <div className="font-materialSymbolsOulined text-[2rem]/[2.1rem]">
        menu
      </div>
      <div className="text-salte-600">
        <a href={`tel:+${InfoObj.phoneReg}`}>{InfoObj.phone_mask}</a>
      </div>
      <div>
        <ThemeButton />
      </div>
    </nav>
  );
};
