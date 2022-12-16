import { motion } from "framer-motion";
import { slidedown } from "../utils/motionPresets";

interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return (
    <motion.h1 {...slidedown} className="mt-20 text-center text-6xl">
      {text}
    </motion.h1>
  );
}
