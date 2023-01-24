"use client";
import {
  About,
  Gretting,
  Navbar,
  Experiencie,
  Footer,
  Proyects,
  Skills,
  Contact,
} from "../components";
import "../styles/globals.css";

const Home = () => {
  return (
    <main className=" overflow-hidden    text-white">
      <Navbar></Navbar>
      <div className="container mx-auto px-4">
      <Gretting></Gretting>
      <About></About> 
       {/* <Experiencie></Experiencie> */}
      <Proyects></Proyects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
      </div>
    </main>
  );
};

export default Home;
