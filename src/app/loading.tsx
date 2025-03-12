import { Loader } from "@/components/version3/loader/Loader";
import React, { Suspense } from "react";

export default async function LoadingPage() {
  return (
    <div className="mt-10 w-fit mx-auto">
      <Suspense>
        <Loader />;
      </Suspense>
    </div>
  );
}
