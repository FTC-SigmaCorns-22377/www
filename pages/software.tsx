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
          Our software team develops the software that controls the robot. The
          software controls every aspect of the robot, ranging from the very low
          level, at which state estimation algorithms are implemented so that
          our robot knows its state, and control systems are synthesized to
          accurately track references to achieve desired behavior. At a higher
          level, the software plans out the robots motion and mechanism use
          during autonomous, and processes the driver input during teleop to
          actuate the robot’s mechanisms in the desired manner.
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
