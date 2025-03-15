"use client";

import React, { FC, Suspense } from "react";
import { HeroComponent } from "../hero/heroComponent";
import { ContentOneComponent } from "./contentOneComponent";
import { ContentTwoComponent } from "./contentTwoComponent";
import { TopMenu } from "../menu/topMenu";
import { ContentServices } from "./contentServices";
//import { ContentHowRecord } from "./contentHowRecord";
import { ContentLocation } from "./contentLocation";
import { ContentResponses } from "./contentResponses";
import { ContentVideo } from "./contentVideo";
import { PhoneMenuButton } from "../ui/buttons/phoneMenuButton";
// import { ContentHealing } from "./contentHealing";
import { FooterLayout } from "../layout/footerLayout";
import dynamic from "next/dynamic";

const ContentHowRecordSSR = dynamic(
  () =>
    import("./contentHowRecord").then(
      (component) => component.ContentHowRecord
    ),
  { ssr: false }
);

export const ContentMain: FC = () => {
  return (
    <>
      <Suspense>
        <TopMenu />
      </Suspense>

      <main className="flex flex-col min-h-[100vh] bg-white flex-auto">
        <Suspense fallback={<div>идет загрузка...</div>}>
          <HeroComponent />
        </Suspense>
        <Suspense>
          <ContentServices />
        </Suspense>
        <Suspense>
          <ContentHowRecordSSR />
        </Suspense>
        <Suspense>
          <ContentVideo />
        </Suspense>
        <Suspense>
          <ContentOneComponent />
        </Suspense>

        <Suspense>
          <ContentTwoComponent />
        </Suspense>
        <Suspense>
          <ContentResponses />
        </Suspense>

        <Suspense>
          <ContentLocation />
        </Suspense>
        <Suspense>
          <PhoneMenuButton />
        </Suspense>
      </main>
      <Suspense>
        <FooterLayout />
      </Suspense>
    </>
  );
};
