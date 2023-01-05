"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "./motion/CustomTexts";
import TechCards from "./motion/TechCards";

const tech=["SiJavascript","SiTypescript","SiReact","SiTailwindcss","SiArduino","SiAutodesk","SiCss3","SiExpress","SiExpo","SiFirebase","SiMaterialui","SiNodedotjs","SiMongodb","TbBrandNextjs","TbBrandReactNative"]


const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center "
    >
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto flex flex-col`}
      >
        <TypingText
          title={"Tecnologias"}
          textStyles="text-5xl py-2 text-center"
        />

        <div className="  mt-10 flex flex-wrap gap-8 justify-center w-[600px]">
{
  tech.map((_,i)=>{
    return (
      <TechCards
      key={i}
      index={i}
      />
    )
  }
 
)
}

        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
