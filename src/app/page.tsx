import { ContentMain } from "@/components/version3/content/contentMain";
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
    <Suspense>
      <ContentMain />
    </Suspense>
  );
}
