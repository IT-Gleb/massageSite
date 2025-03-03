import React from "react";
import { SectionForma } from "../section/sectionForma";
import { WeatherSection } from "@/components/pageItems/WeatherSection";
import { SvgLogo2 } from "@/components/svg_components/svgLogo2";
import { SvgLogo1 } from "@/components/svg_components/svgLogo1";

export const SectionWeather = () => {
  return (
    <SectionForma title="Погода" Icon1={<SvgLogo2 />} Icon2={null}>
      <article className="w-fit mx-auto my-12">
        <p className="text-[clamp(0.8rem,2vw,1.2rem)]/[clamp(1rem,2.5vw,1.6rem)] mb-4">
          Сейчас в городе:
        </p>
        <WeatherSection />
        <p className="text-[clamp(0.8rem,2vw,1.2rem)]/[clamp(1rem,2.5vw,1.6rem)] my-4">
          Отличная погода для массажа.
        </p>
      </article>
    </SectionForma>
  );
};
