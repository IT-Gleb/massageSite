"use client";

import React, { FC, useEffect, useRef } from "react";
import { ContainerContent } from "./containerContent";
import { ancorsArray } from "@/utils/functions";
import { useInView } from "motion/react";
import { useScrollDownUp } from "@/hooks/scrollUpDown";
import { TextTitle } from "../ui/buttons/heading/textTitle";

export const ContentVideo: FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  const { scrollDirection } = useScrollDownUp();

  const isView = useInView(targetRef, { amount: 0.5, once: false });

  useEffect(() => {
    if (isView) {
      //   console.log(videoRef.current?.paused);
      if (videoRef.current?.paused) {
        if (scrollDirection === "up") {
          (videoRef.current as HTMLVideoElement).src = "/video/video2.mp4";
          videoRef.current?.pause();
          //   (videoRef.current as HTMLVideoElement).currentTime = 0;
        } else {
          (videoRef.current as HTMLVideoElement).src = "/video/video2.mp4";
          videoRef.current?.play();
        }
        (videoRef2.current as HTMLVideoElement).src = "/video/video1.mp4";
        videoRef2.current?.pause();
      }
    } else {
      if (!videoRef.current?.paused) {
        videoRef.current?.pause();
      }
      if (!videoRef2.current?.paused) {
        (videoRef2.current as HTMLVideoElement).src = "/video/video1.mp4";
        videoRef2.current?.pause();
      }
    }
  }, [isView]);

  return (
    <ContainerContent backgroundClass="bg-indigo-50/50">
      <div id={ancorsArray[1].idString}>
        <TextTitle title="Видео" />
      </div>
      <p className="my-10 text-[1.75em]/[1.9em] xl:text-[1em]/[1em]">
        Использую в работе.
      </p>
      <div
        ref={targetRef}
        className="my-10 w-[96%] xl:w-[75%] mx-auto flex items-center justify-center xl:justify-between gap-5 xl:gap-10 flex-wrap"
      >
        <div className="h-[640px] object-cover object-left-top">
          <video
            ref={videoRef}
            muted
            controls
            poster="/images/massage1/fohow_logo.jpg"
            className="block w-full h-full"
          >
            <source src="/video/video2.mp4" type="video/mp4" />
            Браузер на поддерживает вывод видеоконтента
          </video>
        </div>
        <div className="h-[640px] object-cover object-left-top">
          <video
            ref={videoRef2}
            muted
            controls
            poster="/images/massage1/fohow_logo.jpg"
            className="block w-full h-full"
          >
            <source src="/video/video1.mp4" type="video/mp4" />
            Браузер на поддерживает вывод видеоконтента
          </video>
        </div>
      </div>
      <div className="w-full h-[2vh] lg:h-[5vh] bg-[url('/images/svg/back.svg')] mt-5"></div>
    </ContainerContent>
  );
};
