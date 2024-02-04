import Title from "../components/Title";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { slideup, stagger } from "../utils/motionPresets";
import Wrapper from "../components/Wrapper";

import bencaunt from "../public/media/team/bencaunt.png";
// import ayushpaul from "../public/media/2324team/ayush.jpg";
// import achyuta from "../public/media/2324team/achyuta.jpg";
// import anirudh from "../public/media/2324team/ani.jpg";
// import caroleen from "../public/media/2324team/caroleen.jpg";
// import isabel from "../public/media/2324team/isabel.jpg";
// import joseph from "../public/media/2324team/joseph.jpg";
// import june from "../public/media/2324team/june.jpg";
// import lola from "../public/media/2324team/lola.jpg";
// import may from "../public/media/2324team/may.jpg";
// import nikhil from "../public/media/2324team/nikhil.jpg";
// import suth from "../public/media/2324team/sutharsika.jpg";
// import taylor from "../public/media/2324team/taylor.jpg";

export default function Team() {
  const mechanical: RoleProps = {
    role: "Mechanical",
    color: "bg-purple-400",
  };

  const programming: RoleProps = {
    role: "Programming",
    color: "bg-green-500",
  };

  const nontechnical: RoleProps = {
    role: "Non-technical",
    color: "bg-pink-400",
  };


  // TODO: get someone to add team members

  const members: TeamMemberProps[] = [
    // {
    //   name: "Ben Caunt",
    //   blurb:
    //     "Hey everyone! I am ben the world’s dean list person so i am very cool and very good at programming or something!",
    //   image: bencaunt,
    //   roles: [captain, software, hardware, ctrlalt],
    // },
    {
      name: "Achyuta",
      blurb: "",
      image: "",
      roles: [mechanical],
    },
    {
      name: "Ayush",
      blurb: "",
      image: "",
      roles: [programming],
    },
    {
      name: "Joseph",
      blurb: "",
      image: "",
      roles: [mechanical],
    },
    {
      name: "May",
      blurb: "",
      image: "",
      roles: [programming],
    },
    {
      name: "Sutharsika",
      blurb: "",
      image: "",
      roles: [nontechnical],
    },
    {
      name: "Anirudh",
      blurb: "",
      image: "",
      roles: [mechanical],
    },
    {
      name: "Caroleen", 
      blurb: "",
      image: "",
      roles: [nontechnical],
    },
    {
      name: "Isabel",
      blurb: "",
      image: "",
      roles: [mechanical],
    },
    {
      name: "June",
      blurb: "",
      image: "",
      roles: [mechanical],
    },
    {
      name: "Lola",
      blurb: "",
      image: "",
      roles: [nontechnical],
    },
    {
      name: "Nikhil",
      blurb: "",
      image: "",
      roles: [mechanical],
    },
    {
      name: "Taylor",
      blurb: "",
      image: "",
      roles: [programming],
    },
    {
      name: "Jason",
      blurb: "",
      image: "",
      roles: [programming],
    },
    {
      name: "Jane",
      blurb: "",
      image: "",
      roles: [nontechnical],
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
          <div className="text-center pt-3 flex flex-row flex-wrap justify-center">
            {roles.map((role) => Role(role))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
