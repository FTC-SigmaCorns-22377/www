import {
  faArrowUpRightFromSquare,
  faExternalLink,
  faExternalLinkSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface CoolLinkProps {
  text: string;
  href: string;
}

export default function CoolLink({ text, href }: CoolLinkProps) {
  return (
    <Link
      href={href}
      className="text-blue-500 font-bold hover:py-1 hover:px-3 hover:bg-blue-500 hover:text-white rounded-lg transition-all break-words"
      /*className="text-[#949CE0] font-bold hover:py-1 hover:px-3 hover:bg-[#949CE0] hover:text-white rounded-lg transition-all whitespace-nowrap"*/
    >
      {text} <FontAwesomeIcon icon={faExternalLink} />
    </Link>
  );
}