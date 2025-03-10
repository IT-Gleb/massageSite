"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { FC } from "react";
import Link from "next/link";
import { InfoObj } from "@/utils/info";
import { ancorsArray } from "@/utils/functions";
import { SvgPhone } from "@/components/svg_components/svgPhone";
import { SvgLocation } from "@/components/svg_components/svgLocation";
import { SvgMedicalKit } from "@/components/svg_components/svgMedicalKit";
import { SvgVideoCam } from "@/components/svg_components/svgVideoCam";

export const TopMenu: FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [10, 300], [-250, 0]);

  return (
    <motion.div
      className="fixed w-full flex flex-col z-10 bg-green-700 text-green-50 shadow-md"
      style={{ y }}
    >
      <nav className="w-[90%] md:w-[75%] xl:w-[65%] mx-auto place-content-center">
        <ul className="flex items-center justify-between p-1 xl:p-2 text-[4vw]/[4vw] sm:text-[2vw]/[2vw] xl:text-[0.8vw]/[1vw] font-oswald uppercase">
          <li>
            <Link
              href={`tel:+${InfoObj.phoneReg}`}
              className="flex items-center gap-x-2"
            >
              <span>{InfoObj.phone_mask}</span>
              <div className="text-slate-200 w-[18px] h-[18px] lg:w-[28px] lg:h-[28px]">
                <SvgPhone />
              </div>
            </Link>
          </li>
          <li>
            <div className="flex items-center gap-x-4">
              <a
                href={ancorsArray[0].ancor}
                className="flex items-center gap-x-2"
              >
                <span className="hidden md:inline-block">Услуги</span>
                <div className="text-slate-200 w-[18px] h-[18px] lg:w-[28px] lg:h-[28px]">
                  <SvgMedicalKit />
                </div>
              </a>
              <a
                href={ancorsArray[1].ancor}
                className="flex items-center gap-x-2"
              >
                <span className="hidden md:inline-block">Видео</span>
                <div className="text-slate-200 w-[28px] h-[28px]">
                  <SvgVideoCam />
                </div>
              </a>
              <a
                href={ancorsArray[2].ancor}
                className="flex items-center gap-x-2"
              >
                <span className="hidden md:inline-block">Местонахождение</span>
                <div className="text-slate-200 w-[18px] h-[18px] lg:w-[28px] lg:h-[28px]">
                  <SvgLocation />
                </div>
              </a>
            </div>
          </li>
        </ul>
      </nav>
      {/* <div className="h-[50px] w-full bg-[linear-gradient(to_bottom,theme(colors.white),theme(colors.white/75%),theme(colors.transparent))]"></div> */}
    </motion.div>
  );
};
