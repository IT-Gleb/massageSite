import React, { FC, Suspense } from "react";
import { HeroComponent } from "../hero/heroComponent";
// import { ContentOneComponent } from "./contentOneComponent";
// import { ContentTwoComponent } from "./contentTwoComponent";
// import { ContentHowRecord } from "./contentHowRecord";
import { TopMenu } from "../menu/topMenu";
import { ContentServices } from "./contentServices";
// import { ContentLocation } from "./contentLocation";
// import { ContentResponses } from "./contentResponses";
// import { ContentVideo } from "./contentVideo";
// import { PhoneMenuButton } from "../ui/buttons/phoneMenuButton";
// import { ContentHealing } from "./contentHealing";
import { FooterLayout } from "../layout/footerLayout";

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
        <h2>Привет, Алёна! -2 </h2>
        {/*
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
        </Suspense> */}

        {/* <Suspense>
        <ContentLocation />
      </Suspense> */}
        {/* <Suspense>
          <PhoneMenuButton />
        </Suspense> */}
      </main>
      <Suspense>
        <FooterLayout />
      </Suspense>
    </>
  );
};
