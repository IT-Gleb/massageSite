import { CaruselResponses } from "@/components/gallery/caruselResponses";
import { SvgLogo1 } from "@/components/svg_components/svgLogo1";
import { SvgLogo2 } from "@/components/svg_components/svgLogo2";
import React, { Suspense } from "react";
import { SectionForma } from "../section/sectionForma";

export const SectionResponses = () => {
  return (
    <SectionForma
      title="Отзывы"
      isRotateIcon
      Icon1={<SvgLogo2 />}
      Icon2={<SvgLogo1 />}
    >
      <div className="my-10 h-[34vh]">
        <Suspense>
          <CaruselResponses />
        </Suspense>
      </div>
    </SectionForma>
  );
};

/*
[mask-image:radial-gradient(circle_closest-side,theme(colors.black)_75%,theme(colors.transparent)_25%)]
[mask-size:5rem_5rem] [mask-position:left_top] [mask-repeat:no-repeat] [mask-origin:border-box] [mask-mode:match-source] [mask-composite:substract]
[mask-image:url('/images/svg/caplya.svg')] [mask-clip:view-box] [mask-composite:substract] [mask-repeat:no-repeat]

*/
