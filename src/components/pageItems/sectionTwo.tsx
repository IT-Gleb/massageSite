import React, { FC } from "react";
import { TitleComponent } from "./titleComponent";
import { CaruselResponses } from "../gallery/caruselResponses";

export const SectionTwo: FC = () => {
  return (
    <section className="p-4">
      <TitleComponent title="Отзывы" />
      <CaruselResponses />
    </section>
  );
};
