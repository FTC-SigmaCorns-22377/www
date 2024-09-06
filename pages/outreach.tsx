import { motion } from "framer-motion";
import CoolLink from "../components/CoolLink";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import { quickStagger, stagger } from "../utils/motionPresets";

export default function Outreach() {
  return (
    <Wrapper>
      <Title text="Outreach" />
      <div className="grid md:grid-cols-4 gap-5 md:gap-10 m-10">
        <OutreachStat className="col-span-2 row-span-2 from-green-400 to-blue-600 p-10">
          <h1 className="text-3xl md:text-5xl lg:text-8xl">100,000+</h1>
          <h2 className="text-2xl lg:text-4xl">
            individuals reached and inspired from around our state, country and
            the globe!
          </h2>
        </OutreachStat>
        <OutreachStat className="from-pink-400 to-purple-600 text-xl p-5">
          <p>
            We maintain{" "}
            <CoolLink text="Ctrl Alt FTC" href="https://ctrlaltftc.com" />, the
            most renowned control theory guide for FTC teams, and beyond!
          </p>
        </OutreachStat>
        <OutreachStat className="from-yellow-400 to-orange-600 text-xl p-5">
          <p>We have reached over 175k people through creative and informational posts on our instagram, @ftc22377!</p>
          
          {/* TODO: Add a stat here */}
        </OutreachStat>
        <OutreachStat className="from-red-400 to-pink-600 text-xl p-5">
          <p>We presented topics of <CoolLink text="Advanced Control Theory" href="https://docs.google.com/presentation/d/1WhyvTwzY18k0Guhmij6pUPpvmrq0uYPdi8Hqed2qJwg/edit?usp=drive_link" />, 
          Statistical Analysis, Team Sustainability, and FTC Simulations at the World Championship, Chicago Robotics Invotational, and the NC FTC Kickoff! </p>
          <p>
            {/*<CoolLink text="NC FTC Presentation Kick-off" href="https://docs.google.com/presentation/d/1WhyvTwzY18k0Guhmij6pUPpvmrq0uYPdi8Hqed2qJwg/edit?usp=drive_link" />*/}
            {/*<CoolLink text=" - Advanced Control Theory" href="https://docs.google.com/presentation/d/1WhyvTwzY18k0Guhmij6pUPpvmrq0uYPdi8Hqed2qJwg/edit?usp=drive_link" />*/}
          </p>
          {/*TODO: find a way to wrap the coollink text - DONE; changed the coollink function */}

          {/* TODO: Add a stat here */}
        </OutreachStat>
        <OutreachStat className="from-indigo-400 to-blue-600 text-xl p-5">
            Outreach events - robot demos, STEM activities, community engagement activities, FLL mentoring.
            Impacted 150+ children in our community this season.
          {/* TODO: Add a stat here */}
        </OutreachStat>
        
      </div>
    </Wrapper>
  );
}

interface OutreachStatProps {
  children?: React.ReactNode;
  className?: string;
}

function OutreachStat({ children, className }: OutreachStatProps) {
  return (
    <motion.div
      className={
        "flex flex-col aspect-square w-full rounded-2xl bg-gradient-to-br " +
        className
      }
      whileHover={{ scale: 0.95 }}
      variants={{
        hidden: { scale: 0.5, opacity: 0, transition: { duration: 0.5 } },
        visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
      }}
    >
      {children}
    </motion.div>
  );
}
