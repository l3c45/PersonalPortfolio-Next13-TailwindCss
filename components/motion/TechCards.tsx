import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { fadeIn, zoomIn } from "../../utils/motion";
import { TypingText } from "./CustomTexts";

interface Props {
  icon: IconType;
  index: number;
  color: string;
  name: string;
}
const TechCards = ({ icon, index, color, name }: Props) => {
  return (
    <motion.div
      variants={zoomIn(index * 0.1, 0.5)}
      // {fadeIn("up", "spring", index*0.1, 1)}
      className="group flex  flex-col items-center gap-4"
    >
      {icon({
        size: 70,
        color,
        style: { margin: 10 },
      })}
      <p className=" select-none group-hover:text-white sm:text-transparent text-xl">
        {name}
      </p>
    </motion.div>
  );
};

export default TechCards;
