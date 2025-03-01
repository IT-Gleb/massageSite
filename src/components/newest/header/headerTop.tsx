"use client";

import { SvgLogo1 } from "@/components/svg_components/svgLogo1";
import { ThemeButton } from "@/components/ui/buttons/themeButton";
import { InfoObj } from "@/utils/info";
import React, { FC } from "react";
import { HeaderChildOne } from "./headerChildOne";
import { HeaderChildTwo } from "./headerChildTwo";
import { HeaderChildThree } from "./headerChildThree";
import { HeaderMenu } from "./headerMenu";

export const HeaderTop: FC = () => {
  return (
    <header className="w-full lg:h-[100vh] xl:h-[90vh] min-[2200px]:h-[60vh] bg-orange-500 text-orange-100 flex flex-col">
      <section className=" bg-[linear-gradient(to_right,theme(colors.orange.800),theme(colors.orange.600),theme(colors.orange.500),theme(colors.orange.700))]">
        <HeaderMenu />
      </section>
      <section className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] lg:grid-cols-[120px_350px_1fr] xl:grid-cols-[120px_550px_1fr] h-[95vh] overflow-hidden">
        <HeaderChildOne />
        <HeaderChildTwo />

        <HeaderChildThree />
      </section>
    </header>
  );
};
