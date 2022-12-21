// import 100 images

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { isSafari } from "react-device-detect";

import r0000 from "../public/media/robot_animation/0000.png";
import r0001 from "../public/media/robot_animation/0001.png";
import r0002 from "../public/media/robot_animation/0002.png";
import r0003 from "../public/media/robot_animation/0003.png";
import r0004 from "../public/media/robot_animation/0004.png";
import r0005 from "../public/media/robot_animation/0005.png";
import r0006 from "../public/media/robot_animation/0006.png";
import r0007 from "../public/media/robot_animation/0007.png";
import r0008 from "../public/media/robot_animation/0008.png";
import r0009 from "../public/media/robot_animation/0009.png";
import r0010 from "../public/media/robot_animation/0010.png";
import r0011 from "../public/media/robot_animation/0011.png";
import r0012 from "../public/media/robot_animation/0012.png";
import r0013 from "../public/media/robot_animation/0013.png";
import r0014 from "../public/media/robot_animation/0014.png";
import r0015 from "../public/media/robot_animation/0015.png";
import r0016 from "../public/media/robot_animation/0016.png";
import r0017 from "../public/media/robot_animation/0017.png";
import r0018 from "../public/media/robot_animation/0018.png";
import r0019 from "../public/media/robot_animation/0019.png";
import r0020 from "../public/media/robot_animation/0020.png";
import r0021 from "../public/media/robot_animation/0021.png";
import r0022 from "../public/media/robot_animation/0022.png";
import r0023 from "../public/media/robot_animation/0023.png";
import r0024 from "../public/media/robot_animation/0024.png";
import r0025 from "../public/media/robot_animation/0025.png";
import r0026 from "../public/media/robot_animation/0026.png";
import r0027 from "../public/media/robot_animation/0027.png";
import r0028 from "../public/media/robot_animation/0028.png";
import r0029 from "../public/media/robot_animation/0029.png";
import r0030 from "../public/media/robot_animation/0030.png";
import r0031 from "../public/media/robot_animation/0031.png";
import r0032 from "../public/media/robot_animation/0032.png";
import r0033 from "../public/media/robot_animation/0033.png";
import r0034 from "../public/media/robot_animation/0034.png";
import r0035 from "../public/media/robot_animation/0035.png";
import r0036 from "../public/media/robot_animation/0036.png";
import r0037 from "../public/media/robot_animation/0037.png";
import r0038 from "../public/media/robot_animation/0038.png";
import r0039 from "../public/media/robot_animation/0039.png";
import r0040 from "../public/media/robot_animation/0040.png";
import r0041 from "../public/media/robot_animation/0041.png";
import r0042 from "../public/media/robot_animation/0042.png";
import r0043 from "../public/media/robot_animation/0043.png";
import r0044 from "../public/media/robot_animation/0044.png";
import r0045 from "../public/media/robot_animation/0045.png";
import r0046 from "../public/media/robot_animation/0046.png";
import r0047 from "../public/media/robot_animation/0047.png";
import r0048 from "../public/media/robot_animation/0048.png";
import r0049 from "../public/media/robot_animation/0049.png";
import r0050 from "../public/media/robot_animation/0050.png";
import r0051 from "../public/media/robot_animation/0051.png";
import r0052 from "../public/media/robot_animation/0052.png";
import r0053 from "../public/media/robot_animation/0053.png";
import r0054 from "../public/media/robot_animation/0054.png";
import r0055 from "../public/media/robot_animation/0055.png";
import r0056 from "../public/media/robot_animation/0056.png";
import r0057 from "../public/media/robot_animation/0057.png";
import r0058 from "../public/media/robot_animation/0058.png";
import r0059 from "../public/media/robot_animation/0059.png";
import r0060 from "../public/media/robot_animation/0060.png";
import r0061 from "../public/media/robot_animation/0061.png";
import r0062 from "../public/media/robot_animation/0062.png";
import r0063 from "../public/media/robot_animation/0063.png";
import r0064 from "../public/media/robot_animation/0064.png";
import r0065 from "../public/media/robot_animation/0065.png";
import r0066 from "../public/media/robot_animation/0066.png";
import r0067 from "../public/media/robot_animation/0067.png";
import r0068 from "../public/media/robot_animation/0068.png";
import r0069 from "../public/media/robot_animation/0069.png";
import r0070 from "../public/media/robot_animation/0070.png";
import r0071 from "../public/media/robot_animation/0071.png";
import r0072 from "../public/media/robot_animation/0072.png";
import r0073 from "../public/media/robot_animation/0073.png";
import r0074 from "../public/media/robot_animation/0074.png";
import r0075 from "../public/media/robot_animation/0075.png";
import r0076 from "../public/media/robot_animation/0076.png";
import r0077 from "../public/media/robot_animation/0077.png";
import r0078 from "../public/media/robot_animation/0078.png";
import r0079 from "../public/media/robot_animation/0079.png";
import r0080 from "../public/media/robot_animation/0080.png";
import r0081 from "../public/media/robot_animation/0081.png";
import r0082 from "../public/media/robot_animation/0082.png";
import r0083 from "../public/media/robot_animation/0083.png";
import r0084 from "../public/media/robot_animation/0084.png";
import r0085 from "../public/media/robot_animation/0085.png";
import r0086 from "../public/media/robot_animation/0086.png";
import r0087 from "../public/media/robot_animation/0087.png";
import r0088 from "../public/media/robot_animation/0088.png";
import r0089 from "../public/media/robot_animation/0089.png";
import r0090 from "../public/media/robot_animation/0090.png";
import r0091 from "../public/media/robot_animation/0091.png";
import r0092 from "../public/media/robot_animation/0092.png";
import r0093 from "../public/media/robot_animation/0093.png";
import r0094 from "../public/media/robot_animation/0094.png";
import r0095 from "../public/media/robot_animation/0095.png";
import r0096 from "../public/media/robot_animation/0096.png";
import r0097 from "../public/media/robot_animation/0097.png";
import r0098 from "../public/media/robot_animation/0098.png";
import r0099 from "../public/media/robot_animation/0099.png";
import r0100 from "../public/media/robot_animation/0100.png";
import { slidedown } from "../utils/motionPresets";

