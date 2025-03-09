import React, { FC, Suspense } from "react";
import { HeroComponent } from "../hero/heroComponent";
import { ContentOneComponent } from "./contentOneComponent";
import { ContentTwoComponent } from "./contentTwoComponent";
import { ContentHowRecord } from "./contentHowRecord";
import { TopMenu } from "../menu/topMenu";
import { ContentServices } from "./contentServices";
import { ContentLocation } from "./contentLocation";
import { ContentResponses } from "./contentResponses";
import { ContentVideo } from "./contentVideo";

export const ContentMain: FC = () => {
  return (
    <main className="flex flex-col min-h-[100vh] bg-white flex-auto">
      <Suspense fallback={<div>идет загрузка...</div>}>
        <TopMenu />
        <HeroComponent />
      </Suspense>
      <Suspense>
        <ContentServices />
      </Suspense>
      <Suspense>
        <ContentHowRecord />
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
    </main>
  );
};
