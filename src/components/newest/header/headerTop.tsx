"use client";

import { SvgLogo1 } from "@/components/svg_components/svgLogo1";
import { ThemeButton } from "@/components/ui/buttons/themeButton";
import { InfoObj } from "@/utils/info";
import React, { FC, useLayoutEffect } from "react";
import { HeaderChildOne } from "./headerChildOne";
import { HeaderChildTwo } from "./headerChildTwo";
import { HeaderChildThree } from "./headerChildThree";
import { HeaderMenu } from "./headerMenu";
import { WeatherSection } from "@/components/pageItems/WeatherSection";
import { useMediaQuery } from "@/hooks/checkDevice";
import { useThemeStore } from "@/store/themeStore";
import { useShallow } from "zustand/shallow";

export const HeaderTop: FC = () => {
  // const is854 = useMediaQuery("only screen and (max-height:960px)");
  const isDark = useThemeStore(useShallow((state) => state.dark));

  useLayoutEffect(() => {
    isDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDark]);

  return (
    <header>
      <HeaderMenu />
      <section>
        <section className="flex flex-col bg-emerald-500 dark:bg-slate-500">
          <HeaderChildOne />
          <HeaderChildTwo />
        </section>
      </section>
    </header>
  );
};
