import { Figtree } from "@next/font/google";
import Navbar from "./Navbar";

const figtree = Figtree({
  subsets: ["latin"],
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="min-h-screen bg-black text-white relative">
        <Navbar />
        <main className={figtree.className}>{children}</main>
      </div>
    </>
  );
}
