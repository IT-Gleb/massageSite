"use client";

import React, { FC } from "react";
import { ContainerContent } from "./containerContent";
import { CaruselResponses } from "@/components/gallery/caruselResponses";
import { TextTitle } from "../ui/buttons/heading/textTitle";

export const ContentResponses: FC = () => {
  return (
    <ContainerContent backgroundClass="bg-green-50/50">
      <TextTitle title="Отзывы" />
      <div className="my-20">
        <CaruselResponses />
      </div>
      <div className="w-full h-[2vh] lg:h-[5vh] bg-[url('/images/svg/back.svg')] mt-5"></div>
    </ContainerContent>
  );
};
