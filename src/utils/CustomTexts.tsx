import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "./motions";

export const TypingText = ({ title }: { title: string }) => (
  <motion.p variants={textContainer}>
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title }: { title: string; textStyles: string }) => (
  <motion.p variants={textVariant2} initial="hidden" whileInView="show">
    {title}
  </motion.p>
);
