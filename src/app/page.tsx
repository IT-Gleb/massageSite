import { ContentMain } from "@/components/version3/content/contentMain";

// const HeroComp = dynamic(
//   () =>
//     import("@/components/version3/hero/heroComponent").then(
//       (component) => component.HeroComponent
//     ),
//   { ssr: false }
// );

export default async function Home() {
  return <ContentMain />;
}
