import { HeroComponent } from "@/components/version3/hero/heroComponent";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-[100vh]">
      <HeroComponent />
    </main>
  );
}
