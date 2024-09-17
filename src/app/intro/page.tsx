"use client";

import { slideIn, staggerContainer, textVariant } from "@/utils/motions";
import { motion } from "framer-motion";
import Contents from "@/Shared";
import S from "@/styles";
import { TbPhone } from "react-icons/tb";

export default function Intro() {
  return (
    <div className={`${S.flxC} flex-col w-full`}>
      <div className="p-2 sm:w-3/4">
        <div id="Home" className="h-28 md:h-56" />
        <motion.div
          variants={staggerContainer(0, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className=" md:mb-24 "
        >
          <motion.h3 variants={textVariant(1.1)} className="text-lg">
            Hello, I am your Handyman.
          </motion.h3>
          <motion.h1
            variants={textVariant(1.2)}
            className={`${S.textGradientAmber} font-extrabold text-3xl  md:text-6xl mt-6 w-fit`}
          >
            LET PRO FIX IT.
          </motion.h1>
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className={`py-8 md:py-16 relative`}
          >
            <h1 className=" text-slate-700 dark:text-slate-200 font-bold text-2xl md:text-4xl">
              We fix and build things here.
            </h1>
            <div className={`flex mt-4`}>
              <TbPhone size={35} color="#cbdbc1" className={`self-end`} />
              <h3 className=" text-orange-400 dark:text-orange-400 font-bold text-2xl md:text-4xl">
                : (604)-716-3554
              </h3>
            </div>
            <h2 className=" md:w-2/3 mt-6 md:mt-8">{Contents.INTRO}</h2>
          </motion.div>
        </motion.div>
        {/* <div id="plumbing" className="h-24" /> */}
      </div>
    </div>
  );
}
