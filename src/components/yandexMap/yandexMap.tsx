"use client";

import { MobileQuery, PlanshetQuery, useMediaQuery } from "@/hooks/checkDevice";
import React, { FC, useEffect, useRef, useState } from "react";

const iframeSrc: string =
  "https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=39.727268%2C43.605980&mode=whatshere&whatshere%5Bpoint%5D=39.725670%2C43.606763&whatshere%5Bzoom%5D=17&z=18";

type TMapParam = {
  width: number | string;
  height: number | string;
};

const yandexId: string = "yandexMapId";

export const YandexLocation: FC<TMapParam> = (param) => {
  const [frame, setFrame] = useState<React.ReactElement | null>(null);
  const isMobile: boolean = useMediaQuery(MobileQuery);
  const isPlanshet: boolean = useMediaQuery(PlanshetQuery);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const element = React.createElement("iframe", {
      src: iframeSrc,
      allowFullScreen: true,
      frameBorder: "1",
      ref: iframeRef,
      width: isMobile
        ? 345
        : isPlanshet
        ? 635
        : !isMobile && !isPlanshet
        ? 760
        : param.width,
      height: isMobile
        ? 205
        : isPlanshet
        ? 375
        : !isMobile && !isPlanshet
        ? 447
        : param.height,
      id: yandexId,
    });
    setFrame(element);

    return () => {
      setFrame(null);
    };
  }, []);

  useEffect(() => {
    //const elem = document.getElementById(yandexId);
    if (iframeRef.current) {
      if (isMobile) {
        (iframeRef.current as HTMLElement).style.width = "345px";
        (iframeRef.current as HTMLElement).style.height = "205px";
      } else if (isPlanshet) {
        (iframeRef.current as HTMLElement).style.width = "635px";
        (iframeRef.current as HTMLElement).style.height = "375px";
      } else {
        (iframeRef.current as HTMLElement).style.width = "760px";
        (iframeRef.current as HTMLElement).style.height = "447px";
      }
    }
  }, [isMobile, isPlanshet]);

  return <div className="overflow-hidden relative">{frame}</div>;
};
