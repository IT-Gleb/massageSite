import React, { FC, useEffect, useRef, useState } from "react";
import { CaruselItem } from "./caruselItem";
import { CaruselButtons } from "./caruselButtons";
import { CaruselDataAttributeName } from "@/utils/functions";
import respData from "../../../public/json/responses.json";

function sortBydate(a: TTextItems, b: TTextItems) {
  if (a.date.toLowerCase() > b.date.toLowerCase()) {
    return -1;
  } else {
    return 1;
  }
}

export const CaruselResponses: FC = () => {
  const [responseData, setResponseData] = useState<TTextItems[]>([]);
  const [countItem, setCountItem] = useState<number>(responseData.length);
  const [activeIndex, setActiveIndex] = useState<number>(
    countItem > 0 ? 0 : -1
  );
  const caruselRef = useRef<HTMLDivElement>(null);

  const handleAIndex = (param: number) => {
    let indx: number =
      param < 1 ? 0 : param >= countItem ? countItem - 1 : param;
    setActiveIndex(indx);

    let element: Element | undefined = undefined;
    //Найти текущий элемент по data-item
    for (let itm of caruselRef.current?.children as HTMLCollection) {
      if (itm) {
        const itemindex = itm.getAttribute(CaruselDataAttributeName);
        if (itemindex) {
          Number(itemindex) === indx ? (element = itm) : (element = undefined);
          if (element) {
            break;
          }
        }
      }
    }
    if (element) {
      (element as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  useEffect(() => {
    const tmp: TTextItems[] = [];
    let indx: number = 0;
    for (let item of respData) {
      let abc: TTextItems = { ...item, index: indx };
      tmp.push(abc);
      indx++;
    }
    setResponseData(tmp);
    setCountItem(tmp.length);
    setActiveIndex(tmp.length > 0 ? 0 : -1);
  }, []);

  return (
    <>
      <div
        className="relative max-[552px]:w-[280px] max-[600px]:w-[430px] sm:w-[560px] md:w-[656px] 2xl:w-[986px] min-[1960px]:w-[1320px]
         h-[255px] mx-auto overflow-y-hidden overflow-x-scroll mt-10"
        style={{
          scrollSnapType: "x mandatory",
          scrollSnapAlign: "start",
          scrollbarWidth: "none",
        }}
      >
        <div
          ref={caruselRef}
          className="absolute top-1 flex gap-x-3 items-start"
        >
          {responseData.sort(sortBydate).map((item, index) => {
            return (
              <CaruselItem key={index} {...item} activeIndex={activeIndex} />
            );
          })}
        </div>
      </div>
      <CaruselButtons
        activeIndex={activeIndex}
        count={countItem}
        clickButton={handleAIndex}
      />
    </>
  );
};
