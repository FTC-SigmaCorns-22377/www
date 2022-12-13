import Image from "next/image";
import { motion, useIsPresent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import robot_render from "../public/media/robot_render.png";

export default function Home() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // target: ref,
    // offset: ["end end", "end start"],
  });
  useEffect(() => {
    scrollYProgress.onChange((v) => setValue(v));
  }, []);

  return (
    <div className="relative">
      <section id="hero" className="text-center flex flex-col">
        <div className="h-[10vh]"></div>
        <div className="flex flex-col md:gap-2">
          <h2 className="text-2xl md:text-4xl">Welcome to the</h2>
          <div className="w-full mx-auto relative h-24 mb-3">
            <Image
              src="/branding/sigmacorntext.svg"
              alt="Sigmacorns"
              fill
              className="w-full h-auto px-5"
            />
          </div>
          <h3 className="font-light md:text-3xl">NCSSM • FTC Team #22377</h3>
        </div>
      </section>
      <section id="robot" className="sticky top-20 pt-5 md:pt-0 z-10">
        <Image
          src={require(`../public/media/robot_animation/${String(
            Math.floor(value * 100)
          ).padStart(4, "0")}.png`)}
          alt="Robot Render"
          className="mx-auto"
          ref={ref}
        />
      </section>
      <section className="h-screen p-10 text-black flex flex-col justify-between">
        <Statistic className="bg-green-400 mr-auto">
          Established December, 2022
        </Statistic>
        <Statistic className="bg-red-400 ml-auto">
          At least $5 in funding
        </Statistic>
        <Statistic className="bg-purple-400 mr-auto">
          3+ members i think!
        </Statistic>
      </section>
    </div>
  );
}

interface StatisticProps {
  className: string;
  children: React.ReactNode;
}

function Statistic({ className, children }: StatisticProps) {
  return (
    <div
      className={`z-20 md:z-0 p-10 rounded-lg md:w-1/3 text-3xl font-bold ${className}`}
    >
      {children}
    </div>
  );
}
