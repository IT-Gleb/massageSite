import React, { FC, Suspense } from "react";
import { ContainerContent } from "../content/containerContent";
import { InfoObj } from "@/utils/info";
import { getNowYear } from "@/utils/functions";

export const FooterLayout: FC = () => {
  return (
    <footer className="text-green-50">
      <Suspense>
        <ContainerContent backgroundClass="bg-green-600">
          <div className="pb-20 flex flex-wrap items-center gap-2 justify-evenly text-[4vw]/[4vw] md:text-[1.6vw]/[1.7vw] lg:text-[1vw]/[1.1vw]">
            <a href={`tel:+${InfoObj.phoneReg}`} className="font-oswald">
              тел.: {InfoObj.phone_mask}
            </a>
            <p className="p-2">{InfoObj.FullAdress}</p>
            <p>&copy; 2001-{getNowYear()}г.</p>
          </div>
        </ContainerContent>
      </Suspense>
    </footer>
  );
};
