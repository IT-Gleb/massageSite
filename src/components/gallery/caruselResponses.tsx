import React, { FC, RefObject, useEffect, useRef, useState } from "react";
import { CaruselItem } from "./caruselItem";
import { CaruselButtons } from "./caruselButtons";
import respData from "../../../public/json/responses.json";
import { useScrollLeftRight } from "@/hooks/scrollUpDown";
import { motion } from "motion/react";

function sortBydate(a: TTextItems, b: TTextItems) {
  const dt1: Date = new Date(a.date);
  const dt2: Date = new Date(b.date);

  if (dt1 > dt2) {
    return -1;
  } else {
    return 1;
  }
}

export const CaruselResponses: FC = () => {
  const [responseData, setResponseData] = useState<TTextItems[]>([]);
  const [countItem, setCountItem] = useState<number>(
    responseData.length > 0 ? responseData.length : 0
  );
  const [activeIndex, setActiveIndex] = useState<number>(
    countItem > 0 ? 0 : -1
  );
  const centerRef = useRef<HTMLDivElement>(null);

  const Refs = respData.map(() => useRef<HTMLElement>(null));
  // const Entrys: boolean[] = respData.map(() => false);

  const setCallBackRef = (index: number) => (element: HTMLElement) => {
    Refs[index].current = element;
  };

  // const handleViewPortLeave = (
  //   entry: IntersectionObserverEntry | null,
  //   pindex: number
  // ) => {
  //   let workIndex: number = 0;
  //   if (!entry?.isIntersecting && scrollXDirection === "right") {
  //     workIndex =
  //       pindex < responseData.length ? (workIndex = pindex + 2) : pindex;

  //     workIndex < 0 ? 0 : workIndex;
  //   }
  //   if (!entry?.isIntersecting && scrollXDirection === "left") {
  //     workIndex = pindex - 2;
  //     workIndex > 1 ? workIndex - 2 : workIndex;
  //     pindex === 0 ? (workIndex = 0) : workIndex;
  //   }
  //   //console.log(workIndex, pindex);
  //   setActiveIndex(workIndex);
  // };

  const handleAIndex = (param: number) => {
    //console.log(param);
    let indx: number =
      param < 1 ? 0 : param >= countItem ? countItem - 1 : param;
    setActiveIndex(indx);
    (Refs[indx].current as HTMLElement).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  useEffect(() => {
    if (!respData || respData.length < 1) {
      setResponseData([]);
      setCountItem(0);
      setActiveIndex(-1);
      return;
    }

    const tmp: TTextItems[] = [];
    let indx: number = 0;
    for (let item of respData) {
      let abc: TTextItems = { ...item, index: 0 };
      tmp.push(abc);
      indx++;
    }
    if (tmp.length > 1) {
      tmp.sort(sortBydate);
      //Присвоить индекс
      indx = 0;
      for (let item of tmp) {
        item.index = indx;
        indx++;
      }
    }

    setResponseData(tmp);
    setCountItem(tmp.length);
    setActiveIndex(tmp.length > 0 ? 0 : -1);
  }, [respData]);

  return (
    <div className="w-fit mx-auto relative">
      <div
        ref={centerRef}
        className="relative max-[552px]:w-[280px] max-[600px]:w-[430px] sm:w-[560px] md:w-[656px] 2xl:w-[986px] min-[1960px]:w-[1320px]
         h-[255px] mx-auto overflow-y-hidden overflow-x-scroll mt-10"
        style={{
          scrollSnapType: "x mandatory",
          scrollSnapAlign: "start",
          scrollbarWidth: "none",
        }}
      >
        <div className="absolute top-1 flex gap-x-3 items-start z-0">
          {responseData.map((item, index) => {
            return (
              <motion.div
                key={index}
                // onViewportEnter={(entry) => handleViewPortEnter(entry, index)}
                // onViewportLeave={(entry) => handleViewPortLeave(entry, index)}
                onViewportEnter={(entry) => {
                  if (entry?.isIntersecting) {
                    // console.log("inView:", index);
                    setActiveIndex(index);
                  }
                }}
                viewport={{ root: centerRef, margin: "0% -50% 100% -50%" }}
                className="w-fit mx-auto"
              >
                <CaruselItem
                  {...item}
                  activeIndex={activeIndex}
                  selfRef={setCallBackRef(index)}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
      <CaruselButtons
        activeIndex={activeIndex}
        count={countItem}
        clickButton={handleAIndex}
      />
    </div>
  );
};
