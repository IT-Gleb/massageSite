"use client";

import React, { FC, Suspense, useEffect, useRef, useState } from "react";
import { HeroComponent } from "../hero/heroComponent";
import { ContentTwoComponent } from "./contentTwoComponent";
import { TopMenu } from "../menu/topMenu";
import { ContentResponses } from "./contentResponses";
import { ContentVideo } from "./contentVideo";
import { PhoneMenuButton } from "../ui/buttons/phoneMenuButton";
import { ContentHealing } from "./contentHealing";
import { FooterLayout } from "../layout/footerLayout";

import dynamic from "next/dynamic";
import { useInView } from "motion/react";
import { Loader } from "../loader/Loader";

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

const ComponentsScope: React.JSX.Element[] = [
  <ContentServicesServer />,
  <ContentHowRecordSSR />,
  <ContentHealing />,
  <ContentVideo />,
  <ContentOneComponentSSR />,
  <ContentTwoComponent />,
  <ContentResponses />,
  <ContentLocationSSR />,
];

export const ContentMain: FC = () => {
  const viewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(viewRef, { amount: 0.3, once: false });
  const [scopeView, setScopeView] = useState<boolean[]>(
    ComponentsScope.map(() => false)
  );
  const [indexView, setIndexView] = useState<number>(-1);

  useEffect(() => {
    if (indexView >= scopeView.length) {
      return;
    }

    const handleInView = (param: number) => {
      const indx: number = Math.min(param, scopeView.length - 1);
      const tmp: boolean[] = scopeView;
      tmp[indx] = true;

      setScopeView(tmp);
    };

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
        {scopeView.map((item, index) => {
          if (item) {
            return (
              <Suspense key={index} fallback={<Loader />}>
                {ComponentsScope[index]}
              </Suspense>
            );
          }
        })}
        <Suspense>
          <PhoneMenuButton />
        </Suspense>
        {indexView < scopeView.length - 1 && (
          <div
            ref={viewRef}
            className="w-full h-[30px] bg-transparent text-black text-center my-5"
          >
            Массаж FoHow в Сочи
          </div>
        )}
      </main>
      <Suspense>
        <FooterLayout />
      </Suspense>
    </>
  );
};
