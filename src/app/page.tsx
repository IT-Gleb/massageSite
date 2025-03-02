"use client";

import { SectionOne } from "@/components/newest/body/sectionOne";
import { SectionResponses } from "@/components/newest/body/sectionResponses";
import { SectionTwo } from "@/components/newest/body/sectionTwo";
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
      </main>
    </>
  );
}
