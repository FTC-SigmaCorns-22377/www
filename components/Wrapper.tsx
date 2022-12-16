import { motion } from "framer-motion";
import { stagger } from "../utils/motionPresets";

interface WrapperProps {
  className?: string;
  children: React.ReactNode;
}

export default function Wrapper({ className, children }: WrapperProps) {
  return (
    <motion.div className={"relative " + className} {...stagger}>
      {children}
    </motion.div>
  );
}
