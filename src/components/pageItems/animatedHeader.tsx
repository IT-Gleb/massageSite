import React, { FC } from "react";
import { motion, useTransform } from "motion/react";
import { shuffleArray } from "@/utils/functions";
import { SvgLogo2 } from "../svg_components/svgLogo2";
import { ComponentHeight } from "./heroComponent";
import { SvgLogo1 } from "../svg_components/svgLogo1";
import { MobileQuery, useMediaQuery } from "@/hooks/checkDevice";
import dynamic from "next/dynamic";
import { UpButton } from "../ui/buttons/upButton";
import { SvgLogo3 } from "../svg_components/svgLogo3";
import { InfoObj } from "@/utils/info";

const ThemeButtonNoSSR = dynamic(
  () =>
    import("../ui/buttons/themeButton").then(
      (component) => component.ThemeButton
    ),
  { ssr: false }
);

let MainPhrase: TPhrase = [
  {
    text: "забота о здоровье",
    y: 185,
  },
  {
    text: "Коррекция осанки",
    y: 120,
  },
  {
    text: "Снижение уровня стресса",
    y: 360,
  },
  { text: "профилактика заболеваний", y: 435 },
  { text: "Улучшение сна", y: 240 },
  { text: "Повышение уровня энергии", y: 295 },
];

function changeYValues() {
  let yValues: string[] = [];
  for (let i of MainPhrase) {
    yValues.push(i.text);
  }
  yValues = shuffleArray<string>(yValues);
  yValues.forEach((item, index) => (MainPhrase[index].text = item));
}

//MainPhrase = shuffleArray<TTextPosition>(MainPhrase);
changeYValues();

const transition = {
  duration: 0.8,
  delay: 0.75,
  ease: [0, 0.71, 0.2, 1.01],
  type: "spring",
  stiffness: 50,
  repeat: Infinity,
  repeatType: "reverse",
  repeatDuration: 1,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      duration: 0.6,
      //delayChildren: 0.5,
      staggerChildren: 0.3,
      repeatDuration: 10,
      type: "spring",
    },
  },
};

const itemA = {
  hidden: { opacity: 0 },
  show: { opacity: 1, y: [-10, 25, 0] },
};

type TParamFC = {
  scrollY: any;
  heights: number[];
};

const inputRange: number[] = [220, 600];

