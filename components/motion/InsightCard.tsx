/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { BsGithub ,BsBoxArrowUpRight,BsDiamondFill} from "react-icons/bs";
import { fadeIn } from '../../utils/motion';

interface Props {
  imgUrl:string,
  title:string,
  subtitle:string,
  index:number,
  git:string,
  demo:string,
  tech:string[],

}

const InsightCard = ({ imgUrl, title, subtitle, index,demo,git,tech }:Props) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
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
          {tech.map((item,i)=>
            <li className='flex items-center ' key={i}>
             <BsDiamondFill className='mx-2'></BsDiamondFill> {item}
            </li>
          )}

        </ul>
      </div>

      <div
        className="flex flex-col    "
      >
        <button className="flex justify-center items-center h-[40px] w-[80px] rounded-2xl border border-white my-4" >
      <BsGithub className="text-2xl"></BsGithub>
        </button>

        <button className="flex justify-center items-center h-[40px] w-[80px] rounded-2xl border border-white my-4" >
        <BsBoxArrowUpRight className="text-2xl"></BsBoxArrowUpRight>
        </button>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
