import { motion } from "framer-motion";
import { HTMLInputTypeAttribute } from "react";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import { slideup } from "../utils/motionPresets";

export default function Contact() {
  return (
    <Wrapper>
      <Title text="Contact Us" />
      <motion.div
        className="bg-base container mx-auto p-10 mt-10 rounded-lg"
        {...slideup}
      >
        <form action="/api/contact" method="POST">
          <FormField
            id="name"
            type="text"
            label="Name"
            placeholder="Peter Griffin"
          />
          <FormField
            id="discordID"
            type="text"
            label="Discord ID"
            placeholder="peter#0001"
          />
          <FormField
            id="email"
            type="email"
            label="Email"
            placeholder="peter@griffin.com"
          />
          <FormField
            id="message"
            type="text"
            label="Message"
            placeholder="Hey everyone! It's me, Peter Griffin, from the hit TV show Family Guy!"
          />
          <button
            type="submit"
            className="bg-accent rounded-md p-2 w-full mt-5 text-black font-bold"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </Wrapper>
  );
}

interface FormFieldProps {
  id: string;
  type: HTMLInputTypeAttribute;
  label: string;
  placeholder?: string;
}

function FormField({ id, type, label, placeholder }: FormFieldProps) {
  return (
    <label className="block mb-3">
      <span className="text-gray-300">{label}</span>
      <input
        type={type}
        name={id}
        id={id}
        className="mt-1 block w-full rounded-md bg-base2 border-transparent focus:border-gray-500 focus:bg-base3 focus:ring-0"
        placeholder={placeholder}
      />
    </label>
  );
}
