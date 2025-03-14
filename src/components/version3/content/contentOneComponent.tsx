"use client";

import {
  motion,
  useInView,
  stagger,
  animate,
  MotionConfig,
} from "motion/react";
import React, { FC, RefObject, useEffect, useRef, useState } from "react";
import { ImageBlock } from "../images/imageBlock";
import { ContentItemNumbered } from "./contentItemNumbered";
import useMyResizeObserver from "@/hooks/resizeObserver";
import { useScrollDownUp } from "@/hooks/scrollUpDown";
import { ContainerContent } from "./containerContent";
import { SvgInfo } from "@/components/svg_components/svgInfo";
import useMyMediaQuery from "@/hooks/myMediaQuery";

const asequence: any = [
  ["#uuul", { opacity: [0, 1], y: [500, 0] }, { delay: 0.5, duration: 0.7 }],
  [
    "#uuul li",
    { opacity: [0, 1], y: [500, 0] },
    {
      //at: "-0.5",
      at: "<0.5",
      delay: stagger(0.1, { startDelay: 0.2 }),
      duration: 0.5,
    },
    //{ delay: stagger(0.1, { startDelay: 0.2 }), duration: 0.5 },
  ],
];

// const AnimatedList = {
//   hidden: { opacity: 0 },
//   visual: {
//     opacity: [0, 1],
//     transition: {
//       delay: 1,
//       duration: 0.85,
//       when: "beforeChildren",
//       staggerChildren: 0.3,
//     },
//   },
// };

// const AnimatedItem = {
//   hidden: { opacity: 0 },
//   visual: { opacity: [0, 1] },
// };

export const ContentOneComponent: FC = () => {
  const triggerRef = useRef(null);
  const aTarget = useRef(null);
  const [resizedRef, sizes] = useMyResizeObserver();
  const isMobile = useMyMediaQuery("only screen and (max-width:1023px)");

  const [widthtImage, setWidthImage] = useState<number>(340);
  const [heightImage, setHeightImage] = useState<number>(214);

  const isView = useInView(triggerRef, {
    // root: resizedRef,
    amount: 0.5,
    once: false,
  });

  const { scrollDirection } = useScrollDownUp();

  useEffect(() => {
    if (typeof sizes === "boolean") {
      return;
    }

    let tmpW: number = isMobile
      ? Math.round((sizes as TSizes).width - 20)
      : Math.round((sizes as TSizes).width / 2 - 20);
    let tmpH: number = Math.round(tmpW / 1.6);
    if (!isNaN(tmpH) && tmpH > 0) {
      if (heightImage !== tmpH) {
        setHeightImage(tmpH);
      }
      if (widthtImage !== tmpW) {
        setWidthImage(tmpW);
      }
    }
  }, [sizes]);

  useEffect(() => {
    // console.log(scrollDirection);
    (async () => {
      if (isView && scrollDirection === "down") {
        await animate(asequence);
        // await animate(
        //   aTarget.current,
        //   { y: [500, 0] },
        //   { type: "spring", delay: 0.5, duration: 0.7 }
        // );
      }
      //else if (scrollDirection === "up") {
      //   await animate(
      //     aTarget.current,
      //     { opacity: [1, 0], y: [0, -100] },
      //     { duration: 0.7, ease: "linear" }
      //   );
      // }
    })();
  }, [isView]);

  return (
    <ContainerContent backgroundClass="bg-green-50/50">
      <div
        ref={resizedRef as RefObject<HTMLDivElement>}
        className="min-h-[75vh]"
      >
        <h2 ref={triggerRef} className="underline-offset-4 underline ml-8">
          Биоэнергомассаж
        </h2>
        <MotionConfig reducedMotion="never">
          <motion.ul
            ref={aTarget}
            // variants={AnimatedList}
            // initial="hidden"
            // animate="visual"
            id="uuul"
            className="flex flex-col lg:grid lg:grid-cols-4 mt-10  font-inter gap-x-1 gap-y-2
       [&>li>div]:rounded-lg [&>li>div]:overflow-hidden [&>li>div:has(img)]:border-none [&>li>div]:border-2 [&>li>div]:border-stone-300  
       [&>li>div]:shadow-md [&>li>div>p]:bg-stone-50 [&>li>div>p]:text-[1.8em]/[1.9em] md:[&>li>div>p]:text-[1em]/[1.1em] lg:[&>li>div>p]:text-[1.2vw]/[1.4vw] [&>li>div>p]:text-stone-950 [&>li>div>p]:indent-4 [&>li>div>p]:p-2"
          >
            <motion.li className="place-content-start mt-5">
              <ContentItemNumbered numered={1}>
                <p className="text-center ml-2">
                  <strong>Аппаратная восстановительная физиотерапия</strong>{" "}
                  (биоэнергомассаж)
                </p>
              </ContentItemNumbered>
            </motion.li>
            <motion.li className="place-content-evenly">
              <ContentItemNumbered numered={2}>
                <p>
                  Физиотерапия нового покаления с применением импульсного тока
                  низкой частоты, проводится специальными{" "}
                  <strong>перчатками</strong> с{" "}
                  <strong>серебрянной нитью</strong>, которые подключены к
                  прибору с токами тойже частоты что и клетки нашего организма.
                </p>
              </ContentItemNumbered>
            </motion.li>
            <motion.li className="hidden lg:block lg:col-span-2 place-content-center mx-auto">
              <ImageBlock
                imageSrc="/images/massage1/massage_vector_4.jpg"
                width={widthtImage}
                height={heightImage}
                isAlt={false}
              />
            </motion.li>
            <motion.li className="lg:col-span-2 lg:place-content-center mx-auto">
              <ImageBlock
                imageSrc="/images/massage1/massage2.avif"
                width={widthtImage}
                height={heightImage}
                isAlt={false}
              />
            </motion.li>
            <motion.li className=" place-content-center lg:place-content-evenly mt-4">
              <ContentItemNumbered numered={3}>
                <p>
                  Массаж обеспечивает глубокое проникновение в мышцы,суставы,
                  кости, причем при обычной процедуре ручного массажа этого
                  достичь невозможно.
                </p>
              </ContentItemNumbered>
            </motion.li>
            <motion.li className="place-content-end col-span-2 w-fit lg:col-span-1 text-[1.5vw]/[1.8vw] lg:text-[0.75vw]/[1.1vw] font-bold mx-1">
              <div className="p-1">
                <div className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] float-left mt-2 mr-2">
                  <SvgInfo />
                </div>
                <p>Имеются противопоказания. Консультируйтесь у специалиста.</p>
              </div>
            </motion.li>
          </motion.ul>
        </MotionConfig>
      </div>
      <div className="w-full h-[2vh] lg:h-[5vh] bg-[url('/images/svg/back.svg')] mt-5"></div>
    </ContainerContent>
  );
};
