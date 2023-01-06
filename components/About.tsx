"use client";
import Image from "next/image";
import picture from "../public/picture.png";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import { staggerContainer, sideCome, fadeIn,zoomIn } from "../utils/motion";

const About = () => {
  return (
    <section
      id="about"
      className=" relative min-h-screen flex flex-col justify-center  w-4/5 mx-auto"
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
        <motion.div variants={zoomIn(0.5,0.5)}
          className="flex-1" >


       
   <div className="absolute left-0 gradient-04 z-0" ></div>
   </motion.div>
        <div className="flex py-5 items-center">
     
          <motion.div variants={sideCome("left")}
          className="flex-1" >
                 
            <Image
              className="w-auto h-auto"
              src={picture}
              width={400}
              height={400}
              alt={"men wonking"}
            ></Image>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="flex-1"
          >
            <p className="first-letter:text-3xl text-2xl text-justify indent-8">
              Desarrollador web autodidacta, una persona creativa y muy curiosa
              en constante crecimiento, apasionado por el aprendizaje de nuevas
              tecnologías .
            </p>
            <p className="first-letter:text-3xl text-2xl text-justify indent-8">Ademas soy Tecnico Electromecanico especializado en
              la automatizacion industrial , lo cual a lo largo de estos 5 años
              me permitio desarrolar un pensamiento analítico, la resolución
              efectiva de problemas y el trabajo en equipo.</p>
              <p className="first-letter:text-3xl text-2xl text-justify indent-8"> Actualmente me
              encuentro en Buenos Aires , Argentina</p>
          </motion.div>
        </div>
  
      </motion.div>

    </section>
  );
};

export default About;
