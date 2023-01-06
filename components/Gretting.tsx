"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../utils/motion";

const Gretting = () => {
let variant
let isMobile

  if (typeof window !== 'undefined') {
     isMobile = window.outerWidth <640
  }

  if (isMobile) {
     variant=fadeIn("up", "spring", 0.5, 0.8)
    
  }else{
    variant=slideIn("right", "tween", 0.5, 1)
  }

  return (
    <section
      id="gretting"
      className="h-screen flex flex-col justify-center items-center "
    >
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div
          variants={textVariant(0.2)}
          className="flex flex-row justify-center items-center "
        >
          <h1 className="text-6xl sm:text-8xl py-3 text-center">
            Hola, soy Lucas
          </h1>
        </motion.div>

        <motion.div
          variants={variant}
          className="py-10 flex flex-row justify-center items-center relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <h2 className="text-slate-500 text-4xl sm:text-6xl py-3 text-center">
            Desarrollador FrontEnd
          </h2>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Gretting;
