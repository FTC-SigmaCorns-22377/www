import Title from "../components/Title";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { slideup, stagger } from "../utils/motionPresets";
import Wrapper from "../components/Wrapper";

import bencaunt from "../public/media/team/bencaunt.png";
import ayush from "../public/media/abc/ayush.png";
import achyuta from "../public/media/abc/achyuta.png";
import anirudh from "../public/media/abc/ani.png";
import caroleen from "../public/media/abc/caroleen.png";
import isabel from "../public/media/abc/isabel.png";
import joseph from "../public/media/abc/joseph.png";
import june from "../public/media/abc/june.png";
import lola from "../public/media/abc/lola.png";
import may from "../public/media/abc/may.png";
import nikhil from "../public/media/abc/nikhil.png";
import suth from "../public/media/abc/suth.png";
import taylor from "../public/media/abc/taylor.png";
import jane from "../public/media/abc/jane.png";
import jason from "../public/media/abc/jason.png";

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
      blurb: "Achyuta is a senior at NCSSM, from Cary, NC. Prior to the SigmaCorns he was on team 16447 Mechanical Maniacs, and team 20434 Binding Energy. This is his 5th year in FTC, mainly working on the mechanical aspects of the robot. As the driver, he enjoys watching and making the robot move.",
      image: achyuta,
      roles: [mechanical],
    },
    {
      name: "Ayush",
      blurb: "",
      image: ayush,
      roles: [programming],
    },
    {
      name: "Joseph",
      blurb: "Joseph is a Senior at NCSSM from Cary, North Carolina. This is his 4th year in FIRST, which consisted entirely of FTC except for a 1 year stint in FRC. His favorite part of robotics is CAD, and his least favorite part is wiring.",
      image: joseph,
      roles: [mechanical],
    },
    {
      name: "May",
      blurb: "",
      image: may,
      roles: [programming],
    },
    {
      name: "Sutharsika",
      blurb: "Sutharsika is a senior at NCSSM from Charlotte, North Carolina. Previously she participated in FLL and FRC and is thrilled to continue pursuing robotics with FIRST. This year she looks forward to sharing STEM with the community and learning about FTC programming.",
      image: suth,
      roles: [nontechnical],
    },
    {
      name: "Olive",
      blurb: "",
      image: "",
      roles: [programming],
    },
    {
      name: "Jane",
      blurb: "Jane is a senior at North Carolina School of Science and Mathematics who is from Cary, North Carolina. This is her first year joining FTC. She is excited to participate in the outreach by making impact to STEM community and marketing team of Sigmacorns.",
      image: jane,
      roles: [nontechnical],
    },
    {
      name: "Anirudh",
      blurb: "",
      image: anirudh,
      roles: [mechanical],
    },
    {
      name: "Caroleen", 
      blurb: "",
      image: caroleen,
      roles: [nontechnical],
    },
    {
      name: "Isabel",
      blurb: "",
      image: isabel,
      roles: [mechanical],
    },
    {
      name: "June",
      blurb: "June is from Cary, North Carolina, and this is her first on SigmaCorns and 3rd year doing FTC. On the team she works on designing, assembling, and testing mechanisms, and she's looking forward to continuing to learn all she can. Off the team she enjoys photography, reading, and hanging out with friends. ",
      image: june,
      roles: [mechanical],
    },
    {
      name: "Lola",
      blurb: "Lola is a junior originally from Winston Salem, NC but currently studying at the NCSSM. This is Lola’s 3rd year participating on an FTC team. She focuses on designing the portfolio, making presentations, and coordinating community outreach. Lola has loved the energy and passion for FIRST that all the members of the team share and she can’t wait to see what progress SigmaCorns makes this year. ",
      image: lola,
      roles: [nontechnical],
    },
    {
      name: "Nikhil",
      blurb: "",
      image: nikhil,
      roles: [mechanical],
    },
    {
      name: "Taylor",
      blurb: "Taylor is a Junior at NCSSM where she focuses on computer science. She is originally from Western North Carolina and will be doing FTC for the first time this year. She is very excited to learn all about FTC and what it can do to impact communities around the Durham area!",
      image: taylor,
      roles: [programming],
    },
    {
      name: "Jason",
      blurb: "Jason is a homeschooled eighth grader from Durham. This is his first year participating in FIRST, and he is excited to apply his math background to robotics. In his free time, he enjoys composing music, writing purple prose, and crafting original problems for his math contests.",
      image: jason,
      roles: [programming],
    },
    
  ];

  return (
    <Wrapper>
      <Title text="Mission Statement" />
        <div className="text-center flex flex-col md:gap-2">
          <motion.section {...slideup} className="text-2xl md:text-xl" style={{ margin: '60px' }}>
            “As a team of students from across North Carolina, we come 
            together to construct a competitive robot, fostering teamwork 
            and drawing inspiration from industry professionals. 
            By integrating their invaluable expertise, 
            we cultivate essential skills that mold our team members 
            into prospective STEM professionals. 
            In partnership with our community, 
            we embark on a journey of innovation and dedication, 
            aspiring to ignite the passions of the next generation of STEM leaders, 
            fostering a brighter future for all.”
          </motion.section>
        </div>


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
              className="aspect-auto scale-200"
            />
          </div>
        </div>
        <div className="p-5">
          <h2 className="text-3xl pt-20">
            @{name.toLowerCase().replace(" ", "")}
          </h2>
          <p className="text-l my-3">{blurb}</p>
          <div className="text-center pt-3 flex flex-row flex-wrap justify-center">
            {roles.map((role) => Role(role))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
