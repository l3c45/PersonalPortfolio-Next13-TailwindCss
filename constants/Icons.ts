import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiArduino,
  SiCss3,
  SiExpress,
  SiExpo,
  SiFirebase,
  SiMaterialui,
  SiNodedotjs,
  SiMongodb,
  SiReactrouter,
  SiTrello,
} from "react-icons/si";
import { GrStorage } from "react-icons/gr";
import { DiScrum } from "react-icons/di";
import { TbBrandNextjs, TbApi, TbBrandReactNative } from "react-icons/tb";
import { IconType } from "react-icons";

interface TechsObj {
  [index: number]: {
    icon: IconType;
    color: string;
    name: string;
  };
}

export const techsObj: TechsObj = {
  0: { icon: SiJavascript, color: "#FFBF00", name: "JavaScript" },
  1: { icon: SiTypescript, color: "#007acc", name: "Typescript" },
  2: { icon: SiReact, color: "#61DBFB", name: "ReactJS" },
  3: { icon: TbBrandNextjs, color: "#000", name: "NextJS" },
  4: { icon: TbBrandReactNative, color: "#61DBFB", name: "React Native" },
  5: { icon: SiExpo, color: "#808080", name: "Expo" },
  6: { icon: SiNodedotjs, color: "#3c873a", name: "NodeJs" },
  7: { icon: SiExpress, color: "#68A063", name: "Express" },
  8: { icon: SiFirebase, color: "#FFCB2B", name: "Firebase" },
  9: { icon: SiMongodb, color: "#589636", name: "MongoDB" },
  10: { icon: SiArduino, color: "#038C8C", name: "Arduino" },
  11: { icon: SiCss3, color: "#264de4", name: "Css3" },
  12: { icon: SiTailwindcss, color: "#61DBFB", name: "TailwindCss" },
  13: { icon: SiMaterialui, color: "#264de4", name: "MaterialUi" },
  14: { icon: SiReactrouter, color: "#800000", name: "React Router" },
  16: { icon: GrStorage, color: "#808080", name: "LocalStorage" },
  17: { icon: DiScrum, color: "#589636", name: "SCRUM" },
  18: { icon: SiTrello, color: "#264de4", name: "Trello" },
  19: { icon: TbApi, color: "#808080", name: "Api" },
};
