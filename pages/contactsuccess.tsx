import { motion } from "framer-motion";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import { slideup } from "../utils/motionPresets";

export default function ContactSuccess() {
  return (
    <Wrapper>
      <Title text="Contact Us" />
      {/* TODO: add contact form */}

      <motion.div
        className="bg-base container mx-auto p-10 mt-10 rounded-lg"
        {...slideup}
      >
        <h1 className="text-2xl font-bold text-center">
          Thank you for your message!
        </h1>
        <p className="text-center">
          We will get back to you as soon as possible.
        </p>
      </motion.div>
    </Wrapper>
  );
}
