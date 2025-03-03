"use client";

import { SectionOne } from "@/components/newest/body/sectionOne";
import { SectionResponses } from "@/components/newest/body/sectionResponses";
import { SectionThree } from "@/components/newest/body/sectionThree";
import { SectionTwo } from "@/components/newest/body/sectionTwo";
import { SectionWeather } from "@/components/newest/body/sectionWeather";
import { HeaderTop } from "@/components/newest/header/headerTop";

import { Suspense } from "react";

export default function Home() {
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
        <div className="w-full h-[20vh] md:h-[30vh]"></div>
        <Suspense>
          <SectionResponses />
        </Suspense>
        <div className="w-full h-[20vh] md:h-[30vh]"></div>
        <Suspense>
          <SectionThree />
        </Suspense>
        <div className="w-full h-[20vh] md:h-[30vh]"></div>
        <Suspense>
          <SectionWeather />
        </Suspense>
        <div className="w-full h-[20vh] md:h-[30vh]"></div>
      </main>
    </>
  );
}
