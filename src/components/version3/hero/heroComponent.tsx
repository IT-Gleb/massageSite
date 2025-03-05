"use client";

import React, { FC } from "react";
import { FoHowIcon } from "./foHowIcon";
import { SvgHandsUp } from "@/components/svg_components/svgHandsUp";
import { ImageRounded } from "../images/imageRounded";
import { HeroNavigation } from "./heroNavigation";

export const HeroComponent: FC = () => {
  return (
    <section className="flex flex-col bg-green-50">
      <HeroNavigation />
      <section className="w-[90%] xs:w-[70%] lg:w-[65%] mx-auto min-h-[45vh] grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-y-8 lg:gap-y-0 gap-x-2 xl:gap-x-10">
        <div className="content-center lg:content-start">
          <FoHowIcon />
        </div>
        <div className="w-fit mx-auto lg:mx-0 sm:content-center lg:content-end text-indigo-900 font-roboto mt-8 lg:mt-0">
          <div className="w-fit ml-auto flex items-center gap-x-2">
            <div className="w-[40px]">
              <SvgHandsUp />
            </div>
            <h3 className=" pr-12 pb-2 border-b-2 border-b-indigo-900 ">
              Новый вид массажа
            </h3>
          </div>
          <ul
            className="w-fit ml-auto text-[2.5vw]/[3.5vw] lg:text-[clamp(0.6vw,2vw,0.85vw)]/[clamp(0.7vw,2vw,1vw)] mt-6 
           [&>li]:flex [&>li]:gap-x-2
           [&>li>:nth-child(1)]:font-materialSymbolsOulined [&>li>:nth-child(1)]:text-indigo-900"
          >
            <li>
              <span>thumb_up</span>
              <span>Инновационный прибор</span>
            </li>
            <li>
              <span>thumb_up</span>
              <span>Ультрозвуковая насадка</span>
            </li>
            <li>
              <span>thumb_up</span>
              <span>Прогресс в сфере массажа и лечения</span>
            </li>
            <li>
              <span>thumb_up</span>
              <span>Эффект 5 массажей</span>
            </li>
          </ul>
          <p className="text-[2.7vw]/[3vw] sm:text-[2.2vw]/[2.5vw] lg:text-[clamp(0.7vw,2vw,0.85vw)]/[clamp(0.7vw,2vw,0.9vw)] font-oswald mt-5 mb-1 text-green-700">
            <span className="font-materialSymbolsOulined mr-2">info</span>
            Прошел все испытания. 100% безопасен. Имеет все сертификаты мирового
            стандарта.
          </p>
        </div>
      </section>
      <section className="min-h-[55vh] bg-green-300">
        <div className="w-[92%] sm:w-[75%] lg:w-[65%] mx-auto my-8 xl:my-4 flex flex-col font-oswald font-bold uppercase text-[15vw]/[15.5vw] lg:text-[7vw]/[7.5vw]">
          <div className="place-self-start lg:place-self-stretch whitespace-nowrap text-[10vw]/[10.5vw] lg:text-[5vw]/[5.2vw]">
            я{" "}
            <span className="text-[11vw]/[11.5vw] lg:text-[3.5vw]/[3.7vw]">
              смогу
            </span>{" "}
            <span className="text-[12vw]/[12.5vw] lg:text-[4.5vw]/[4.8vw]">
              помочь
            </span>
          </div>
          <div className="place-self-center my-10 flex items-center justify-between">
            <div className="hidden lg:block">
              <ImageRounded
                imageSrc="/images/massage1/massage1.jpg"
                width={200}
                height={200}
              />
            </div>
            ...если...
          </div>
          <div className="place-self-center lg:place-self-end whitespace-nowrap font-roboto text-[6vw]/[6.5vw] lg:text-[2.6vw]/[2.8vw]">
            вы захотите помочь себе
          </div>
        </div>
      </section>
    </section>
  );
};
