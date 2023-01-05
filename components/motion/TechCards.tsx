import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiArduino,
  SiAutodesk,
  SiCss3,
  SiExpress,
  SiExpo,
  SiFirebase,
  SiMaterialui,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { fadeIn } from "../../utils/motion";



const TechCards = ({index}:number) => {
  const tech = [
    SiJavascript,
    SiTypescript,
    SiReact,
    SiTailwindcss,
    SiArduino,
    SiAutodesk,
    SiCss3,
    SiExpress,
    SiExpo,
    SiFirebase,
    SiMaterialui,
    SiNodedotjs,
    SiMongodb,
    TbBrandNextjs,
    TbBrandReactNative,
  ];
  return (
    <motion.div
      variants={fadeIn("up", "spring", index*0.1, 1)}
      className="flex md:flex-row flex-col gap-4"
    >
      
      {()=>`<${tech[index]}/>` }
   
    </motion.div>
  );
};

export default TechCards;

{
  /* <SiJavascript className="text-6xl m-5 text-amber-400"></SiJavascript>
<SiTypescript className="text-6xl m-5 text-[#007acc]"></SiTypescript>
<SiReact className="text-6xl m-5 text-[#61DBFB] "></SiReact>
<SiTailwindcss className="text-6xl m-5 text-[#61DBFB]"></SiTailwindcss>
<SiArduino className="text-6xl m-5 text-[#038C8C]"></SiArduino>
<SiCss3 className="text-6xl m-5 text-[#264de4]"></SiCss3>
<SiExpress className="text-6xl m-5 text-[#68A063]"></SiExpress>
<SiExpo className="text-6xl m-5 text-[#808080]"></SiExpo>
<SiFirebase className="text-6xl m-5 text-[#FFCB2B]"></SiFirebase>
<SiMaterialui className="text-6xl m-5 text-[#264de4]"></SiMaterialui>
<SiNodedotjs className="text-6xl m-5 text-[#3c873a]"></SiNodedotjs>
<SiMongodb className="text-6xl m-5 text-[#589636]"></SiMongodb>
<TbBrandNextjs className="text-6xl  m-5 text-[#000]"></TbBrandNextjs>
<TbBrandReactNative className="text-6xl m-5  text-[#61DBFB]"></TbBrandReactNative> */
}
