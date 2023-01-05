import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { fadeIn, zoomIn } from "../../utils/motion";
import { TypingText } from "./CustomTexts";

interface Props {
  icon: IconType;
  index: number;
  color:string;
  name:string
}
const TechCards = ({ icon, index,color,name }: Props) => {
  return (
    <motion.div
      variants={zoomIn(index * 0.1, 0.5)}
      // {fadeIn("up", "spring", index*0.1, 1)}
      className="group flex  flex-col items-center gap-4"
    >
      {icon({
        size: 70,
        color,
        style:{margin:10}
      })}
      <TypingText
      title={name}
      textStyles="group-hover:text-white text-transparent"
      />
      
    </motion.div>
  );
};

export default TechCards;

