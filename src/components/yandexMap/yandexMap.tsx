"use client";

import { MobileQuery, PlanshetQuery, useMediaQuery } from "@/hooks/checkDevice";
import React, { FC, useEffect, useRef, useState } from "react";

const iframeSrc: string =
  "https://yandex.ru/map-widget/v1/?ll=39.726966%2C43.607111&masstransit%5BstopId%5D=stop__9973503&mode=masstransit&tab=overview&z=18.6";

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
