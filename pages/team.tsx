import Title from "../components/Title";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { slideup, stagger } from "../utils/motionPresets";

export default function Team() {
  const captain: RoleProps = {
    role: "Captain",
    color: "bg-red-500",
  };

  const software: RoleProps = {
    role: "Software",
    color: "bg-purple-400",
  };

  const hardware: RoleProps = {
    role: "Hardware",
    color: "bg-green-500",
  };

  const ctrlalt: RoleProps = {
    role: "⌘ Alt FTC",
    color: "bg-pink-400",
  };

  const ben = {
    name: "Ben Caunt",
    blurb:
      "Hey everyone! I am ben the world’s dean list person so i am very cool and very good at programming or something!",
    image: require("../public/media/team/benny.png"),
    roles: [captain, software, hardware, ctrlalt],
  };

  const members: TeamMemberProps[] = [ben, ben, ben, ben];

  return (
    <motion.div exit={{ opacity: 0 }}>
      <Title text="Meet the Team" />
      <motion.div
        {...stagger}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-10"
      >
        {members.map((member) => TeamMember(member))}
      </motion.div>
    </motion.div>
  );
}

interface RoleProps {
  color: string;
  role: string;
}

function Role({ color, role }: RoleProps) {
  return (
    <span
      className={`px-3 py-1 rounded-lg mr-2 mb-2 whitespace-nowrap ${color}`}
    >
      {role}
    </span>
  );
}

interface TeamMemberProps {
  image: string | StaticImageData;
  name: string;
  blurb: string;
  roles: RoleProps[];
}

function TeamMember({ image, name, blurb, roles }: TeamMemberProps) {
  return (
    <motion.div {...slideup}>
      <div className="bg-base rounded-3xl  text-center mt-24 relative hover:scale-105 transition-all shadow-lg">
        <div className="-translate-y-1/2 absolute flex justify-center w-full">
          <div className="rounded-full w-40 h-40 m-auto relative hover:scale-105 transition-all shadow-xl">
            <Image src={image} alt={name} fill className="rounded-full" />
          </div>
        </div>
        <div className="p-5">
          <h2 className="text-3xl pt-20">
            @{name.toLowerCase().replace(" ", "")}
          </h2>
          <p className="text-xl my-3">{blurb}</p>
          <div className="text-left pt-3 flex flex-row flex-wrap">
            {roles.map((role) => Role(role))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
