"use client";

import React, { Suspense, useLayoutEffect } from "react";
import dynamic from "next/dynamic";
import { useScroll, useTransform, motion } from "motion/react";
import { useThemeStore } from "@/store/themeStore";
import { useShallow } from "zustand/shallow";
import { SectionOne } from "./sectionOne";
import { getNowYear } from "@/utils/functions";
import { SectionTwo } from "./sectionTwo";
import { InfoObj } from "@/utils/info";
import { TitleComponent } from "./titleComponent";
import { SectionThree } from "./sectionThree";
import { PhoneButton } from "../ui/buttons/phoneButton";
import { MobileQuery, PlanshetQuery, useMediaQuery } from "@/hooks/checkDevice";

const AnimatedHeaderNoSSR = dynamic(
  () =>
    import("./animatedHeader").then((component) => component.AnimatedHeader),
  {
    ssr: false,
  }
);

const YandexLocationNoSSR = dynamic(
  () =>
    import("../yandexMap/yandexMap").then(
      (component) => component.YandexLocation
    ),
  { ssr: false }
);

const offsetY: number[] = [0, 600];
export const ComponentHeight: string[] = ["45vh", "7vh"];

export const HeroComponent = () => {
  const isDark = useThemeStore(useShallow((state) => state.dark));
  const { scrollY } = useScroll();
  const isMobile = useMediaQuery(MobileQuery);
  const isPlanshet = useMediaQuery(PlanshetQuery);

  const heights = useTransform(scrollY, offsetY, ComponentHeight);
  const marginTop = useTransform(scrollY, offsetY, offsetY);

  useLayoutEffect(() => {
    isDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDark]);

  return (
    <div className="relative">
      {(isMobile || isPlanshet) && <PhoneButton />}
      <motion.div
        className="sticky top-0 bg-emerald-400 dark:bg-slate-700 text-emerald-800 dark:text-slate-200"
        suppressHydrationWarning
        style={{ height: heights }}
      >
        <Suspense>
          <AnimatedHeaderNoSSR scrollY={scrollY} heights={offsetY} />
        </Suspense>
        <motion.div
          className="w-fit mx-auto overflow-hidden relative"
          style={{ marginTop }}
        >
          {/* //Здесь место основного контента */}
          <div className="max-w-[96%] lg:max-w-[90%] 2xl:max-w-[85%] mx-auto bg-emerald-100 dark:bg-slate-600 min-h-[100vh]">
            {/* Секции сайта */}
            <div className="max-w-[90%] 2xl:max-w-[75%] mx-auto">
              <Suspense>
                <div className="pt-10">
                  <TitleComponent title="услуги" />
                </div>
                <SectionOne />
              </Suspense>

              <Suspense>
                <div className="pt-10">
                  <TitleComponent title="Отзывы" />
                </div>
                <SectionTwo />
              </Suspense>

              <Suspense>
                <div className="pt-10">
                  <TitleComponent title="Погода" />
                </div>
                <SectionThree />
              </Suspense>

              {/* Yandex карты */}
              <div className="pl-1 pt-10">
                <TitleComponent title="Местоположение" />
              </div>
              <div className="mt-20 w-fit mx-auto pb-20">
                <Suspense>
                  <YandexLocationNoSSR width={"800"} height={400} />
                </Suspense>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="min-h-[5vh] w-full flex items-center flex-wrap justify-evenly gap-x-3 bg-emerald-600 text-emerald-100 dark:text-slate-200 dark:bg-slate-900 text-center font-inter p-1 text-[clamp(0.6rem,4vw,0.8rem)]">
            <span className="text-[clamp(1rem,2vw,1.6rem)]/[clamp(1.1rem,2vw,1.8rem)] text-green-300 font-roboto">
              <a href={`tel:${InfoObj.phoneReg}`}>{InfoObj.phone_mask}</a>
            </span>
            <span>{InfoObj.FullAdress}</span>
            &copy; copyright by Me 2021-{getNowYear()}г.
          </footer>
        </motion.div>
      </motion.div>
    </div>
  );
};
