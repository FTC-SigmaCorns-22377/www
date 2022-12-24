import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PrivacyScreen from "./PrivacyScreen";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isPresent = useIsPresent();
  return (
    <>
      <div className="min-h-screen bg-black text-white relative">
        <PrivacyScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
