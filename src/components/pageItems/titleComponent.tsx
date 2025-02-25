import React, { FC } from "react";

type TTitleParams = {
  title: string;
};

//    before:[mask-image:linear-gradient(to_right,theme(colors.black),theme(colors.white))]
//before:bg-[linear-gradient(to_right,theme(colors.transparent)_25%,theme(colors.emerald.100)_75%)]

export const TitleComponent: FC<TTitleParams> = (params) => {
  // const [scope, animate] = useAnimate();
  // const isInView = useInView(scope, { amount: 0.999 }); //{ margin: "0px 100px -30px 0px" }

  // useEffect(() => {
  //   if (isInView) {
  //     animate(
  //       scope.current,
  //       { x: [40, -50, 0] },
  //       { duration: 0.75, ease: "easeIn" }
  //     );
  //   }
  // }, [isInView]);

  return (
    <div
      className="flex items-center gap-x-2 mt-5 h-[clamp(35px,4vw,75px)] relative
       bg-[url('/images/svg/back_dark.svg')]
       dark:bg-[url('/images/svg/back.svg')]
       before:content-[''] before:absolute before:w-full before:h-full before:block
       before:bg-[linear-gradient(to_right,theme(colors.transparent)_0%_25%,theme(colors.emerald.100)_75%_100%)]
       before:dark:bg-[linear-gradient(to_right,theme(colors.transparent)_0%_25%,theme(colors.slate.600)_75%_100%)]
       "
    >
      <span className="font-materialSymbolsOulined text-[clamp(28px,4vw,64px)]/[clamp(28px,10vw,64px)] text-emerald-500 dark:text-slate-300">
        info
      </span>
      <h3 className="text-[clamp(1.2rem,3vw,2rem)]/[clamp(1.2rem,3vw,2rem)] font-inter font-bold text-emerald-600 dark:text-slate-100 uppercase">
        {params.title}
      </h3>
    </div>
  );
};
