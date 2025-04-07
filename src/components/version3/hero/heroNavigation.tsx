import { SvgLocation } from "@/components/svg_components/svgLocation";
import { SvgMedicalKit } from "@/components/svg_components/svgMedicalKit";
import { SvgPhone } from "@/components/svg_components/svgPhone";
import { SvgVideoCam } from "@/components/svg_components/svgVideoCam";
import { ancorsArray } from "@/utils/functions";
import { InfoObj } from "@/utils/info";
import React, { FC } from "react";

export const HeroNavigation: FC = () => {
  return (
    <nav
      className="text-[clamp(1rem,1.5rem,1.8rem)]/[clamp(1rem,1.5rem,1.9rem)] font-oswald ml-2 lg:ml-4 px-2 text-neutral-700 z-30
         py-1 overflow-hidden flex items-start justify-between gap-x-2"
    >
      <a
        href={`tel:+${InfoObj.phoneReg}`}
        className="flex items-center gap-x-2"
      >
        <div className="text-indigo-900 w-[18px] h-[18px] lg:w-[28px] lg:h-[28px]">
          <SvgPhone />
        </div>
        {InfoObj.phone_mask}
      </a>
      <div className="flex items-center gap-x-4 mr-2 xl:mr-20 font-verdana ">
        <a
          href={ancorsArray[0].ancor}
          title="Услуги"
          className="flex items-center gap-x-1 cursor-pointer"
        >
          <div className="text-indigo-900 w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]">
            <SvgMedicalKit />
          </div>
        </a>
        <a
          href={ancorsArray[1].ancor}
          title="реклама видео массажа"
          className="flex items-center gap-x-1"
        >
          <div className="text-indigo-900 w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]">
            <SvgVideoCam />
          </div>
        </a>
        {/* <a
          title="Местоположение"
          href={ancorsArray[2].ancor}
          className="flex items-center gap-x-1"
        >
          <div className="text-indigo-900 w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]">
            <SvgLocation />
          </div>
        </a> */}
      </div>
    </nav>
  );
};
