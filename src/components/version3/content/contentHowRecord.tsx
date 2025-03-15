"use client";

import React, { FC, useRef, useState } from "react";
import { ContainerContent } from "./containerContent";
import { SvgInfoGraphics1 } from "@/components/svg_components/svgInfoGraphics1";
import { useInView, useReducedMotion } from "motion/react";
import { AnimoButton } from "../ui/buttons/animoButton";
import { useUserOS } from "@/hooks/getUserPlatform";
import { TextTitle } from "../ui/buttons/heading/textTitle";

export const ContentHowRecord: FC = () => {
  const aimoRef = useRef<HTMLDivElement>(null);
  const inView = useInView(aimoRef, { amount: 0.5, once: false });
  const preferReducedMotion = useReducedMotion();
  const [canAnimation, setCanAnimation] = useState<boolean>(
    preferReducedMotion !== null
      ? preferReducedMotion
        ? preferReducedMotion
        : false
      : false
  );

  const { userOS } = useUserOS();

  if (!["Windows", "Android", "Linux"].includes(userOS)) {
    return (
      <ContainerContent backgroundClass="bg-sky-50/50">
        <h2>{userOS}</h2>
        <div className="w-full h-[2vh] lg:h-[5vh] bg-[url('/images/svg/back.svg')] mt-5"></div>
      </ContainerContent>
    );
  }

  //console.log(preferReducedMotion);
  return (
    <ContainerContent backgroundClass="bg-sky-50/50">
      <div className="flex flex-col min-h-[35vh] xl:h-screen">
        <div className="flex items-center gap-x-2 justify-between">
          <TextTitle title="Как помочь себе" />
          <AnimoButton
            title={canAnimation ? "Остановить" : "Просмотреть"}
            click={() => setCanAnimation(!canAnimation)}
          />
        </div>
        <div ref={aimoRef} className="w-full mt-5 flex-auto">
          <SvgInfoGraphics1 doAnimate={inView} canAnimate={canAnimation} />
        </div>
      </div>
      <div className="w-full h-[2vh] lg:h-[5vh] bg-[url('/images/svg/back.svg')] mt-5"></div>
    </ContainerContent>
  );
};
