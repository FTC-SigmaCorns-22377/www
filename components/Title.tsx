import { motion } from "framer-motion";

interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return (
    <motion.h1
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      exit={{
        y: -20,
        opacity: 0,
      }}
      initial="hidden"
      animate="visible"
      className="mt-20 text-center text-6xl"
    >
      {text}
    </motion.h1>
  );
}
