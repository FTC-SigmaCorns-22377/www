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
        At SigmaCorns we are invested in creating advanced software solutions to each FTC game. 
        We implement control theory into our software to optimize robot movement and utilize virtual simulation
        and testing to improve developer experience. Along with focusing on improving the performance of our robot, 
        we are also dedicated to sharing our findings with our community. We have given workshops and classes to teach 
        programming both within and outside of FTC, and have released guides and open source code for other teams to learn from and use. 
        Expect to see more software resources released throughout the season!
          
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
