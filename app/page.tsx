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
    <main>
      <Navbar></Navbar>
      <Gretting></Gretting>
      <About></About>
      {/* <Experiencie></Experiencie> */}
      <Proyects></Proyects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
};

export default Home;
