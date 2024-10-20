import Title from "../components/Title";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { slideup, stagger } from "../utils/motionPresets";
import Wrapper from "../components/Wrapper";

// import bencaunt from "../public/media/team/bencaunt.png";
//import ayush from "../public/media/abc/ayush.png";
//import achyuta from "../public/media/abc/achyuta.png";
//import anirudh from "../public/media/abc/ani.png";
//import caroleen from "../public/media/abc/caroleen.png";
// import isabel from "../public/media/abc/isabel.png";
//import joseph from "../public/media/abc/joseph.png";
// import june from "../public/media/abc/june.png";
// import lola from "../public/media/abc/lola.png";

//import may from "../public/media/abc/may.png";
//import nikhil from "../public/media/abc/nikhil.png";
//import suth from "../public/media/abc/suth.png";
// import taylor from "../public/media/abc/taylor.png";
//import jane from "../public/media/abc/jane.png";
// import jason from "../public/media/abc/jason.png";
//import olive from "../public/media/abc/olive.png";
//import sigma from "../public/media/abc/sigma.png"
import taylor1 from "../public/media/abc/taylor1.jpg"
import jason1 from "../public/media/abc/jason1.jpg"
import lola1 from "../public/media/abc/lola1.jpg"
import isabel1 from "../public/media/abc/isabel1.jpg"
import michael from "../public/media/abc/micheal.jpg"
import ophir from "../public/media/abc/ophir.jpg"
import lillian from "../public/media/abc/lillian.jpg"
import thomas from "../public/media/abc/thomas.jpg"
import carter from "../public/media/abc/carter.jpg"
import june1 from "../public/media/abc/june1.jpg"
import nate from "../public/media/abc/nate.jpg"
import aaditya from "../public/media/abc/aaditya.jpg"
import jishnu from "../public/media/abc/jishnu.jpg"
import tanuj from "../public/media/abc/tanuj.jpg"
import ian from "../public/media/abc/ian.jpg"


