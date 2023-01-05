"use client";
import { motion } from "framer-motion";
import { techsObj } from "../constants/Icons";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "./motion/CustomTexts";
import TechCards from "./motion/TechCards";

const Skills = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` flex flex-col`}
    >
      <section
        id="skills"
        className="min-h-screen flex flex-col justify-evenly items-center "
      >
        <TypingText
          title={"Tecnologias"}
          textStyles="text-5xl  text-center"
        />

        <div className="  flex flex-wrap gap-10 justify-center mx-[200px]">
          {Object.keys(techsObj).map((_, i) => {
            const icon = techsObj[i];
            return icon ? (
              <TechCards
                index={i}
                name={icon.name}
                icon={icon.icon}
                color={icon.color}
                key={i}
              />
            ) : null;
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default Skills;
