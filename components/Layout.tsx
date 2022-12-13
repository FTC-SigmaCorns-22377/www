import { Figtree } from "@next/font/google";
import { motion, useIsPresent } from "framer-motion";
import Navbar from "./Navbar";

const figtree = Figtree({
  subsets: ["latin"],
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isPresent = useIsPresent();
  return (
    <>
      <div className="min-h-screen bg-black text-white relative">
        <Navbar />
        <main className={figtree.className}>{children}</main>
      </div>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 0.5, ease: "circOut" },
        }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 left-0 h-screen w-full bg-accent z-30"
      />
    </>
  );
}
