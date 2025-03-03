"use client";

import { SectionOne } from "@/components/newest/body/sectionOne";
import { SectionResponses } from "@/components/newest/body/sectionResponses";
import { SectionThree } from "@/components/newest/body/sectionThree";
import { SectionTwo } from "@/components/newest/body/sectionTwo";
import { SectionWeather } from "@/components/newest/body/sectionWeather";
import { OneToolTip } from "@/components/newest/body/toolTip/oneToolTip";
import { HeaderTop } from "@/components/newest/header/headerTop";

import { Suspense, useRef } from "react";
import { useInView } from "motion/react";

export default function Home() {
  const targetView = useRef<HTMLDivElement>(null);

  const inView = useInView(targetView);

  return (
    <>
      <Suspense>
        <HeaderTop />
      </Suspense>
      <main className="min-h-[50vh] w-[90%] lg:w-[60%] mx-auto bg-transparent overflow-hidden">
        <div className="w-full h-[10vh] md:h-[20vh]"></div>
        <Suspense>
          <SectionOne />
        </Suspense>
        <div className="w-full h-[20vh] md:h-[30vh]"></div>
        <Suspense>
          <SectionTwo />
        </Suspense>
        <section ref={targetView}>
          <div className="w-full h-[20vh] md:h-[30vh]"></div>
          <Suspense>
            <SectionResponses />
          </Suspense>
          <div className="w-full h-[20vh] md:h-[30vh]"></div>
          <Suspense>
            {inView ? <OneToolTip text="Записаться на сеанс" /> : null}
            <SectionThree />
          </Suspense>
          <div className="w-full h-[20vh] md:h-[30vh]"></div>
          <Suspense>
            <SectionWeather />
          </Suspense>
        </section>
        <div className="w-full h-[20vh] md:h-[30vh]"></div>
      </main>
    </>
  );
}
