import React, { FC } from "react";
import { ContainerContent } from "./containerContent";
import { YandexLocation } from "@/components/yandexMap/yandexMap";
import { ancorsArray } from "@/utils/functions";
import { UpdateButton } from "../ui/buttons/updateButton";

export const ContentLocation: FC = () => {
  return (
    <ContainerContent backgroundClass="bg-green-50/50">
      <h2 className=" underline underline-offset-8">Местонахождение</h2>
      <div id={ancorsArray[2].idString} className="w-fit mx-auto mt-10">
        <YandexLocation width={800} height={600} />
      </div>
      <div className="w-full h-[2vh] lg:h-[5vh] bg-[url('/images/svg/back.svg')] mt-5"></div>
    </ContainerContent>
  );
};
