import { motion } from "framer-motion";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import { slidedown } from "../utils/motionPresets";

export default function Hardware() {
  return (
    <Wrapper>
      <Title text="Hardware" />
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 mt-10 p-10 gap-10">
        <motion.section className="text-2xl" {...slidedown}>
        Our job is to make a robust and consistent robot that has the
          capabilities to win matches. To design such a
          robot, we need an efficient design process. This starts with
          prototyping and brainstorming ideas, as well as taking inspiration
          from robots of previous seasons and the current ones. To implement
          these ideas we use CAD, which allows us to quickly iterate
          sophisticated mechanisms using COTS, 3D printed, and laser-cut parts.
          Finally, we physically assemble the parts and wire the robot
          effectively.
        </motion.section>
        <motion.section>
          <motion.h2 {...slidedown} className="text-center text-3xl">
            Our CAD:
          </motion.h2>
          <motion.div {...slidedown} className="text-center">
            Coming soon!
          </motion.div>
        </motion.section>
      </div>
    </Wrapper>
  );
}
