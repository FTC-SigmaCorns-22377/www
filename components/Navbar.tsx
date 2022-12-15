import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import sigmablank from "../public/branding/sigmablank.png";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCross, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { stagger } from "../utils/motionPresets";

interface linkList {
  text: string;
  href: string;
}

export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links: linkList[] = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Team",
      href: "/team",
    },
    {
      text: "Outreach",
      href: "/outreach",
    },
    {
      text: "Software",
      href: "/software",
    },
    {
      text: "Hardware",
      href: "/hardware",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav className="flex flex-row justify-between py-2 px-7">
      <Link href="/">
        <Image src={sigmablank} alt="Sigma" width={60} />
      </Link>
      <div className="hidden md:flex flex-row gap-10 text-sm">
        {links.map((link) => (
          <Navlink {...link} router={router} key={link.href} />
        ))}
      </div>

      <FontAwesomeIcon
        icon={faBars}
        size="2x"
        className="block md:hidden my-auto"
        onClick={() => setMobileMenuOpen(true)}
      />
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="absolute bg-base top-0 right-0 w-4/5 h-full z-50 flex flex-col gap-5 p-5"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { x: 0, transition: { staggerChildren: 0.3 } },
              closed: { x: "100%" },
            }}
          >
            <div className="flex justify-between">
              <h3 className="text-3xl">Navigation</h3>
              <FontAwesomeIcon
                icon={faXmark}
                size="2x"
                className="my-auto"
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>

            {links.map((link) => (
              <MobileNavlink {...link} router={router} key={link.href} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

interface NavlinkProps extends linkList {
  router: NextRouter;
}

function Navlink({ text, href, router }: NavlinkProps) {
  const isSelected = router.asPath === href;
  return (
    <div className="my-auto relative">
      <Link href={href} className="my-auto hover:text-gray-300 transition-all">
        {text}
      </Link>
      {isSelected && (
        <motion.div
          className="absolute -bottom-1 left-0 w-full h-1 bg-accent rounded-full"
          layoutId="navbarUnderline"
        />
      )}
    </div>
  );
}

function MobileNavlink({ text, href, router }: NavlinkProps) {
  const isSelected = router.asPath === href;
  return (
    <Link href={href} className="">
      <motion.div
        className={
          "py-3 px-5 rounded-2xl hover:bg-gray-700 transition-all " +
          (isSelected ? "bg-gray-700" : "bg-base2")
        }
        variants={{
          closed: { opacity: 0, x: 20 },
          open: { opacity: 1, x: 0 },
        }}
      >
        {text}
      </motion.div>
    </Link>
  );
}
