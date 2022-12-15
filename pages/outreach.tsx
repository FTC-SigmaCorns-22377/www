import { motion } from "framer-motion";
import Title from "../components/Title";
import { stagger } from "../utils/motionPresets";

export default function Outreach() {
  return (
    <motion.div className="relative" {...stagger} exit={{ opacity: 0 }}>
      <Title text="Outreach" />
      <div className="grid md:grid-cols-4 gap-5 md:gap-10 m-10">
        <OutreachStat className="col-span-2 row-span-2 from-green-400 to-blue-600">
          <h1 className="text-3xl md:text-5xl lg:text-8xl">50,000+</h1>
          <h2 className="text-2xl lg:text-4xl">
            pageviews and counting at Ctrl Alt FTC, the most renowned control
            theory guide for FTC teams, and beyond!
          </h2>
        </OutreachStat>
        <OutreachStat className="from-pink-400 to-purple-600"></OutreachStat>
        <OutreachStat className="from-yellow-400 to-orange-600"></OutreachStat>
        <OutreachStat className="from-blue-400 to-indigo-600"></OutreachStat>
        <OutreachStat className="from-green-400 to-blue-600"></OutreachStat>
      </div>
    </motion.div>
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
        "flex flex-col p-10 aspect-square w-full rounded-2xl bg-gradient-to-br " +
        className
      }
      whileHover={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}