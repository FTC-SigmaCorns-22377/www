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
import olive from "../public/media/abc/olive.png";

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
      blurb:
        "Achyuta is a senior at NCSSM, from Cary, NC. Prior to the SigmaCorns he was on team 16447 Mechanical Maniacs, and team 20434 Binding Energy. This is his 5th year in FTC, mainly working on the mechanical aspects of the robot. As the driver, he enjoys watching and making the robot move.",
      image: achyuta,
      roles: [mechanical],
    },
    {
      name: "Ayush",
      blurb:
        "Ayush is a senior at NCSSM, from Concord, North Carolina. He has been a part of FIRST for 4 years with experience in FTC and FRC. He loves full stack, AI, and control systems. He is excited to work with the team to create a robot that can compete at the highest level.",
      image: ayush,
      roles: [programming],
    },
    {
      name: "Joseph",
      blurb:
        "Joseph is a Senior at NCSSM from Cary, North Carolina. This is his 4th year in FIRST, which consisted entirely of FTC except for a 1 year stint in FRC. His favorite part of robotics is CAD, and his least favorite is wiring.",
      image: joseph,
      roles: [mechanical],
    },
    {
      name: "May",
      blurb:
        "May is a senior at the NCSSM, originally from Chapel Hill. She joined FTC last year and works on miscellaneous tasks on the programming team. In her free time, she likes to play basketball and read.",
      image: may,
      roles: [programming],
    },
    {
      name: "Sutharsika",
      blurb:
        "Sutharsika is a senior at NCSSM from Charlotte, North Carolina. Previously, she participated in FLL and FRC and is thrilled to continue pursuing robotics with FIRST. She looks forward to sharing STEM with the community and learning about FTC programming this year.",
      image: suth,
      roles: [nontechnical],
    },
    {
      name: "Jane",
      blurb:
        "Jane is a senior at NCSSM who is from Cary, North Carolina. This is her first year joining FTC. She participates in outreach by impacting the STEM community and the marketing team of Sigmacorns through her skills in Graphic Design.",
      image: jane,
      roles: [nontechnical],
    },
    {
      name: "Olive",
      blurb:
        "Olive is a senior from Wake Forest who is interested in software and control system applications in robotics. She got into robotics from FLL and has also experience with FRC. On the team, she helps with software and making custom parts for the robot in the FabLab.",
      image: olive,
      roles: [programming],
    },
    {
      name: "Anirudh",
      blurb:
        "Anirudh is from Greensboro, North Carolina. He’s very passionate about testing, designing, and using data to refine and create an amazing robot. This is his first year in the First community; however, he has engineering experience in rocketry and other club and competition-based ventures.",
      image: anirudh,
      roles: [mechanical],
    },
    {
      name: "Caroleen",
      blurb:
        "Caroleen is a Durham Technical Middle College High School junior from Durham, North Carolina. This is Caroleen’s 5th year on an FTC team. As the project manager, Caroleen keeps track of all the moving parts, ensuring everyone has what they need.",
      image: caroleen,
      roles: [nontechnical],
    },
    {
      name: "Isabel",
      blurb:
        "Isabel is a junior at NCSSM and has been a part of FIRST for 6 years. She did FLL for 4 years, then did FTC for 3 years. She is a member of the mechanical sub-group on team 22377 Sigma Corns. She looks forward to expanding her knowledge in all aspects of robotics.",
      image: isabel,
      roles: [mechanical],
    },
    {
      name: "June",
      blurb:
        "June is from Cary, North Carolina, and this is her first on SigmaCorns and 3rd year doing FTC. On the team, she works on designing, assembling, and testing mechanisms, and she’s looking forward to continuing to learn all she can. Off the team, she enjoys photography, reading, and hanging out with friends.",
      image: june,
      roles: [mechanical],
    },
    {
      name: "Lola",
      blurb:
        "Lola is a junior originally from Winston Salem, NC, but is currently studying at the NCSSM. This is Lola’s 3rd year participating on an FTC team. Lola loves the energy and passion for FIRST that all the members of the team share, and she can’t wait to see what progress SigmaCorns makes this year.",
      image: lola,
      roles: [nontechnical],
    },
    {
      name: "Nikhil",
      blurb:
        "Nikhil is a junior at NCSSM from Cary, North Carolina. He has participated in FIRST since 5th grade, participating every year since then, with 4 years of FTC experience. He loves to work with code and enjoys learning about and implementing control theory techniques.",
      image: nikhil,
      roles: [mechanical],
    },
    {
      name: "Taylor",
      blurb:
        "Taylor is a junior at NCSSM, where she focuses on computer science. She is originally from Western North Carolina and will be doing FTC for the first time this year. She is very excited to learn about FTC and how it can impact communities around the Durham area!",
      image: taylor,
      roles: [programming],
    },
    {
      name: "Jason",
      blurb:
        "Jason is a homeschooled eighth grader from Durham. This is his first year participating in FIRST, and he is excited to apply his math background to robotics. In his free time, he enjoys composing music, writing purple prose, and crafting original problems for his math contests.",
      image: jason,
      roles: [programming],
    },
  ];

  return (
    <Wrapper>
      <Title text="Mission Statement" />
      <div className="text-center flex flex-col md:gap-2">
        <motion.section
          {...slideup}
          className="text-2xl md:text-xl"
          style={{ margin: "60px" }}
        >
          “As a team of students from across North Carolina, we come together to
          construct a competitive robot, fostering teamwork and drawing
          inspiration from industry professionals. By integrating their
          invaluable expertise, we cultivate essential skills that mold our team
          members into prospective STEM professionals. In partnership with our
          community, we embark on a journey of innovation and dedication,
          aspiring to ignite the passions of the next generation of STEM
          leaders, fostering a brighter future for all.”
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