export const AnimatedHeader: FC<TParamFC> = (param) => {
  const isPhone = useMediaQuery(MobileQuery);
  // const isMobileHeights = useMediaQuery("only screen and (max-height:780px)");

  const thisHeight = useTransform(
    param.scrollY,
    param.heights,
    ComponentHeight
  );

  const opacityContainer = useTransform(param.scrollY, inputRange, [1, 0]);
  const opacityMenu = useTransform(param.scrollY, inputRange, [0, 1]);
  const imageSize = useTransform(
    param.scrollY,
    [1, 700],
    [isPhone ? 28 : 56, isPhone ? 28 : 35]
  );
  const topY = useTransform(param.scrollY, inputRange, [-100, 0]);
  const menuHeight = useTransform(param.scrollY, param.heights, ["1vh", "7vh"]);

  return (
    <>
      <motion.div
        style={{
          //opacity: opacityMenu,
          //scaleX: opacityMenu,
          height: menuHeight,
          top: topY,
        }}
        className="fixed z-10 top-0 w-full bg-emerald-700 dark:bg-slate-900 content-center bg-[url('/images/svg/back.svg')] dark:bg-[url('/images/svg/back_dark.svg')]"
      >
        <div className="w-[99%] xl:max-w-[70%] mx-auto">
          <div className="flex items-center justify-between gap-x-2 sm:gap-x-3 xl:gap-x-4">
            <div className="w-[45px] sm:w-[60px] text-white object-cover object-left-top rounded-full bg-emerald-700 dark:bg-slate-800 border-2 border-emerald-300 dark:border-slate-400 p-1">
              <SvgLogo3 />
            </div>
            <div className="font-bold font-roboto text-[clamp(0.5rem,4vw,1.6rem)] text-white dark:text-slate-200">
              <a href={`tel:+${InfoObj.phoneReg}`}>{InfoObj.phone_mask}</a>
            </div>
            <UpButton title="Вверх" description="К началу страницы" />
            <div className="">
              <ThemeButtonNoSSR />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-[60px_1fr] md:grid-cols-[65px_40%_1fr] bg-[url('/images/svg/back_dark.svg')] dark:bg-[url('/images/svg/back.svg')] bg-repeat"
        style={{
          opacity: opacityContainer,
          height: thisHeight,
        }}
      >
        <motion.div
          className="bg-emerald-600 dark:bg-slate-800 text-emerald-200 dark:text-slate-200 whitespace-nowrap 
          overflow-hidden sm:vertical-text text-[clamp(1.5rem,3vw,2.1rem)]/[clamp(1.5rem,3vw,2.2rem)] uppercase flex items-center justify-evenly sm:justify-start"
          style={{ height: isPhone ? 50 : thisHeight }}
        >
          <a href={`tel:+${InfoObj.phoneReg}`}>
            <div className="w-[65px] text-white dark:text-yellow-200 object-cover object-center rotate-45 mt-1">
              <SvgLogo1 />
            </div>
          </a>
          <div className="text-center my-auto">Массаж спины</div>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          whileInView={"show"}
          className="font-roboto text-[clamp(1.4rem,2vw,2rem)]/[clamp(1.4rem,2vw,2rem)] relative overflow-hidden"
          style={{ height: thisHeight }}
        >
          <motion.div
            className="overflow-hidden flex flex-col 
            bg-[linear-gradient(to_right,rgba(4,120,87,0.7),theme(colors.emerald.400),theme(colors.transparent))]
            dark:bg-[linear-gradient(to_right,rgba(51,65,85,0.8),theme(colors.slate.700),theme(colors.slate.700),theme(colors.transparent))]
            "
            style={{ height: isPhone ? "85%" : thisHeight }}
          >
            <div
              className=" text-emerald-200 dark:text-slate-200 text-[clamp(0.5rem,3vw,0.8rem)]/[1.2rem] 
            font-inter p-1 whitespace-nowrap flex items-center justify-center sm:justify-start gap-x-2 gap-y-1
            bg-[linear-gradient(to_right,theme(colors.emerald.500),theme(colors.emerald.500))]
            dark:bg-[linear-gradient(to_right,theme(colors.slate.600),theme(colors.slate.600))]
            sm:bg-[linear-gradient(to_right,theme(colors.emerald.600),theme(colors.emerald.500),theme(colors.emerald.400),theme(colors.transparent),theme(colors.transparent))] 
            sm:dark:bg-[linear-gradient(to_right,theme(colors.slate.800),theme(colors.slate.800),theme(colors.slate.700),theme(colors.transparent),theme(colors.transparent))] 
            "
            >
              <a
                href={`tel:+${InfoObj.phoneReg}`}
                className="font-bold font-roboto text-white dark:text-green-100 cursor-pointer"
              >
                {InfoObj.phone_mask}
              </a>
              <span className="italic text-yellow-300 dark:text-green-300 sm:text-emerald-50 sm:dark:text-slate-50">
                {InfoObj.FullAdress}
              </span>
            </div>
            <h2 className="p-2 font-inter uppercase text-emerald-900 dark:text-slate-200 font-semibold text-[clamp(1.1rem,3vw,2.1rem)]/[1.6rem]">
              Результат:
            </h2>
            <ul className="w-fit mx-auto mb-auto font-inter">
              {MainPhrase.map((item, index) => {
                return (
                  <motion.li
                    variants={itemA}
                    key={index}
                    className="w-full text-[clamp(0.8rem,2vw,2.5rem)]/[1rem,2vw,2.5rem] font-semibold uppercase"
                  >
                    <div className=" flex items-center">
                      <motion.div
                        className="object-cover object-center text-yellow-100 dark:text-slate-200 -rotate-180 "
                        // style={{ width: isMobileHeights ? "28px" : imageSize }}
                        style={{ width: imageSize }}
                      >
                        <SvgLogo2 />
                      </motion.div>
                      <span className=" whitespace-nowrap text-emerald-800 dark:text-slate-200 ">
                        {item.text}
                      </span>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
        <div className="hidden md:block overflow-hidden rounded-es-full border-s-8 border-s-pink-50 dark:border-s-slate-950 md:bg-[url('/images/massage5.jpg')] bg-no-repeat bg-cover bg-left-top"></div>
      </motion.div>
    </>
  );
};
