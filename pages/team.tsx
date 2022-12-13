import Title from "../components/Title";
import Image, { StaticImageData } from "next/image";

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
    <>
      <Title text="Meet the Team" />
      <div className="grid grid-cols-3 gap-5 m-5">
        {members.map((member) => TeamMember(member))}
      </div>
    </>
  );
}

interface RoleProps {
  color: string;
  role: string;
}

function Role({ color, role }: RoleProps) {
  return <span className={`px-3 py-1 rounded-lg mr-2 ${color}`}>{role}</span>;
}

interface TeamMemberProps {
  image: string | StaticImageData;
  name: string;
  blurb: string;
  roles: RoleProps[];
}

function TeamMember({ image, name, blurb, roles }: TeamMemberProps) {
  return (
    <div className="bg-[#232323] rounded-3xl  text-center mt-24 relative">
      <div className="-translate-y-1/2 absolute flex justify-center w-full">
        <div className="rounded-full w-40 h-40 m-auto relative">
          <Image src={image} alt={name} fill className="rounded-full" />
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-3xl pt-20">
          @{name.toLowerCase().replace(" ", "")}
        </h2>
        <p className="text-xl my-3">{blurb}</p>
        <p className="text-left pt-3">{roles.map((role) => Role(role))}</p>
      </div>
    </div>
  );
}
