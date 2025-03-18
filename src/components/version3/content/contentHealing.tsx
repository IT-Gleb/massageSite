"use client";

import React, { FC, RefObject, useRef, useState } from "react";
import { ContainerContent } from "./containerContent";
import { TextTitle } from "../ui/buttons/heading/textTitle";
import { CardHealing } from "../ui/buttons/cards/cardHealing";
import { motion, useScroll, useTransform } from "motion/react";
import useMyResizeObserver from "@/hooks/resizeObserver";

const texts: string[] = [
  "Остеохондроз",
  "Остеопороз",
  "Позвоночная грыжа",
  "Устраняет боли шейного отдела позвоночника",
  "Воспаление плечевого сустава",
  "Ревматизм",
  "Сахарный диабет",
  "Ревматоидный артрит бедренной кости и коленных суставов",
  "Болезни почек",
  "Простатит",
  "Улучшение сна",
  "Женские заболевания",
  "Восстановление нервной системы",
  "Коррекция фигуры",
  "Нормализует кровяное давление",
  "Лимфодренаж лица и шейно-воротниковой зоны",
  "Выводит токсины",
  "Варикоз",
];

export const ContentHealing: FC = () => {
  const [beginRef, sizes1] = useMyResizeObserver();
  //const [TopY, setTopY] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end start"],
  });
  const height1 = useTransform(scrollYProgress, [0, 1], ["70vh", "-70vh"]);
  const height2 = useTransform(scrollYProgress, [0, 1], ["5vh", "90vh"]);
  const TopY = useTransform(scrollYProgress, [0, 1], ["5%", "10%"]);

  return (
    <ContainerContent backgroundClass="bg-green-50/50">
      <TextTitle title="применение" />
      <p className="my-10 text-[1.5em]/[1.5em] md:text-[1em]/[1em]">
        Древнейшие методики оздоровления с использованием новейших технологий.
        Массаж Fohow применяется:
      </p>
      <div className="h-[40vh]">
        <div
          ref={containerRef}
          className="relative h-[60vh] w-[96%] mx-auto p-2 overflow-y-auto"
          style={{
            clipPath: "xywh(0 0 100% 50% round 0 0)",
            scrollbarWidth: "none",
            scrollSnapType: "y mandatory",
          }}
        >
          <motion.div className="sticky " style={{ top: TopY }}>
            <div className="flex items-center gap-x-2">
              <div
                className="bg-[url('/images/svg/mask_arrow.png')] bg-no-repeat bg-contain bg-left-top px-2 py-1 w-[75px] h-[50px] lg:w-[160px] lg:h-[110px] xl:w-[260px] xl:h-[210px] place-content-center
      [mask-image:url('/images/svg/mask_arrow.png')] [mask-repeat:no-repeat] [mask-position:0px_0px] [mask-size:100%]"
              ></div>
              {/* <div
              ref={selectRef}
              className="w-[70%] ml-auto h-[2vh] border-2 border-black"
            ></div> */}
            </div>
          </motion.div>
          <motion.div
            ref={beginRef as RefObject<HTMLDivElement>}
            className="w-full h-[60vh] bg-[url('/images/massage1/massage-pic2.jpg')] bg-no-repeat bg-cover bg-center 
              [mask-image:linear-gradient(to_bottom,theme(colors.transparent),theme(colors.black/25%),theme(colors.transparent))]"
            style={{ height: height1 }}
          ></motion.div>
          <div className="w-[70%] left-[30%] ml-auto">
            {texts.sort().map((item, index) => {
              return (
                <CardHealing
                  key={index}
                  Num={index + 1}
                  title={item}
                  isSelected={index % 2 == 0}
                />
              );
            })}
          </div>
          <motion.div
            className="w-full h-[55vh] bg-[url('/images/massage1/massage-pic2.jpg')] bg-no-repeat bg-cover bg-center
          [mask-image:linear-gradient(to_top,theme(colors.black),theme(colors.transparent))]"
            style={{ height: height2 }}
          ></motion.div>
        </div>
      </div>
      <div className="w-full h-[2vh] lg:h-[5vh] bg-[url('/images/svg/back.svg')] mt-5"></div>
    </ContainerContent>
  );
};
