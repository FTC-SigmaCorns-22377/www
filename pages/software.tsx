import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import sigmablank from "../public/branding/sigmablank.png";
import { slidedown, slideright, stagger } from "../utils/motionPresets";

export default function Software() {
  // TODO: animate
  return (
    <Wrapper>
      <Title text="Software" />
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 mt-10 p-10 gap-10">
        <motion.section className="text-2xl" {...slidedown}>
          Our software team works together to code a fully functioning robot. 
          Our goal is to design code that is adabtable to various situation that 
          may be faced on the field. 
          
        </motion.section>
        <motion.section>
          <motion.h2 {...slidedown} className="text-center text-3xl">
            Our repos:
          </motion.h2>
          <Repo url="https://github.com/FTC-SigmaCorns-22377/road-runner-quickstart" />
          <Repo url="https://github.com/FTC-SigmaCorns-22377/www" />
        </motion.section>
      </div>
    </Wrapper>
  );
}

interface RepoProps {
  // TODO: github regex on string
  url: string;
}

function Repo({ url }: RepoProps) {
  const urlSections = url.split("/").filter((value) => value != "");
  const author = urlSections[2];
  const repo = urlSections[3];
  console.log(urlSections);
  return (
    <motion.div {...slideright}>
      <Link href={url}>
        <div className="p-5 bg-base border-accent border-dashed border-2 rounded-2xl mt-5 text-2xl">
          {author === "FTC-SigmaCorns-22377" && (
            <Image
              src={sigmablank}
              height={50}
              alt=""
              className="inline-block bg-black p-1 rounded-md mr-3"
            />
          )}
          <span className="underline">
            @{author}/{repo}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
