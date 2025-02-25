import { HeroComponent } from "@/components/pageItems/heroComponent";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <HeroComponent />
    </Suspense>
  );
}
