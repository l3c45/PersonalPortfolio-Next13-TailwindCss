"use client";

import { motion } from "framer-motion";
import { proyects } from "../constants/mock";
import { fadeIn, staggerContainer } from "../utils/motion";
import { InsightCard, TitleText, TypingText } from "../components";

const Proyects = () => {
  return (
    <section
      id="proyects"
      className="mb-[100px]"
      
    >
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="min-h-screen flex flex-col  items-center "
      >
        <TitleText title={"Proyectos"} textStyles="text-center" />
        <div className="mt-[50px] flex flex-col gap-8]">
          {proyects.map((item, index) => (
            <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
          ))}
        </div>
        <motion.div
          variants={fadeIn("up", "spring", 5, 1)}
          className=" my-[100px]"
        >
          <button
            type="button"
            className="px-10 flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
          >
            <a
              href="https://github.com/l3c45?tab=repositories"
              rel="noreferrer"
              target={"_blank"}
              className="font-normal text-2xl text-white"
            >
             Mas Proyectos
            </a>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Proyects;