const images = [
  r0000,
  r0001,
  r0002,
  r0003,
  r0004,
  r0005,
  r0006,
  r0007,
  r0008,
  r0009,
  r0010,
  r0011,
  r0012,
  r0013,
  r0014,
  r0015,
  r0016,
  r0017,
  r0018,
  r0019,
  r0020,
  r0021,
  r0022,
  r0023,
  r0024,
  r0025,
  r0026,
  r0027,
  r0028,
  r0029,
  r0030,
  r0031,
  r0032,
  r0033,
  r0034,
  r0035,
  r0036,
  r0037,
  r0038,
  r0039,
  r0040,
  r0041,
  r0042,
  r0043,
  r0044,
  r0045,
  r0046,
  r0047,
  r0048,
  r0049,
  r0050,
  r0051,
  r0052,
  r0053,
  r0054,
  r0055,
  r0056,
  r0057,
  r0058,
  r0059,
  r0060,
  r0061,
  r0062,
  r0063,
  r0064,
  r0065,
  r0066,
  r0067,
  r0068,
  r0069,
  r0070,
  r0071,
  r0072,
  r0073,
  r0074,
  r0075,
  r0076,
  r0077,
  r0078,
  r0079,
  r0080,
  r0081,
  r0082,
  r0083,
  r0084,
  r0085,
  r0086,
  r0087,
  r0088,
  r0089,
  r0090,
  r0091,
  r0092,
  r0093,
  r0094,
  r0095,
  r0096,
  r0097,
  r0098,
  r0099,
  r0100,
].reverse();

interface RobotSectionProps {
  value: number;
}

export default function RobotSection({ value }: RobotSectionProps) {
  // cut off value from 0 to 1
  value = Math.max(0, Math.min(1, value));
  // get the index of the image to display
  const index = Math.floor(value * (images.length - 1));
  // get the image to display
  console.log(index);
  const [safari, setSafari] = useState("undefined");
  useEffect(() => {
    if (isSafari) {
      setSafari("true");
    } else {
      setSafari("false");
    }
  }, []);

  return (
    <motion.section
      {...slidedown}
      id="robot"
      className="sticky top-20 pt-5 md:pt-0 z-10"
    >
      {safari === "true" && (
        <Image
          src="/media/robot_animation/looping2.gif"
          alt="Spinning robot"
          width={1920}
          height={1080}
        />
      )}
      {safari === "false" &&
        images.map((image, i) => (
          <div key={i} className={index === i ? "block" : "hidden"}>
            <Image src={image} alt="robot" loading="eager" />
          </div>
        ))}
    </motion.section>
  );
}
