"use client";

import React, { FC, lazy, RefObject, useEffect, useRef, useState } from "react";
import { ContainerContent } from "./containerContent";
//import { TextTitle } from "../ui/buttons/heading/textTitle";
//import { CardHealing } from "../ui/buttons/cards/cardHealing";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { funnel } from "remeda";
// import { flushSync } from "react-dom";

const TextHeading = lazy(() => import("../ui/buttons/heading/textTitle"));
const CardItem = lazy(() => import("../ui/buttons/cards/cardHealing"));

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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end start"],
  });
  const height2 = useTransform(scrollYProgress, [0, 1], ["5vh", "80vh"]);

  const smoothY = useSpring(scrollYProgress);
  const Y1 = useTransform(smoothY, [0, 1], ["0%", "90%"]);

  const checkerRef = useRef<HTMLDivElement>(null);

  const itemsRef = texts.map(() => useRef<HTMLDivElement | null>(null));
  const setCallBackRef =
    (index: number) => (element: HTMLDivElement | null) => {
      itemsRef[index].current = element;
    };

  const [isSelItems, setSelItems] = useState<boolean[]>(texts.map(() => false));
  // const [prevIndex, setPrevIndex] = useState<number>(0);

  useEffect(() => {
    // Проверка на пересечение со стрелкой
    const isIntersecting = funnel(
      () => {
        const rect = checkerRef.current?.getBoundingClientRect() as DOMRect;
        let indx: number = 0;
        let tmpSelected: boolean[] = texts.map(() => false);
        for (let item of itemsRef) {
          let r1 = item.current?.getBoundingClientRect() as DOMRect;
          if (r1.y <= rect.y && r1.bottom >= rect.bottom) {
            //console.log(`${indx}- true`);
            // let tmpPrevIndex = Math.max(indx - 1, 0);
            //console.log(tmpPrevIndex);
            tmpSelected[indx] = true;
            // flushSync(() => setPrevIndex(tmpPrevIndex));
            break;
          }
          indx++;
        }

        //Установить индекс
        setSelItems(tmpSelected);
        // console.log(
        //   `Arrow> y= ${rect?.y}, height= ${rect?.height} bottom= ${rect?.bottom}`
        // );
      },
      { minGapMs: 80, triggerAt: "start" }
    );

    containerRef.current?.addEventListener("scroll", isIntersecting.call);

    return () => {
      containerRef.current?.removeEventListener("scroll", isIntersecting.call);
    };
  }, []);

  return (
    <ContainerContent backgroundClass="bg-green-50/50">
      <TextHeading title="применение" />
      <p className="indent-4 my-10 text-[2em]/[2.1em] md:text-[clamp(1vw,2vw,1.2vw)]/[clamp(1vw,2vw,1.5vw)]">
        Древнейшие методики оздоровления с использованием новейших технологий.
        Массаж Fohow применяется:
      </p>
      <div className="h-[40vh]">
        <div
          ref={containerRef}
          className="relative h-[60vh] w-[96%] mx-auto p-2 overflow-y-auto"
          style={{
            clipPath: "xywh(0 0 100% 65% round 0 0)",
            scrollbarWidth: "none",
            scrollSnapType: "y mandatory",
          }}
        >
          <motion.div style={{ y: Y1 }} className="sticky top-10">
            <div className="flex items-center justify-center gap-x-2">
              <div
                className="bg-[url('/images/svg/mask_arrow.png')] bg-no-repeat bg-contain bg-left-top px-2 py-1 w-[75px] h-[50px] md:w-[160px] md:h-[110px] xl:w-[250px] xl:h-[200px] place-content-center
      "
              ></div>
              <div
                ref={checkerRef}
                className="w-[70%] ml-auto h-[1vh] bg-transparent mb-2 xl:mb-[55px] "
              ></div>
            </div>
          </motion.div>
          <div className="w-[70%] left-[30%] ml-auto">
            {texts.sort().map((item, index) => {
              return (
                <CardItem
                  key={index}
                  Num={index + 1}
                  title={item}
                  isSelected={isSelItems[index]}
                  thisRef={
                    setCallBackRef(
                      index
                    ) as unknown as RefObject<HTMLDivElement | null>
                  }
                />
              );
            })}
          </div>
          <motion.div
            className="w-full h-[55vh] bg-[url('/images/massage1/massage-pic2.jpg')] bg-no-repeat bg-cover bg-right-top
          [mask-image:linear-gradient(to_top,theme(colors.black),theme(colors.transparent))]"
            style={{ height: height2 }}
          ></motion.div>
        </div>
      </div>
      <div className="w-full h-[2vh] lg:h-[5vh] bg-[url('/images/svg/back.svg')] mt-5"></div>
    </ContainerContent>
  );
};
