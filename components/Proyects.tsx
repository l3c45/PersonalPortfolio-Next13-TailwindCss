'use client';

import { motion } from 'framer-motion';
import { proyects } from '../constants/mock';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Proyects = () => {
  return (
<section id="proyects" className="min-h-screen flex flex-col  items-center " >
 <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` mx-auto flex flex-col`}
    >
      
      <TitleText title={"Proyectos"} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {proyects.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>

</section>
  )
}

export default Proyects