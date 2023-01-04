'use client';

import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';


const Gretting = () => {



  return (
    <section id="gretting" className="py-24 flex flex-col justify-center items-center " >
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      // className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}
      >
        <motion.div
          variants={textVariant(0.2)}
          className="flex flex-row justify-center items-center pt-12"
        >


          <h1 className="text-8xl py-3">Hola, soy Lucas</h1>
        </motion.div>


        <motion.div
          variants={slideIn('right', 'tween', 0.7, 1)}
          className="py-10 flex flex-row justify-center items-center relative w-full md:-mt-[20px] -mt-[12px]"

        >
          <h2 className="text-slate-500 text-6xl py-3">Desarrollador FrontEnd</h2>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Gretting