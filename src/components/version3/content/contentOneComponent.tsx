import {
  useScroll,
  useTransform,
  motion,
  useAnimate,
  useInView,
} from "motion/react";
import React, { FC, useEffect, useRef } from "react";

export const ContentOneComponent: FC = () => {
  const triggerRef = useRef(null);
  const [target, animate] = useAnimate();
  const [target2, animate2] = useAnimate();
  const isView = useInView(triggerRef, { amount: 0.5, once: false });

  useEffect(() => {
    (async function Abc() {
      if (isView) {
        await animate(
          target.current,
          { opacity: 1, x: [100, 0] },
          { ease: "easeIn" }
        );
        await animate2(
          target2.current,
          { opacity: 1, x: [-100, 0] },
          { delay: 0.15, ease: "easeOut" }
        );
      } else {
        await animate(
          target.current,
          { opacity: 0, x: [0, 100] },
          { ease: "easeIn" }
        );
        await animate2(
          target2.current,
          { opacity: 0, x: [0, -100] },
          { delay: 0.15, ease: "easeOut" }
        );
      }
    })();
  }, [isView]);

  return (
    <section className="w-[96%] lg:w-[75%] xl:w-[65%] mx-auto h-[150vh] bg-green-50 relative overflow-hidden">
      <motion.div
        ref={target}
        initial={{ opacity: 0 }}
        className="absolute z-20 w-[350px] h-[40%] top-[5%] right-5 bg-green-700 text-white place-content-around text-[1.5rem]/[1.6rem] p-4"
      >
        fhvjfhvjfhj
      </motion.div>
      <motion.div
        ref={target2}
        initial={{ opacity: 0 }}
        className="absolute z-20 w-[350px] h-[40%] top-[20%] left-5 bg-green-400 text-white place-content-around text-[1.5rem]/[1.6rem] p-4"
      >
        fhvjfhvjfhj
      </motion.div>

      <motion.div className="bg-green-50 mt-5 w-[70%] mr-auto">
        <h3 className="bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.transparent)_50%)] p-2">
          Content 1
        </h3>
        <div className="grid grid-cols-4 auto-rows-[320px] text-[1vw]/[1.2vw] gap-x-2 font-verdana [&>div>p]:border [&>div>p]:border-slate-400 [&>div>p]:p-2 [&>div>p]:indent-4 ">
          <div className="place-content-center">
            <p>Далеко-далеко за словесными горами ?</p>
          </div>
          <div className=" place-content-start">
            <p>Lorem ipsum dolor sit amet consectetur ex?</p>
          </div>
          <div ref={triggerRef} className="place-content-end">
            <p>
              Далеко-далеко за словесными горами в стране гласных и согласных
              живут рыбные тексты.
            </p>
          </div>
          <div className=" place-content-around">
            <p>
              Далеко-далеко за, словесными горами в стране гласных и согласных
              живут рыбные тексты.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
