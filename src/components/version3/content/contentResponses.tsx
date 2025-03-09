"use client";

import React, { FC } from "react";
import { ContainerContent } from "./containerContent";
import { CaruselResponses } from "@/components/gallery/caruselResponses";

export const ContentResponses: FC = () => {
  return (
    <ContainerContent backgroundClass="bg-indigo-50/50">
      <h2 className="underline underline-offset-8">Отзывы</h2>
      <div className="my-20">
        <CaruselResponses />
      </div>
    </ContainerContent>
  );
};
