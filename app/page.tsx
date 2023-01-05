"use client"
import { motion } from "framer-motion";
import {About,Gretting,Navbar,Experiencie,Footer,Proyects,Skills,Contact} from "../components"
import "../styles/globals.css"
import { navVariants } from "../utils/motion"

const Home = () => {
  return (
    <main className='min-h-screen '>
     
    <Navbar></Navbar>
    <Gretting></Gretting>
    <About></About>
    <Experiencie></Experiencie>
    <Proyects></Proyects>
    <Skills></Skills>
 <Contact></Contact>
    <Footer></Footer>
    
   
    </main>
  )
}

export default Home