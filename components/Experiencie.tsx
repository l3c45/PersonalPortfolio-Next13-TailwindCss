'use client';
 import { useState } from 'react';
import { motion } from 'framer-motion';
import { exp } from '../constants/mock';
 import { staggerContainer } from '../utils/motion';
 import { ExploreCard, TitleText, TypingText } from '../components';



const Experiencie = () => {
  const [active, setActive] = useState<number>(9)

  return (
<section id="experiencie" className="min-h-screen flex flex-col justify-center  items-center " >
<h2 className='text-6xl'>WIP...</h2>
{/* 
 <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.30 }}
        className={` w-full items-center flex flex-col`}
      >
        
        <TitleText
          title={"Experiencia" }
          textStyles="text-center"
        />
        <div className="p-4 w-full justify-center flex lg:flex-row flex-col  gap-12">
          {exp.map((item, index,arr) => {
      
            return (
            <ExploreCard
              key={index}
              id={index}
              data={item.data}
              title={item.title}
              index={index}
              active={active}
              handleClick={setActive}
            />
          )})}
        </div>
      </motion.div>
  */}
</section>
  )
}

export default Experiencie

