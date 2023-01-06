/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BsGithub, BsBoxArrowUpRight, BsDiamondFill } from "react-icons/bs";
import { fadeIn } from "../../utils/motion";
import { techsObj } from "../../constants/Icons";
interface Props {
  imgUrl: string;
  title: string;
  subtitle: string;
  index: number;
  git: string;
  demo: string;
  tech: number[];
}

const InsightCard = ({
  imgUrl,
  title,
  subtitle,
  index,
  demo,
  git,
  tech,
}: Props) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex flex-row items-center gap-8 mx-[100px] my-[10px]"
  >
    <Image
      src={imgUrl}
      width={350}
      height={200}
      alt="image web page"
      className=" h-auto w-auto "
    />

    <div className="w-full flex justify-between items-center gap-4">
      <div className="flex-1  flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal text-justify lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>

        <div className="flex items-center justify-between">
          <ul className="py-6 flex gap-4 ">
            {tech.map((item, i) => {
              const icon = techsObj[item];

              return (
                <li
                  className="flex flex-col items-center  text-zinc-300 text-xl"
                  key={i}
                >
                  {icon.icon({ color: icon.color, size: 50 })}
                  <p className="text-sm text-slate-400" >{icon.name}</p>
                </li>
              );
            })}
          </ul>

          <div className="flex gap-6 ">
            <a href={git} rel="noreferrer" target={"_blank"} className=" my-4">
              <BsGithub className="text-4xl hover:text-zinc-800 hover:scale-110"></BsGithub>
            </a>

            <a href={demo} rel="noreferrer" target={"_blank"} className="my-4">
              <BsBoxArrowUpRight className="text-3xl hover:text-zinc-800 hover:scale-110"></BsBoxArrowUpRight>
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
