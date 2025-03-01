import React, { FC, useEffect, useRef, useState } from "react";
import { animate } from "motion/react";
import { Item1 } from "./item1";
import { Item2 } from "./item2";
import { Item3 } from "./item3";

const timeDuration: number = 10000;

export const HeadeCarusel: FC = () => {
  const timerRef = useRef<number>(-1);
  const childrenRef = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const upIndex = async () => {
    if (activeIndex < childrenRef.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }

    let nextIndex: number = activeIndex + 1;
    if (nextIndex > childrenRef.length - 1) {
      nextIndex = 0;
    }

    const hasOpacity = window
      .getComputedStyle(childrenRef[activeIndex].current as HTMLDivElement)
      .getPropertyValue("opacity");

    await animate(
      childrenRef[activeIndex].current as HTMLDivElement,
      { opacity: hasOpacity === "1" ? [1, 0] : [0, 1] },
      { duration: 0.35, ease: "easeInOut" }
    );
    await animate(
      childrenRef[nextIndex].current as HTMLDivElement,
      { opacity: hasOpacity === "1" ? [0, 1] : [1, 0] },
      { duration: 0.35, ease: "easeInOut" }
    );
  };

  useEffect(() => {
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      upIndex();
    }, timeDuration);

    //console.log(childrenRef[activeIndex].current);
    return () => {
      window.clearTimeout(timerRef.current);
      timerRef.current = -1;
    };
  }, [activeIndex]);

  return (
    <div className="w-[98%] xl:w-[950px] min-[2200px]:w-[1200px] mx-auto relative">
      <div
        ref={childrenRef[0]}
        className="w-[95%] min-[2200px]:w-[1200px] absolute top-0 left-0 z-auto bg-orange-500 mt-20 xl:ml-12
        before:content-[''] before:h-full before:w-[2px] before:bg-orange-200 before:absolute before:-left-3 before:top-0"
        style={{ opacity: 1 }}
      >
        <Item3 />
      </div>
      <div
        ref={childrenRef[1]}
        className="w-[95%] min-[2200px]:w-[1200px] absolute top-0 left-0 z-auto bg-orange-500 border-8 border-orange-200 mt-20 xl:ml-12 p-2"
        style={{ opacity: 0 }}
      >
        <Item2 />
      </div>
      <div
        ref={childrenRef[2]}
        className="w-[95%] xl:w-[950px] min-[2200px]:w-[1200px] absolute top-0 left-0 z-auto mt-20 ml-12"
        style={{ opacity: 0 }}
      >
        <Item1 />
      </div>
    </div>
  );
};
