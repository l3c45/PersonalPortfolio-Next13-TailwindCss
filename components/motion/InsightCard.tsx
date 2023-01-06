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
    variants={fadeIn("up", "spring", index * 0.4, 0.8)}
    className="flex flex-col py-5  sm:py-0 sm:flex-row items-center gap-8 sm:mx-[100px] my-[10px] sm:bg-transparent bg-opacity-40 bg-slate-800 px-2 sm:p-0 shadow-lg"
  >
    <Image
      src={imgUrl}
      width={350}
      height={200}
      alt="image web page"
      className=" h-auto w-auto "
    />

    <div className=" flex sm:flex-row flex-col justify-between items-center gap-4">
      <div className="flex-1  flex flex-col max-w-[650px]">
        <h4 className="font-normal md:text-[42px] text-[20px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal text-justify md:text-[20px] text-[16px] text-secondary-white">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <ul className="py-6 flex justify-center flex-wrap gap-4 ">
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

          <div className="flex justify-center gap-6 ">
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
