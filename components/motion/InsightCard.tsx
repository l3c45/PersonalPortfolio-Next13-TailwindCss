/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsGithub ,BsBoxArrowUpRight,BsDiamondFill} from "react-icons/bs";
import { fadeIn } from '../../utils/motion';
import { techsObj } from '../../constants/Icons';
interface Props {
  imgUrl:string,
  title:string,
  subtitle:string,
  index:number,
  git:string,
  demo:string,
  tech:number[],

}

const InsightCard = ({ imgUrl, title, subtitle, index,demo,git,tech }:Props) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex flex-row items-center gap-4 mx-[100px] my-[10px]"
  >
    <Image
      src={imgUrl}
      width={500}
      height={500}
      alt="image web page"
      className="w-126 h-64 rounded-[32px] object-contain"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
        <ul className='py-6 flex gap-6' >
          {tech.map((item,i)=>{
          const icon=techsObj[item]

            return (
            <li className='flex items-center gap-4 text-zinc-300 text-xl' key={i}>
              {icon.icon({color:icon.color,size:50})}
             <p>{icon.name}</p>
    
            </li>)
          })
        }

        </ul>
      </div>

      <div
        className="flex flex-col gap-10 "
      >
        <a  href={git} rel="noreferrer" target={"_blank"} className=" my-4" >
      <BsGithub className="text-4xl hover:text-zinc-800 hover:scale-110"></BsGithub>
        </a>

        <a  href={demo} rel="noreferrer" target={"_blank"} className="my-4" >
        <BsBoxArrowUpRight className="text-3xl hover:text-zinc-800 hover:scale-110"></BsBoxArrowUpRight>
        </a>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
