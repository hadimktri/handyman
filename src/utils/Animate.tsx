import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeIn, staggerContainer } from "./motions";
import { TypingText } from "./CustomTexts";
import S from "@/styles";

export default function Animate({
  children,
  title,
  number,
}: {
  children: ReactNode;
  title: string;
  number: number;
}) {
  return (
    <motion.div
      variants={staggerContainer(0, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${S.flxC} w-full flex-col`}
    >
      <div className={`${S.flxC} md:text-xl flex self-start `}>
        <span className={S.highLight}>{number}-</span>
        <TypingText title={title} />
        <div className="hidden sm:block border-b-[1px] border-gray-700 w-32 m-3 mb-1" />
        <div className="hidden sm:block w-1 h-1 bg-[#8b73a5] rounded-full mt-2" />
      </div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 0.8)}
        className={`py-8 md:py-16 w-full lg:w-10/12`}
      >
        <div>{children}</div>
      </motion.div>
    </motion.div>
  );
}
