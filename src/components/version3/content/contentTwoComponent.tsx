"use client";
import React, { FC } from "react";
import { ContentItemNumbered } from "./contentItemNumbered";
import { ContainerContent } from "./containerContent";
// import { motion, animate, stagger, useInView } from "motion/react";
// import { useScrollDownUp } from "@/hooks/scrollUpDown";

const asequence: any = [
  [
    "#dedicatedList",
    { opacity: [0, 1], y: [-200, 0] },
    { duration: 0.7, delay: 0.85 },
  ],
  [
    "#dedicatedList li",
    { opacity: [0, 1], x: [200, -50, 0] },
    {
      at: "<0.65",
      //      delay: stagger(0.1, { startDelay: 0.25 }),
      duration: 0.5,
    },
  ],
];

const protivStrings: { num: number; text: string }[] = [
  { num: 1, text: "неверие пациента в действие методики" },

  {
    num: 2,
    text: "наличие опухолей, заболеваний крови, вирусных заболеваний, психических заболеваний, тяжелых заболеваний сердца, головного мозга, легких",
  },
  {
    num: 3,
    text: "переломы, кровотечения, склонность к кровотечениям, разрывы мышц, сухожилий, связок",
  },
  { num: 0, text: "Внимательно ознакомьтесь" },
  {
    num: 4,
    text: "гнойные артриты, повреждения кожного покрова, язвы, нарывы, фурункулы",
  },
  {
    num: 5,
    text: "дефекты развития или дегенеративные сужения позвоночного канала, отчетливые сужения межпозвоночных отверстий",
  },
  { num: 6, text: "беременность, менструации, послеродовые кровотечения" },
  {
    num: 7,
    text: "старческая немощь, переутомление, ощущение сильного голода, а также не ранее чем через 30 минут после обильного приема пищи или употребления алкогольных напитков",
  },
  { num: 0, text: "Уточните противопоказания у специалиста" },
  {
    num: 8,
    text: "сильная гипертония (давление 160/120), после перенесенных операций на сердце, наличие кардиостимулятора и других инородных предметов в теле",
  },
  { num: 9, text: "дети младше 7-ми лет" },
];
// { num: 0, text: "Проконсультируйтесь с лечащим врачем" },

export const ContentTwoComponent: FC = () => {
  // const tgRef = useRef(null);
  // const { scrollDirection } = useScrollDownUp();

  // const isView = useInView(tgRef, {
  //   // root: resizedRef,
  //   amount: 1,
  //   once: false,
  // });

  // useEffect(() => {
  //   // console.log(scrollDirection);
  //   (async () => {
  //     if (isView && scrollDirection === "down") {
  //       await animate(asequence);
  //     }
  //   })();
  // }, [isView]);

  return (
    <ContainerContent backgroundClass="bg-sky-50/50">
      <h2 className="underline underline-offset-4 w-fit ml-5">
        противопоказания
      </h2>
      <ul
        id="dedicatedList"
        className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-2 text-[0.9vw]/[1.2vw] mt-10 mx-5 
        [&>li>div>p]:shadow-md
       [&>li>div]:h-fit [&>li>div]:py-3 [&>li>div>p]:bg-green-50 [&>li>div]:rounded-lg [&>li>div>p]:border [&>li>div>p]:border-red-700
       [&>li>div>p]:indent-2 [&>li>div>p]:p-2 [&>li>div>p]:text-yellow-800 [&>li>div>p]:first-letter:uppercase [&>li>div>p]:pb-5
       "
      >
        {protivStrings.map((item, index, array) => {
          if ([3, 8].includes(index)) {
            return (
              <li
                key={index}
                className={`col-span-1 2xl:${
                  index === 3 || index === 8 ? "col-span-2" : "col-span-3"
                } place-content-around font-mono text-[1.6vw]/[1.8vw] text-center uppercase bg-yellow-50 shadow-md`}
              >
                <aside
                  className="w-[26px] h-[26px] mx-auto mb-3 lg:mb-0 lg:w-[50px] lg:h-[50px] min-[2500px]:w-[60px] min-[2500px]:h-[60px] bg-yellow-300 text-red-500 
                lg:rounded-xl overflow-hidden p-1 lg:p-2 lg:float-start lg:mx-4"
                >
                  <span className="font-materialSymbolsOulined text-[3.5vw]/[4vw] sm:text-[1.6vw]/[1.8vw]">
                    error
                  </span>
                </aside>
                <p className="text-[3.5vw]/[3.8vw] lg:text-[1.6vw]/[1.8vw]">
                  {item.text}
                </p>
              </li>
            );
          }
          return (
            <li
              key={index}
              className={` ${
                index === 7 || index === array.length - 1
                  ? "2xl:col-span-2 2xl:w-[90%] 2xl:mx-auto 2xl:place-content-center"
                  : "place-content-evenly"
              } overflow-hidden`}
            >
              <ContentItemNumbered numered={item.num}>
                <p className="text-[2.6vw]/[2.9vw] md:text-[1.6vw]/[1.8vw] lg:text-[0.75vw]/[1vw]">
                  {item.text}.
                </p>
              </ContentItemNumbered>
            </li>
          );
        })}
      </ul>
      <div className="w-full h-[2vh] lg:h-[5vh] bg-[url('/images/svg/back.svg')] mt-5"></div>
    </ContainerContent>
  );
};
