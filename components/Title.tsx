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
          transition: { duration: 1 },
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="mt-20 text-center text-6xl"
    >
      {text}
    </motion.h1>
  );
}
