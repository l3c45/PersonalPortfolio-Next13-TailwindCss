"use client";
import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";


const Footer = () => {
  return (
    <motion.footer
      id="contact"
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={` relative `}
    >
      <div className="footer-gradient" />

      <div className="flex flex-col">
        <div className="my-8 h-[2px] bg-white opacity-10" />

        <div className="flex flex-col  items-center gap-10  ">
          <div className="flex gap-8 ">
            <a
              href="https://github.com/l3c45"
              rel="noreferrer"
              target={"_blank"}
            >
          
              <BsGithub className="text-6xl hover:text-zinc-700 hover:scale-110"></BsGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-zarate-b77b2b3b/"
              rel="noreferrer"
              target={"_blank"}
            >
     
              <BsLinkedin className="text-6xl hover:text-blue-500 hover:scale-110"></BsLinkedin>{" "}
            </a>
          </div>
          <p className=" text-2xl text-white opacity-50 pb-8">
            Copyright © 2022 l3c45.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
