"use client";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  return (
   
     <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={` py-8 relative hidden sm:block  w-full mx-auto `}
    >

<div className=" absolute w-[100%] inset-0 gradient-nav z-0" />

        <ul className="flex justify-center gap-5 z-1 relative ">
          <li className="text-2xl hover:text-slate-400">
            <a href="#about">Acerca</a>
          </li>
          {/* <li className="text-2xl hover:text-slate-400">
            <a href="#experiencie">Experiencia</a>{" "}
          </li> */}
          <li className="text-2xl hover:text-slate-400">
            <a href="#proyects">Proyectos</a>
          </li>
          <li className="text-2xl hover:text-slate-400">
            <a href="#skills">Tecnologias</a>
          </li>
          <li className="text-2xl hover:text-slate-400">
            <a href="#contact">Contacto</a>
          </li>
        </ul>

      </motion.nav>
    
  );
};

export default Navbar;
