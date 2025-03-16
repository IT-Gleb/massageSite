"use client";

import React, { FC, Suspense, useEffect, useRef, useState } from "react";
import { HeroComponent } from "../hero/heroComponent";
import { ContentTwoComponent } from "./contentTwoComponent";
import { TopMenu } from "../menu/topMenu";
import { ContentResponses } from "./contentResponses";
import { ContentVideo } from "./contentVideo";
import { PhoneMenuButton } from "../ui/buttons/phoneMenuButton";
// import { ContentHealing } from "./contentHealing";
import { FooterLayout } from "../layout/footerLayout";

import dynamic from "next/dynamic";
import { useInView } from "motion/react";

const ContentHowRecordSSR = dynamic(
  () =>
    import("./contentHowRecord").then(
      (component) => component.ContentHowRecord
    ),
  { ssr: false }
);

const ContentOneComponentSSR = dynamic(
  () =>
    import("./contentOneComponent").then(
      (component) => component.ContentOneComponent
    ),
  { ssr: false }
);

const ContentLocationSSR = dynamic(
  () =>
    import("./contentLocation").then((component) => component.ContentLocation),
  { ssr: false }
);

const ContentServicesServer = dynamic(() =>
  import("./contentServices").then((component) => component.ContentServices)
);

export const ContentMain: FC = () => {
  const viewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(viewRef, { amount: 0.3, once: false });
  const [scopeView, setScopeView] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [indexView, setIndexView] = useState<number>(-1);

  const handleInView = (param: number) => {
    const tmp: boolean[] = scopeView;
    tmp[param] = true;

    setScopeView(tmp);
  };

  useEffect(() => {
    if (indexView >= scopeView.length) {
      return;
    }

    let tmpIndex: number = indexView + 1;
    setIndexView(tmpIndex);
    handleInView(tmpIndex);
  }, [inView]);

  return (
    <>
      <Suspense>
        <TopMenu />
      </Suspense>

      <main className="flex flex-col min-h-[100vh] bg-white flex-auto">
        <Suspense fallback={<div>идет загрузка...</div>}>
          <HeroComponent />
        </Suspense>
        {scopeView[0] && (
          <Suspense>
            <ContentServicesServer />
          </Suspense>
        )}
        {scopeView[1] && (
          <Suspense>
            <ContentHowRecordSSR />
          </Suspense>
        )}
        {scopeView[2] && (
          <Suspense>
            <ContentVideo />
          </Suspense>
        )}
        {scopeView[3] && (
          <Suspense>
            <ContentOneComponentSSR />
          </Suspense>
        )}

        {scopeView[4] && (
          <Suspense>
            <ContentTwoComponent />
          </Suspense>
        )}

        {scopeView[5] && (
          <Suspense>
            <ContentResponses />
          </Suspense>
        )}
        {scopeView[6] && (
          <Suspense>
            <ContentLocationSSR />
          </Suspense>
        )}
        <Suspense>
          <PhoneMenuButton />
        </Suspense>
        {indexView < scopeView.length - 1 && (
          <div
            ref={viewRef}
            className="w-full h-[30px] bg-transparent text-black text-center"
          >
            Вы достигли дна
          </div>
        )}
      </main>
      <Suspense>
        <FooterLayout />
      </Suspense>
    </>
  );
};
