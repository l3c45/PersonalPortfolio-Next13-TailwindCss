'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../../utils/motion';

interface Props {
  title:string,
  textStyles:string
}

export const TypingText = ({ title, textStyles }:Props) => (
  <motion.p
    variants={textContainer}
    className={`font-normal   ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter ===" "?'\u00A0':letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }:Props) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px]  md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
