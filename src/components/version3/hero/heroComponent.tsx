"use client";

import React, { FC } from "react";
import { FoHowIcon } from "./foHowIcon";
import { SvgHandsUp } from "@/components/svg_components/svgHandsUp";
import { ImageRounded } from "../images/imageRounded";
import { HeroNavigation } from "./heroNavigation";
import { motion } from "motion/react";

const Acontainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      staggerChildren: 1,
    },
  },
};

const Aitem = {
  initial: { opacity: 0, x: 500 },
  animate: {
    opacity: [0, 1],
    x: 0,
    transition: {
      delay: 1,
      // repeat: Infinity,
      // repeatDelay: 2,
    },
  },
};

const AText = {
  init: { opacity: 0, x: 50 },
  aWork: {
    opacity: [0, 1],
    x: [50, 0],
    transition: {
      delay: 1.5,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const AtextItem = {
  init: { opacity: 0, x: 25 },
  aWork: { opacity: [0, 1], x: 0 },
};

export const HeroComponent: FC = () => {
  return (
    <section className="flex flex-col bg-green-50">
      <HeroNavigation />
      <section className="w-[90%] xs:w-[70%] lg:w-[65%] mx-auto min-h-[45vh] grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-y-8 lg:gap-y-0 gap-x-2 xl:gap-x-10">
        <motion.div
          variants={Acontainer}
          initial="hidden"
          animate="show"
          className="content-center lg:content-start"
        >
          <FoHowIcon />
        </motion.div>
        <motion.div
          variants={Aitem}
          initial="initial"
          animate="animate"
          whileInView={"animate"}
          className="w-fit mx-auto lg:mx-0 sm:content-center lg:content-end text-indigo-900 font-verdana mt-8 lg:mt-0"
        >
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
              <span aria-hidden="true">thumb_up</span>
              <span>Инновационный прибор</span>
            </li>
            <li>
              <span aria-hidden="true">thumb_up</span>
              <span>Ультрозвуковая насадка</span>
            </li>
            <li>
              <span aria-hidden="true">thumb_up</span>
              <span>Прогресс в сфере массажа и лечения</span>
            </li>
            <li>
              <span aria-hidden="true">thumb_up</span>
              <span>Эффект 5 массажей</span>
            </li>
          </ul>
          <p className="text-[2.7vw]/[3vw] sm:text-[2.2vw]/[2.5vw] lg:text-[clamp(0.7vw,2vw,0.85vw)]/[clamp(0.7vw,2vw,0.9vw)] font-oswald mt-5 mb-1 text-green-700">
            <span className="font-materialSymbolsOulined mr-2">info</span>
            Прошел все испытания. 100% безопасен. Имеет все сертификаты мирового
            стандарта.
          </p>
        </motion.div>
      </section>
      <section className="min-h-[55vh] bg-green-200">
        <div className="w-[92%] sm:w-[75%] lg:w-[65%] mx-auto my-8 xl:my-4 flex flex-col text-green-900 font-verdana font-bold uppercase text-[15vw]/[15.5vw] lg:text-[7vw]/[7.5vw]">
          <motion.div className="w-full place-self-start lg:place-self-stretch text-[10vw]/[10.5vw] lg:text-[5vw]/[5.2vw]">
            <motion.p
              variants={AText}
              initial="init"
              animate="aWork"
              className="indent-2 text-[9vw]/[9.5vw] lg:text-[5vw]/[5.2vw] whitespace-nowrap"
            >
              я{" "}
              <motion.span
                variants={AtextItem}
                className="text-[6vw]/[7vw] lg:text-[3.5vw]/[3.7vw]"
              >
                смогу
              </motion.span>{" "}
              <motion.span
                variants={AtextItem}
                className="text-[9vw]/[9.5vw] lg:text-[5.5vw]/[5.8vw] text-right xl:text-left xl:ml-5"
              >
                помочь
              </motion.span>
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1], x: [25, 0] }}
            transition={{ delay: 3 }}
            className="place-self-center my-10 flex items-center justify-between"
          >
            <div className="hidden lg:block">
              <ImageRounded
                imageSrc="/images/massage1/massage1.jpg"
                width={160}
                height={160}
              />
            </div>
            <span>...если...</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{ delay: 3.5 }}
            className="place-self-center lg:place-self-end font-verdana text-[5.5vw]/[6vw] lg:text-[2vw]/[2.4vw]"
          >
            <p className="indent-2 text-right text-balance">
              <span className="text-[6.5vw]/[7vw] lg:text-[3vw]/[3.2vw]">
                вы
              </span>{" "}
              захотите помочь себе
            </p>
          </motion.div>
        </div>
      </section>
    </section>
  );
};
