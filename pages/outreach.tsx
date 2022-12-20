import { motion } from "framer-motion";
import CoolLink from "../components/CoolLink";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import { quickStagger, stagger } from "../utils/motionPresets";

export default function Outreach() {
  return (
    <Wrapper>
      <Title text="Outreach" />
      <div className="grid md:grid-cols-4 gap-5 md:gap-10 m-10">
        <OutreachStat className="col-span-2 row-span-2 from-green-400 to-blue-600 p-10">
          <h1 className="text-3xl md:text-5xl lg:text-8xl">50,000+</h1>
          <h2 className="text-2xl lg:text-4xl">
            individuals reached and inspired from around our state, country and
            the globe!
          </h2>
        </OutreachStat>
        {/* TODO: add actual content */}
        <OutreachStat className="from-pink-400 to-purple-600 text-xl p-5">
          <p>
            We maintain{" "}
            <CoolLink text="Ctrl Alt FTC" href="https://ctrlaltftc.org" />, the
            most renowned control theory guide for FTC teams, and beyond!
          </p>
        </OutreachStat>
        <OutreachStat className="from-yellow-400 to-orange-600"></OutreachStat>
        <OutreachStat className="from-blue-400 to-indigo-600"></OutreachStat>
        <OutreachStat className="from-green-400 to-blue-600"></OutreachStat>
      </div>
    </Wrapper>
  );
}

interface OutreachStatProps {
  children?: React.ReactNode;
  className?: string;
}

function OutreachStat({ children, className }: OutreachStatProps) {
  return (
    <motion.div
      className={
        "flex flex-col aspect-square w-full rounded-2xl bg-gradient-to-br " +
        className
      }
      whileHover={{ scale: 0.95 }}
      variants={{
        hidden: { scale: 0.5, opacity: 0, transition: { duration: 0.5 } },
        visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
      }}
    >
      {children}
    </motion.div>
  );
}
