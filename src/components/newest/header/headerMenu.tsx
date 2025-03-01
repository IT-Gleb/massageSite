import { SvgLogo1 } from "@/components/svg_components/svgLogo1";
import { ThemeButton } from "@/components/ui/buttons/themeButton";
import { InfoObj } from "@/utils/info";
import React, { FC } from "react";

export const HeaderMenu: FC = () => {
  return (
    <nav className="w-full mx-auto h-[5vh] overflow-hidden flex items-center gap-x-2 justify-between text-[clamp(0.7rem,2vw,1.1rem)]/[clamp(1rem,2vw,1.2rem)] font-roboto">
      <div className="flex items-center justify-between gap-x-2 px-2">
        <div className="w-[70px] rotate-45 ml-6 mt-4">
          <SvgLogo1 />
        </div>
        <div className="flex items-center gap-x-2">
          <span className="font-materialSymbolsOulined">phone</span>
          {InfoObj.phone_mask}
        </div>
      </div>

      <div className="flex items-center justify-evenly gap-x-4 px-2 uppercase xl:pr-20">
        <div className="flex items-center gap-x-1">
          <span className="font-materialSymbolsOulined">biotech</span>
          Технология
        </div>
        <div className="flex items-center gap-x-1">
          <span className="font-materialSymbolsOulined">prescriptions</span>
          Показания
        </div>
        <div className="flex items-center gap-x-1">
          <span className="font-materialSymbolsOulined">pin_drop</span> Как
          найти
        </div>
        <div>
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};
