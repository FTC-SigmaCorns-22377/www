import Image from "next/image";
import {
  HTMLMotionProps,
  motion,
  useIsPresent,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { slidedown, stagger } from "../utils/motionPresets";
import RobotSection from "../components/RobotSection";
import Wrapper from "../components/Wrapper";

// List
// TODO: add tailwind prose
// TODO: add markdown parser

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
    <Wrapper>
      <section id="hero" className="text-center flex flex-col">
        <div className="h-[10vh]"></div>
        <div className="flex flex-col md:gap-2">
          <motion.h2 {...slidedown} className="text-2xl md:text-4xl">
            Welcome to the
          </motion.h2>
          <motion.div
            {...slidedown}
            className="w-full mx-auto relative h-24 mb-3"
          >
          <Image
            src="/branding/sigmacorntext.svg"
            alt="Sigmacorns"
            fill
            className="w-full h-auto px-5"
          />
          </motion.div>
          <motion.h3 {...slidedown} className="font-light md:text-3xl">
            NCSSM • FTC Team #22377 • @ftc22377
            </motion.h3>
        </div>
      </section>
      <RobotSection value={value} />
      <section className="h-screen p-10 text-black flex flex-col justify-between">
        <Statistic className="bg-[#CCA4DE] md:mr-auto">
          Established August 2022
        </Statistic>
        <Statistic className="bg-[#949CE0] md:ml-auto">
           Based at the North Carolina School of Science and Mathematics in Durham, NC
        </Statistic>
        <Statistic className="bg-[#FFA9B5] md:mr-auto">
          15 members from across NC
        </Statistic>

      </section>

    </Wrapper>
  );
}

interface StatisticProps {
  className: string;
  children: React.ReactNode;
}

function Statistic({ className, children }: StatisticProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        bounce: 0.5,
        duration: 1,
      }}
      viewport={{ once: true }}
      className={`z-20 md:z-0 p-10 rounded-lg md:w-1/3 text-3xl font-bold ${className}`}
    >
      {children}
    </motion.div>
  );
}

