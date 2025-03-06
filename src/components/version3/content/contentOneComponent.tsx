"use client";

import { motion, useInView, stagger, animate } from "motion/react";
import React, { FC, useEffect, useRef, useState } from "react";
import { ImageBlock } from "../images/imageBlock";
import { ContentItemNumbered } from "./contentItemNumbered";
import useMyResizeObserver from "@/hooks/resizeObserver";
import { useScrollDownUp } from "@/hooks/scrollUpDown";
import { ContainerContent } from "./containerContent";

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

  const [widthtImage, setWidthImage] = useState<number>(480);
  const [heightImage, setHeightImage] = useState<number>(340);

  const isView = useInView(triggerRef, {
    // root: resizedRef,
    amount: 0.5,
    once: false,
  });

  const { scrollDirection } = useScrollDownUp();

  useEffect(() => {
    let tmpW: number = Math.round(sizes.width / 2 - 20);
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
      const asequence: any = [
        ["#uuul", { opacity: [0, 1], y: [-100, 0] }, { duration: 0.7 }],
        [
          "#uuul li",
          { opacity: [0, 1], y: [-100, 0] },
          {
            //at: "-0.5",
            at: "<0.75",
            delay: stagger(0.1, { startDelay: 0.2 }),
            duration: 0.5,
          },
          //{ delay: stagger(0.1, { startDelay: 0.2 }), duration: 0.5 },
        ],
      ];

      if (isView && scrollDirection === "down") {
        await animate(asequence);
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
    <ContainerContent backgroundClass="bg-sky-50/50">
      <div ref={resizedRef}>
        <h2 ref={triggerRef} className="underline-offset-4 underline ml-8">
          Биоэнергомассаж
        </h2>
        <motion.ul
          ref={aTarget}
          // variants={AnimatedList}
          // initial="hidden"
          // animate="visual"
          id="uuul"
          className="h-[75%] grid grid-cols-2 lg:grid-cols-4 auto-rows-min mt-10 font-inter gap-x-1 gap-y-2
       [&>li>div]:rounded-lg [&>li>div]:overflow-hidden [&>li>div:has(img)]:border-none [&>li>div]:border-2 [&>li>div]:border-stone-300  
       [&>li>div]:shadow-md [&>li>div>p]:bg-stone-50 [&>li>div>p]:text-stone-950 [&>li>div>p]:indent-4 [&>li>div>p]:p-2"
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
                <strong>перчатками</strong> с <strong>серебрянной нитью</strong>
                , которые подключены к прибору с токами тойже частоты что и
                клетки нашего организма.
              </p>
            </ContentItemNumbered>
          </motion.li>
          <motion.li className="hidden lg:block col-span-2 place-content-center mx-auto">
            <ImageBlock
              imageSrc="/images/massage1/massage_vector_4.jpg"
              width={widthtImage}
              height={heightImage}
            />
          </motion.li>
          <motion.li className="col-span-1 order-2 lg:col-span-2 lg:place-content-center mx-auto">
            <ImageBlock
              imageSrc="/images/massage1/massage2.avif"
              width={widthtImage}
              height={heightImage}
            />
          </motion.li>
          <motion.li className="order-1 lg:order-3 place-content-center lg:place-content-evenly mt-4">
            <ContentItemNumbered numered={3}>
              <p>
                Массаж обеспечивает глубокое проникновение в мышцы,суставы,
                кости, причем при обычной процедуре ручного массажа этого
                достичь невозможно.
              </p>
            </ContentItemNumbered>
          </motion.li>
          <motion.li className="place-content-end order-5 col-span-2 w-fit lg:col-span-1 text-[1.5vw]/[1.8vw] lg:text-[0.75vw]/[1.1vw] font-bold mx-1">
            <div>
              <p>
                {" "}
                <span className="font-materialSymbolsOulined font-normal float-start">
                  info
                </span>
                Имеются противопоказания. Консультируйтесь у специалиста.
              </p>
            </div>
          </motion.li>
        </motion.ul>
        <div className="w-full h-[2vh] lg:h-[5vh] bg-[url('/images/svg/back.svg')] mt-5"></div>
      </div>
    </ContainerContent>
  );
};