export default function Team() {
  const mechanical: RoleProps = {
    role: "Mechanical",
    color: "bg-purple-400 text-black",
  };

  const programming: RoleProps = {
    role: "Programming",
    color: "bg-yellow-100 text-black",
  };

  const nontechnical: RoleProps = {
    role: "Non-technical",
    color: "bg-pink-300 text-black",
  };
  const captain: RoleProps = {
    role: "Captain",
    color: "bg-blue-400 text-black",
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
    // {
    //   name: "Achyuta",
    //   blurb:
    //     "Achyuta is a senior at NCSSM, from Cary, NC. Prior to the SigmaCorns he was on team 16447 Mechanical Maniacs, and team 20434 Binding Energy. This is his 5th year in FTC, mainly working on the mechanical aspects of the robot. As the driver, he enjoys watching and making the robot move.",
    //   image: achyuta,
    //   roles: [mechanical],
    // },
    // {
    //   name: "Ayush",
    //   blurb:
    //     "Ayush is a senior at NCSSM, from Concord, North Carolina. He has been a part of FIRST for 4 years with experience in FTC and FRC. He loves full stack, AI, and control systems. He is excited to work with the team to create a robot that can compete at the highest level.",
    //   image: ayush,
    //   roles: [programming],
    // },
    // {
    //   name: "Joseph",
    //   blurb:
    //     "Joseph is a Senior at NCSSM from Cary, North Carolina. This is his 4th year in FIRST, which consisted entirely of FTC except for a 1 year stint in FRC. His favorite part of robotics is CAD, and his least favorite part is wiring.",
    //   image: joseph,
    //   roles: [mechanical],
    // },
    // {
    //   name: "May",
    //   blurb:
    //     "May is a senior at the School of Science and Math, originally from Chapel Hill. She joined FTC last year and spends her time working on miscellaneous tasks on the programming team. In her free time, she likes to play basketball and read. ",
    //   image: may,
    //   roles: [programming],
    // },
    // {
    //   name: "Sutharsika",
    //   blurb:
    //     "Sutharsika is a senior at NCSSM from Charlotte, North Carolina. Previously she participated in FLL and FRC and is thrilled to continue pursuing robotics with FIRST. This year she looks forward to sharing STEM with the community and learning about FTC programming.",
    //   image: suth,
    //   roles: [nontechnical],
    // },
    // {
    //   name: "Jane",
    //   blurb:
    //     "Jane is a senior at NCSSM who is from Cary, North Carolina. This is her first year joining FTC. She participates in outreach by making impact to STEM community and in the marketing team of Sigmacorns through her skills for Graphic Design.",
    //   image: jane,
    //   roles: [nontechnical],
    // },
    // {
    //   name: "Olive",
    //   blurb:
    //     "Olive is a senior from Wake Forest who is interested in software and controls applications in robotics. She got into robotics from FLL and has also experience with FRC. On the team, she helps out with software as well as making custom parts for the robot in the FabLab.",
    //   image: olive,
    //   roles: [programming],
    // },
    // {
    //   name: "Anirudh",
    //   blurb:
    //     "Anirudh is from Greensboro North Carolina. He’s very passionate about testing, design, and use of data to refine and create an amazing robot. This is his first year in the First community, however he has engineering experience in rocketry, and other club and competition based ventures.",
    //   image: anirudh,
    //   roles: [mechanical],
    // },
    // {
    //   name: "Caroleen",
    //   blurb:
    //     "Caroleen is a junior at Durham Technical Middle College Highschool and is from Durham, North Carolina. This is Caroleen's 5th year on an FTC team. As the project manager Caroleen keeps track of all the moving parts, ensuring everyone has what they need.",
    //   image: caroleen,
    //   roles: [nontechnical],
    // },
    
    {
      name: "June",
      blurb:
        "June is from Cary, North Carolina, and this is her second year on SigmaCorns and 4th year doing FTC. On the team she works on designing, assembling, and testing mechanisms, and she's looking forward to continuing to learn all she can. Off the team she enjoys photography, reading, and hanging out with friends. ",
      image: june1,
      roles: [mechanical, captain],
      email: "brewer25j@ncssm.edu"
    },
    {
      name: "Lola",
      blurb:
        "Lola is a Senior originally from Winston Salem, NC but currently studying at the NCSSM. This is Lola’s 4th year participating on an FTC team. Lola has loved the energy and passion for FIRST that all the members of the team share and she can’t wait to see what progress SigmaCorns makes this year. ",
      image: lola1,
      roles: [nontechnical, captain],
      email: "larsen25l@ncssm.edu"
    },
    {
      name: "Isabel",
      blurb:
        "Isabel is a Senior at NCSSM and has been apart of FIRST for 8 years. She did FLL for 5 years then did FTC for 4 years. She is a member of the mechanical sub group on team 22377 SigmaCorns. She looks forward to expanding her knowledge is all aspects of robotics.",
      image: isabel1,
      roles: [mechanical],
      email: "baker25i@ncssm.edu"
    },
    // {
    //   name: "Nikhil",
    //   blurb:
    //     "Nikhil is a junior at NCSSM, from Cary, North Carolina. He has been a part of FIRST since 5th grade, participating every year since then, with 4 years of FTC experience. He loves to work with code, and enjoys learning about and implementing control theory techniques.",
    //   image: nikhil,
    //   roles: [mechanical],
    // },
    {
      name: "Taylor",
      blurb:
        "Taylor is a Senior at NCSSM where she focuses on computer science. She is originally from Western North Carolina and will be doing FTC for the second time this year. She is very excited to learn all about FTC and what it can do to impact communities around the Durham area!",
      image: taylor1,
      roles: [programming, nontechnical],
      email: "eason25t@ncssm.edu",
    },
    {
      name: "Jason",
      blurb:
        "Jason is a homeschooled ninth grader from Durham. This is his second year participating in FIRST, and he is excited to apply his math background to robotics. In his free time, he enjoys composing music, writing purple prose, and crafting original problems for his math contests.",
      image: jason1,
      roles: [programming],
      email: "peace.s.lee@gmail.com"
    },
    {
      name: "Ophir",
      blurb:
        "Ophir, originally from Huntersville, North Carolina, is a junior at NCSSM. This is his first year participating in FTC, and he is eager to apply his data science background to robotics. Ophir looks forward to the season, excited to expand his skills and knowledge in computer science and robotics.",
        image: ophir,
      roles: [programming],
      email: "avsian26o@ncssm.edu"
    },
    {
      name: "Nate",
      blurb:
        "Nate is a junior at NCSSM who is originally from Greensboro, North Carolina. This is Nate's first year participating in FTC, and he is interested in implementing machine learning algorithms, mainly visual models, into robots. As hobbies, he enjoys learning math, programming (mainly math algorithms), and producing music in FL Studio.",
        image: nate,
      roles: [programming],
      email: "dannunzio26n@ncssm.edu"
    },
    {
      name: "Thomas",
      blurb:
        "Thomas is a junior at NCSSM and this is his 3rd year doing FTC and first year on the team. He is interested in simulators and applying control theory concepts to FTC. Outside of robotics he enjoys writing low level programs and spending time with friends.",
        image: thomas,
      roles: [programming],
      email: "fasan26t@ncssm.edu"
    },
    {
      name: "Lillian",
      blurb:
        "Lillian is a junior from Chapel Hill, who is currently studying at NCSSM. This is her second year doing FTC. On the team, Lillian helps the SigmaCorns with outreach, including organizing events, networking with industry professionals, and building a brand.",
        image: lillian,
      roles: [nontechnical],
      email: "williams26l@ncssm.edu"
    },
    {
      name: "Tanuj",
      blurb:
        "Tanuj is a junior at NCSSM and has been a part of FIRST for 8 years. He's been interested in the community outreach aspect of robotics and continues to spread the FIRST message. In his free time he enjoys to read and spend time with friends.",
        image: tanuj,
      roles: [nontechnical],
      email: "karthikeyan26t@ncssm.edu"
    },
    {
      name: "Carter",
      blurb:
        "Carter is from Apex, North Carolina and this is his first year on SigmaCorns. He is on the mechanical subgroup and works on design and assembly. In his free time, he enjoys working on cars, engines, and typing.",
        image: carter,
      roles: [mechanical],
      email: "hu25c@ncssm.edu"
    },
    {
      name: "Michael",
      blurb:
        "Michael is a junior at NCSSM and is originally from Raleigh, North Carolina, and this is his second year doing FTC and seventh doing FIRST. On the team he works on manufacturing, assembling, and testing mechanisms. Off the team Michael enjoys learning physics and chemistry, rocketry, and hanging out with friends.",
        image: michael,
      roles: [mechanical],
      email: "chen26m@ncssm.edu"
    },
    {
      name: "Ian",
      blurb:
        "Ian Suh, a senior at NCSSM originally from Apex, NC, is now in his fifth year of participating in FIRST Robotics. He specializes in mechanical work, including designing, manufacturing, and assembling robots. Outside of robotics, Ian enjoys drawing and studying physics in his free time.",
        image: ian,
      roles: [mechanical],
      email: "suh25i@gmail.com"
    },
    {
      name: "Jishnu",
      blurb:
        "Jishnu is a junior at NCSSM and is originally from Greensboro, North Carolina. This is his 3rd year in FTC and 7th overall year in FIRST. His primary interests on SigmaCorns are related to mechanical design, fabrication, and optimization. He is also excited to strengthen his FTC programming skills to get a more nuanced perspective. Outside of FIRST, Jishnu enjoys photography, nature walks, puzzles, and interdisciplinary biology. He is looking forward to all the new memories and surprises that are about to come!",
        image: jishnu,
      roles: [mechanical],
      email: "kolla26j@ncssm.edu"
    },
    {
      name: "Aaditya",
      blurb:
        "Aaditya is a Junior originally from Apex, NC but currently studying at NCSSM. This is Aaditya's 3rd year in FTC and 4th year in FIRST. Aaditya loves to create and innovate on new ideas is excited to share them with the FIRST community! Off the team he enjoys playing volleyball, table tennis, and participating in other competitive events.",
        image: aaditya,
      roles: [mechanical],
      email: "sah26a@ncssm.edu"
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
  email: string;
}

function TeamMember({ image, name, blurb, roles, email }: TeamMemberProps) {
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
          <p className="text-sm mt-4">
            <a href={`mailto:${email}`}>
              <button className="bg-white text-black px-4 py-2 rounded hover:bg-light-blue-400 transition-all">
                Contact Me
              </button>
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
