import { InfoObj } from "@/utils/info";
import React, { FC } from "react";

export const HeroNavigation: FC = () => {
  return (
    <nav
      className="text-[clamp(1rem,1.5rem,1.8rem)]/[clamp(1rem,1.5rem,1.9rem)] font-oswald px-2 text-neutral-700
         py-1 overflow-hidden flex items-start justify-between gap-x-2"
    >
      <a
        href={`tel:+${InfoObj.phoneReg}`}
        className="flex items-center gap-x-2"
      >
        <div className="text-[clamp(1.1rem,2vw,1.5vw)]/[clamp(1.1rem,2vw,1.5vw)] text-indigo-900 font-materialSymbolsOulined">
          phone
        </div>
        {InfoObj.phone_mask}
      </a>
      <div className="flex items-center gap-x-2 mr-2 xl:mr-20 font-verdana ">
        <a href="#" title="Услуги" className="flex items-center gap-x-1">
          <span className="font-materialSymbolsOulined">
            medical_information
          </span>
        </a>
        <a
          href="#"
          title="реклама видео массажа"
          className="flex items-center gap-x-1"
        >
          <span className="font-materialSymbolsOulined">videocam</span>
        </a>
        <a
          title="Местоположение"
          href="#"
          className="flex items-center gap-x-1"
        >
          <span className="font-materialSymbolsOulined">location_on</span>
        </a>
      </div>
    </nav>
  );
};
