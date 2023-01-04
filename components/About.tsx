"use client"
import Image from "next/image"
import picture from "../public/picture.png"
import { motion } from 'framer-motion';
import { TypingText } from '../components';
import { staggerContainer, sideCome, fadeIn } from '../utils/motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center  w-4/5 mx-auto" >
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto flex flex-col`}
      >

        <TypingText
          title={"Un poco acerca de mi ..."}
          textStyles="text-5xl py-2"
        />
      
        <div className="flex py-5 items-center" > 
        <motion.div
          variants={sideCome('left')}
           className={`flex-1 `}
        >
          <Image className="w-79 h-96" src={picture} width={"400"} height={"400"} alt={"men wonking"} ></Image>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <p className="text-2xl h-min">Im a Front End Developer with a Graphic Design background. Im now pursuing the Web Development path, but I studied Graphic Design in college for two years, where I developed a strong aesthetic sense.

            Im a complete pixel perfect enthusiast, as I have a great attention to detail. Im really passionate about technology and I enjoy being curious. Furthermore, Im highly perfectionist yet versatile.

            Im fluent in both written and spoken English, as Ive got a C1 English level.
          </p>
        </motion.div>
</div>
      </motion.div>
    </section>
  )
}

export default About
