"use client";

import React, { FC, useRef } from "react";
import { ContainerContent } from "./containerContent";
import { SvgInfoGraphics1 } from "@/components/svg_components/svgInfoGraphics1";
import { useInView } from "motion/react";

export const ContentHowRecord: FC = () => {
  const aimoRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(aimoRef, { amount: 0.5, once: false });

  return (
    <ContainerContent backgroundClass="bg-sky-50/50">
      <div className="flex flex-col min-h-[35vh] xl:h-screen">
        <h2 ref={aimoRef} className="pl-8 underline underline-offset-4">
          Как помочь себе
        </h2>
        <div className="w-full mt-5 flex-auto">
          <SvgInfoGraphics1 doAnimate={inView} />
        </div>
        <div className="w-full h-[2vh] lg:h-[5vh] bg-[url('/images/svg/back.svg')] mt-5"></div>
      </div>
    </ContainerContent>
  );
};
