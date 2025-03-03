import React, { FC } from "react";
import { SectionForma } from "../section/sectionForma";
import { SvgLogo2 } from "@/components/svg_components/svgLogo2";
import { SvgLogo1 } from "@/components/svg_components/svgLogo1";
import { YandexLocation } from "@/components/yandexMap/yandexMap";

export const SectionThree: FC = () => {
  return (
    <SectionForma
      title={"Местоположение"}
      isRotateIcon
      Icon1={<SvgLogo2 />}
      Icon2={<SvgLogo1 />}
    >
      <article className="my-12 w-fit mx-auto">
        <YandexLocation width={700} height={480} />
      </article>
    </SectionForma>
  );
};
