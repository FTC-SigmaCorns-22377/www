import {
  faBasketball,
  faCircleExclamation,
  faExternalLink,
  faLink,
  faQrcode,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import sigmacorntext from "../public/branding/sigmacorntext.png";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// inspired by flowbite

export default function Footer() {
  return (
    <footer className="p-4 sm:p-6 bg-base ">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link href="/" className="flex items-center">
            <Image src={sigmacorntext} alt="Sigmacorns" height={50} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          {/* TODO: add resources */}
          <LinkRow title="Resources">
            <LinkItem
              href="/https://www.firstinspires.org/robotics/ftc"
              text="First Tech Challenge"
            />
            <LinkItem href="https://example.com" text="Coming Soon" />
          </LinkRow>
          <LinkRow title="Resources">
            <LinkItem href="https://example.com" text="Coming Soon" />
            <LinkItem href="https://example.com" text="Coming Soon" />
          </LinkRow>
          <LinkRow title="Resources">
            <LinkItem href="https://example.com" text="Coming Soon" />
            <LinkItem href="https://example.com" text="Coming Soon" />
          </LinkRow>
        </div>
      </div>
      <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm  sm:text-center text-gray-400">
          © 2022{" "}
          <Link href="/" className="hover:underline">
            SigmaCorns™
          </Link>
          . All Rights Reserved.
        </span>
        {/* TODO: add socials */}
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <SocialIcon icon={faExternalLink} href="#" alt="Coming Soon" />
          <SocialIcon icon={faExternalLink} href="#" alt="Coming Soon" />
          <SocialIcon icon={faExternalLink} href="#" alt="Coming Soon" />
          <SocialIcon icon={faExternalLink} href="#" alt="Coming Soon" />
        </div>
      </div>
    </footer>
  );
}

interface LinkRowProps {
  title: string;
  children: React.ReactNode;
}

function LinkRow({ title, children }: LinkRowProps) {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold uppercase">{title}</h2>
      <ul className="text-gray-400">{children}</ul>
    </div>
  );
}

interface LinkItemProps {
  href: string;
  text: string;
}

function LinkItem({ href, text }: LinkItemProps) {
  return (
    <li className="mb-4">
      <a href={href} className="hover:underline">
        {text}
      </a>
    </li>
  );
}

interface SocialIconProps {
  icon: IconProp;
  href: string;
  alt: string;
}

function SocialIcon({ icon, href, alt }: SocialIconProps) {
  return (
    <a href={href} className="text-gray-500 hover:text-white">
      <FontAwesomeIcon icon={icon} />
      <span className="sr-only">{alt}</span>
    </a>
  );
}
