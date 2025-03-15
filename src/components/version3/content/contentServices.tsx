import React, { FC } from "react";
import { ContainerContent } from "./containerContent";
import { CardService } from "../ui/buttons/cards/cardService";
import { ancorsArray } from "@/utils/functions";
import { TextTitle } from "../ui/buttons/heading/textTitle";

export const ContentServices: FC = () => {
  return (
    <ContainerContent backgroundClass=" bg-green-50/50">
      <div id={ancorsArray[0].idString} className="min-h-[40vh] flex flex-col">
        <TextTitle title="Услуги" />
        <div className="flex-auto mt-10">
          <ul className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-4">
            <li>
              <CardService
                title="Массаж спины"
                imageSrc="/images/massage1/massage5.jpg"
                index={1}
                altText="массаж спины"
              />
            </li>
            <li>
              <CardService
                title="Массаж воротниковой зоны"
                imageSrc="/images/massage1/massage4.jpg"
                index={2}
                altText="Массаж воротниковой зоны"
              />
            </li>
            <li>
              <CardService
                title="Массаж ног (стоп,коленей)"
                imageSrc="/images/massage1/massage_legs.jpg"
                index={3}
                altText="Массаж ног (стоп,коленей)"
              />
            </li>
            <li>
              <CardService
                title="Массаж лица"
                imageSrc="/images/massage1/massage2.jpg"
                index={4}
                altText="Массаж лица"
              />
            </li>
          </ul>
          <p className="indent-4 mt-10 text-[2em]/[2.1em] lg:text-[clamp(1.5vw,2vw,2vw)]/[clamp(1.5vw,2vw,2.1vw)]">
            Насколько полезен будет массаж, во многом зависит от периодичности
            его проведения.
          </p>
        </div>
      </div>
      <div className="w-full h-[2vh] lg:h-[5vh] bg-[url('/images/svg/back.svg')] mt-5"></div>
    </ContainerContent>
  );
};
