import { HTMLMotionProps } from "framer-motion";

export const slidedown: HTMLMotionProps<"div"> = {
  variants: {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  },
};

export const slideup: HTMLMotionProps<"div"> = {
  variants: {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3, bounce: 0 } },
  },
  exit: { y: 20, opacity: 0, transition: { duration: 0.3 } },
};

export const slideright: HTMLMotionProps<"div"> = {
  variants: {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  },
};

export const stagger: HTMLMotionProps<"div"> = {
  initial: "hidden",
  animate: "visible",
  exit: { opacity: 0 },
  variants: {
    visible: { transition: { staggerChildren: 0.3 } },
  },
};

export const quickStagger: HTMLMotionProps<"div"> = {
  initial: "hidden",
  animate: "visible",
  exit: "hidden",
  variants: {
    visible: { transition: { staggerChildren: 0.2 } },
  },
};
