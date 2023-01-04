/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';


import { fadeIn } from '../../utils/motion';
import education from "../../public/education.png"
import work from "../../public/work.png"
import Image from 'next/image';

type Data={
  name: string;
  date: string;
  description: string;
}[]

interface Props {
  
  id:number,
data:Data,
title:string,
  
     index:number,
      active:number,
       handleClick:(id:number)=>void

}



const ExploreCard = ({ id,data,title,index, active, handleClick }:Props) => {
  
  return(
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? ' flex-[10]' :"flex-0"
    } flex items-center justify-center min-w-[250px] h-[500px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
   {active===id?null:
    <Image
      src={id===0?work:education}
      alt="planet-04"
      width={500}
      height={500}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />

   } 

    
   
      <div className="absolute bottom-0 p-5 flex justify-center w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
       
        
        <h2 className=" font-semibold sm:text-[32px] text-[24px] text-white">
        {title}
        </h2>
      </div>
    
  </motion.div>
)}

export default ExploreCard;
