import React, { FC } from "react";
import { ContainerContent } from "./containerContent";
import { YandexLocation } from "@/components/yandexMap/yandexMap";
import { ancorsArray } from "@/utils/functions";
import { TextTitle } from "../ui/buttons/heading/textTitle";

export const ContentLocation: FC = () => {
  return (
    <ContainerContent backgroundClass="bg-indigo-50/50">
      <TextTitle title="Местонахождение" />
      <div id={ancorsArray[2].idString} className="w-fit mx-auto mt-10">
        <YandexLocation width={800} height={600} />
      </div>
      <div className="w-full h-[2vh] lg:h-[5vh] bg-[url('/images/svg/back.svg')] my-10"></div>
    </ContainerContent>
  );
};
