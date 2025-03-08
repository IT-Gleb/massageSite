import React, { FC, Suspense } from "react";
import { HeroComponent } from "../hero/heroComponent";
import { ContentOneComponent } from "./contentOneComponent";
import { ContentTwoComponent } from "./contentTwoComponent";
import { ContentHowRecord } from "./contentHowRecord";

export const ContentMain: FC = () => {
  return (
    <main className="flex flex-col min-h-[100vh] bg-white flex-auto">
      <Suspense fallback={<div>идет загрузка...</div>}>
        <HeroComponent />
      </Suspense>
      <Suspense>
        <ContentHowRecord />
      </Suspense>
      <Suspense>
        <ContentOneComponent />
      </Suspense>
      <Suspense>
        <ContentTwoComponent />
      </Suspense>
    </main>
  );
};
