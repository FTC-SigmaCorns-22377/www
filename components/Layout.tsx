import { Figtree } from "@next/font/google";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import Footer from "./Footer";
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
        <Footer />
      </div>
    </>
  );
}
