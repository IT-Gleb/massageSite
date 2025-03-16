"use client";

import React, { FC, memo, useEffect, useRef, useState } from "react";
import { CircleLoader } from "./circleLoader";

const step: number = 1;
const Maxpercent: number = 100;

export const Loader: FC = memo(() => {
  const [Percent, setPercent] = useState<number>(0);
  const interval = useRef<number>(-1);

  useEffect(() => {
    interval.current = window.setInterval(() => {
      setPercent((prev) => (prev = prev + step));
    }, 300);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  useEffect(() => {
    if (Percent >= Maxpercent) {
      setPercent(Maxpercent);
      clearInterval(interval.current);
      return;
    }
  }, [Percent]);

  //console.log(Percent);

  return (
    <div className="w-[150px] h-[150px] p-1 mx-auto">
      <CircleLoader percent={Percent} colorBegin="#0089ba" colorEnd="#f9f871" />
    </div>
  );
});
