import React, { FC, Suspense } from "react";
import { HeroComponent } from "../hero/heroComponent";
import { ContentOneComponent } from "./contentOneComponent";
import { ContentTwoComponent } from "./contentTwoComponent";

export const ContentMain: FC = () => {
  return (
    <main className="flex flex-col min-h-[100vh] bg-white">
      <Suspense fallback={<div>идет загрузка...</div>}>
        <HeroComponent />
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
