"use client";

import { SvgPhone } from "@/components/svg_components/svgPhone";
import { InfoObj } from "@/utils/info";
import React, { FC } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export const PhoneMenuButton: FC = () => {
  const { scrollY } = useScroll();

  const ifShow = useTransform(scrollY, [400, 1000], [0, 1]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      className="w-[100px] x-[100px] lg:w-[140px] lg:h-[140px] place-content-center fixed z-10 bottom-12 lg:bottom-10 right-1 xl:right-10 flex items-center justify-evenly overflow-hidden"
      style={{ opacity: ifShow }}
    >
      <div className="flex flex-col gap-y-2">
        <div className="hidden lg:block w-[50px] h-[4px] bg-mint-900 ml-2"></div>
        <div className="hidden lg:block w-[40px] h-[4px] bg-mint-900 ml-1"></div>
        <div className="hidden lg:block w-[30px] h-[4px] bg-mint-900"></div>
        <div className="hidden lg:block w-[50px] h-[4px] bg-mint-900 ml-2"></div>
      </div>
      <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] bg-mint-950 text-green-100 rounded-full border-2 border-green-100 overflow-hidden p-2 cursor-pointer">
        <div className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] mx-auto">
          <a href={`tel:+${InfoObj.phoneReg}`}>
            <SvgPhone />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
