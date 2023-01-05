"use client";
import Image from "next/image";
import picture from "../public/picture.png";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import { staggerContainer, sideCome, fadeIn } from "../utils/motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center  w-4/5 mx-auto"
    >
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
       
      >
        <TypingText
          title={"Un poco acerca de mi ..."}
          textStyles="text-5xl py-2"
        />

        <div className="flex py-5 items-center">
          <motion.div variants={sideCome("left")}
          className="flex-1" >
            <Image
              className="w-79 h-96 "
              src={picture}
              width={"400"}
              height={"400"}
              alt={"men wonking"}
            ></Image>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="flex-1"
          >
            <p className="text-2xl text-justify indent-8">
              Desarrollador web autodidacta, una persona creativa y muy curiosa
              en constante crecimiento, apasionado por el aprendizaje de nuevas
              tecnologías .
            </p>
            <p className="text-2xl text-justify indent-8">Ademas soy Tecnico Electromecanico especializado en
              la automatizacion industrial , lo cual a lo largo de estos 5 años
              me permitio desarrolar un pensamiento analítico, la resolución
              efectiva de problemas y el trabajo en equipo.</p>
              <p className="text-2xl text-justify indent-8"> Actualmente me
              encuentro en Buenos Aires , Argentina</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
