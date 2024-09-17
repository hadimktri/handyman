"use client";
9;

import {  TbBrandLinkedin } from "react-icons/tb";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motions";
import S from "@/styles";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";

export default function SideBar() {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="hidden fixed right-0 w-24 lg:flex flex-col justify-end items-center h-screen self-start"
    >
      <h2 className="-rotate-90 tracking-widest">FiND US</h2>
      <div className={`${S.flxC} flex-col mt-32 gap-10`}>
        <a
          className=" hover:scale-125"
          href=""
          target="_blank"
        >
          <AiFillFacebook size={30} />
        </a>
        <a
          className=" hover:scale-125"
          href=""
          target="_blank"
        >
          <AiOutlineInstagram size={30} />
        </a>
        <div className={`${S.flxC} flex-col`}>
          <div className="w-1 h-1 bg-slate-300 rounded-full ml-[0.5px] mb-2" />
          <div className="h-[100px] border-r-[1px] border-slate-700" />
        </div>
      </div>
    </motion.div>
  );
}
