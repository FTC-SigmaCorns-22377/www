import Image from "next/image";
import Link from "next/link";
import sigmablank from "../public/branding/sigmablank.png";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between py-2 px-7">
      <Image src={sigmablank} alt="Sigma" width={60} />
      <div className="hidden md:flex flex-row gap-10 text-sm ">
        <Navlink text="Team" href="#test" />
        <Navlink text="Outreach" href="/outreach" />
        <Navlink text="Software" href="/software" />
        <Navlink text="Hardware" href="/hardware" />
        <Navlink text="Contact Us" href="/contact" />
      </div>
    </nav>
  );
}

interface NavlinkProps {
  text: string;
  href: string;
}

function Navlink({ text, href }: NavlinkProps) {
  return (
    <Link href={href} className="my-auto">
      {text}
    </Link>
  );
}
