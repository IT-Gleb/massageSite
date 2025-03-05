import { HeroComponent } from "@/components/version3/hero/heroComponent";
//"use client";

//import dynamic from "next/dynamic";
import { Suspense } from "react";

// const HeroComp = dynamic(
//   () =>
//     import("@/components/version3/hero/heroComponent").then(
//       (component) => component.HeroComponent
//     ),
//   { ssr: false }
// );

export default async function Home() {
  return (
    <main className="flex flex-col min-h-[100vh]">
      <Suspense fallback={<div>идет загрузка...</div>}>
        <HeroComponent />
      </Suspense>
    </main>
  );
}
