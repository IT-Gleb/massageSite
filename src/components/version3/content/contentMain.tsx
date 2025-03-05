"use client";

import React, { FC, Suspense, useRef } from "react";
import { HeroComponent } from "../hero/heroComponent";
import { ContentOneComponent } from "./contentOneComponent";

export const ContentMain: FC = () => {
  return (
    <main className="flex flex-col min-h-[100vh] bg-white">
      <Suspense fallback={<div>идет загрузка...</div>}>
        <HeroComponent />
      </Suspense>
      <Suspense>
        <ContentOneComponent />
      </Suspense>
    </main>
  );
};
