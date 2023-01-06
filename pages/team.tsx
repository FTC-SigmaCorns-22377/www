import Title from "../components/Title";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { slideup, stagger } from "../utils/motionPresets";
import Wrapper from "../components/Wrapper";

import bencaunt from "../public/media/team/bencaunt.png";
import ayushpaul from "../public/media/team/ayushpaul.jpg";
import matthewlee from "../public/media/team/matthewlee.png";
import sheerabdhiniranjan from "../public/media/team/sheerabdhiniranjan.png";
import shivagoli from "../public/media/team/shivagoli.png";
import josephwan from "../public/media/team/josephwan.png";
import worthbyers from "../public/media/team/worthbyers.png";
import ivanzheng from "../public/media/team/ivanzheng.png";

export default function Team() {
  const captain: RoleProps = {
    role: "Captain",
    color: "bg-red-500",
  };

  const software: RoleProps = {
    role: "Software",
    color: "bg-purple-400",
  };

  const mechanical_building: RoleProps = {
    role: "Mechanical: Building",
    color: "bg-green-500",
  };

  const mechanical_CAD: RoleProps = {
    role: "Mechanical: CAD",
    color: "bg-green-400",
  };

  const ctrlalt: RoleProps = {
    role: "⌘ Alt FTC",
    color: "bg-pink-400",
  };

  const outreach: RoleProps = {
    role: "Outreach",
    color: "bg-yellow-400",
  };

  const webmaster: RoleProps = {
    role: "Webmaster",
    color: "bg-blue-400",
  };

  // TODO: get someone to add team members

  const members: TeamMemberProps[] = [
    {
      name: "Ben Caunt",
      blurb: "I kinda know how to build a robot",
      image: bencaunt,
      roles: [
        captain,
        software,
        ctrlalt,
        outreach,
        mechanical_building,
        mechanical_CAD,
      ],
    },
    {
      name: "Ayush Paul",
      blurb:
        "This is my 3rd year doing FTC and I am excited to be a part of the team!",
      image: ayushpaul,
      roles: [software, mechanical_CAD, outreach, ctrlalt, webmaster],
    },
    {
      name: "Matthew Lee",
      blurb:
        "I am new to FIRST and am looking forward to learning more about robotics and helping out with the software side of things using the programming knowledge that I have now.",
      image: matthewlee,
      roles: [software],
    },
    {
      name: "Sheerabdhi Niranjan",
      blurb:
        "I am Sheerabdhi Niranjan, and this is my second year doing FTC! Although my role on this team is primarily a programmer, I have expanded to learn about new aspects of the robotics process, such as CAD, mechanics, and design, and have found this journey to be very intriguing and rewarding.",
      image: sheerabdhiniranjan,
      roles: [software, outreach, mechanical_building],
    },
    {
      name: "Shiva Goli",
      blurb:
        "I am Shiva, a junior at NCSSM who programs and helps with building.",
      image: shivagoli,
      roles: [software, mechanical_building],
    },
    {
      name: "Joseph Wan",
      blurb: "I make robots and watch sports.",
      image: josephwan,
      roles: [captain, outreach, mechanical_building, mechanical_CAD],
    },
    {
      name: "Worth Byers",
      blurb: "I drink Dr. Pepper and code.",
      image: worthbyers,
      roles: [software, mechanical_building],
    },
    {
      name: "Ivan Zheng",
      blurb: "Hi. I am Ivan. I like building and designing stuff. ",
      image: ivanzheng,
      roles: [mechanical_building, mechanical_CAD],
    },
  ];

  return (
    <Wrapper>
      <Title text="Meet the Team" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-10">
        {members.map((member) => TeamMember(member))}
      </div>
    </Wrapper>
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
          <div className="rounded-full w-40 h-40 m-auto relative hover:scale-105 transition-all shadow-xl overflow-hidden">
            <Image
              src={image}
              alt={name}
              object-fit="cover"
              sizes="100vw"
              className="rounded-full aspect-auto"
            />
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
