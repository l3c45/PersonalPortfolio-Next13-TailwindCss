"use client";
import { motion } from "framer-motion";
import { techsObj } from "../constants/Icons";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import { TypingText } from "./motion/CustomTexts";
import TechCards from "./motion/TechCards";

const Skills = () => {


  let isMobile=false

  if (typeof window !== 'undefined') {
     isMobile = window.outerWidth <640
  }

 

  return (
    <section
        id="skills"
        className="min-h-screen flex items-center "
      >
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
     className={"min-h-screen flex flex-col justify-evenly items-center"}
    >
      
        <TypingText
          title={"Tecnologias"}
          textStyles=" text-3xl sm:text-5xl  text-center pb-10"
        />

        <div className="  flex flex-wrap gap-10 justify-center sm:mx-[200px]">
          {Object.keys(techsObj).map((_, i) => {
            const icon = techsObj[i];
            return icon ? (
              <TechCards
                index={i}
                name={icon.name}
                icon={icon.icon}
                color={icon.color}
                mobile={isMobile}
                key={i}
              />
            ) : null;
          })}
        </div>
     
    </motion.div>
    </section>
  );
};

export default Skills;
