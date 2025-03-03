"use client";

import { SectionOne } from "@/components/newest/body/sectionOne";
import { SectionResponses } from "@/components/newest/body/sectionResponses";
import { SectionThree } from "@/components/newest/body/sectionThree";
import { SectionTwo } from "@/components/newest/body/sectionTwo";
import { SectionWeather } from "@/components/newest/body/sectionWeather";
import { OneToolTip } from "@/components/newest/body/toolTip/oneToolTip";
import { HeaderTop } from "@/components/newest/header/headerTop";

import { Suspense, useEffect, useRef, useState } from "react";
import { useInView, motion, useScroll, useTransform } from "motion/react";
import useMyResizeObserver from "@/hooks/resizeObserver";

const words: string =
  "Смогу помочь- если вы сами себе поможете. Жду Вас на сеансе. Жми ссылку с телефоном. До встречи";

export default function Home() {
  const [values, setValues] = useState<string[]>([]);

  const targetView = useRef<HTMLDivElement>(null);
  const inView = useInView(targetView, { amount: 0.15, once: false });

  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: scrollTarget,
    offset: ["start start", "end start"],
  });

  const [target, sizes] = useMyResizeObserver();
  const y = useTransform(
    scrollY,
    [100, sizes.height !== 0 ? sizes.height : 4500],
    ["-800px", "150vh"]
  );

  useEffect(() => {
    const maxWords = 500;
    let tmp: string[] = [];
    tmp.length = maxWords;
    tmp = tmp.fill(words as never, 0, maxWords);
    setValues(tmp);
  }, []);

  return (
    <>
      <Suspense>
        <HeaderTop />
      </Suspense>

      <main
        ref={target}
        className="min-h-[50vh] w-[90%] lg:w-[60%] mx-auto bg-transparent overflow-hidden"
      >
        <div ref={scrollTarget} className="relative">
          <motion.div
            className="w-full h-[1000vh] absolute left-0 top-0 z-0 bg-white overflow-hidden"
            style={{ y }}
          >
            {values.map((item, index) => (
              <p
                key={index}
                aria-hidden="true"
                className="indent-2 select-none text-[5vw]/[5.5vw] xl:text-[3vw]/[3.5vw] text-slate-300/65 font-roboto italic text-center first-letter:uppercase text-pretty"
              >
                {item}
              </p>
            ))}
          </motion.div>
          <div className="flex flex-col gap-y-[20vh] py-[20vh] px-2">
            <Suspense>
              <SectionOne />
            </Suspense>
            <Suspense>
              <SectionTwo />
            </Suspense>
            <section className="flex flex-col gap-y-[300px]" ref={targetView}>
              <Suspense>
                <SectionResponses />
              </Suspense>
              <Suspense>
                {inView ? <OneToolTip text="Записаться на сеанс" /> : null}
                <SectionThree />
              </Suspense>
              {/* <div className="w-full h-[20vh] md:h-[30vh]"></div> */}
              <Suspense>
                <SectionWeather />
              </Suspense>
            </section>
            {/* <div className="w-full h-[20vh] md:h-[30vh]"></div> */}
          </div>
        </div>
      </main>
    </>
  );
}
