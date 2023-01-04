'use client';

import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  return (

    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`sm:px-16 px-6 py-8 relative`}
    >
      <div className=" absolute w-[80%] inset-0 gradient-01" />
      <nav className=" z-10 relative 2xl:max-w-[1280px] w-full mx-auto flex justify-center gap-8  "   >
        {/* //"py-5 flex fixed w-full mx-auto  justify-center   "> */}

        <ul className="flex gap-5 " >
          <li className="text-2xl"> <a href="#about">Acerca</a>  </li>
          <li className="text-2xl"><a href="#experiencie" >Experiencia</a>  </li>
          <li className="text-2xl"><a href="#proyects" >Proyectos</a>  </li>
          <li className="text-2xl"><a href="#skills" >Habilidades</a>  </li>
          <li className="text-2xl"><a href="#contact" >Contacto</a>  </li>
        </ul>
      </nav>
    </motion.nav>
  )
}

export default Navbar