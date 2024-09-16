"use client";

import { motion } from "framer-motion";
import { navVariants } from "@/utils/motions";

import Contents from "@/Shared";
import S from "@/styles";

export default function SideNavBar() {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="hidden fixed top-10 lg:flex flex-col justify-center items-start h-full "
    >
      <div className={`${S.flxBC}  gap-1 `}>
        <ul
          className={`flex flex-col gap-1 `}
        >
          {Contents.navList.map((nav, idx) => (
            <li
              key={idx}
              className="p-2 hover:scale-110 border-[#334155] dark:border-[#cbd5e1]"
            >
              <a className="p-2 hover:border-b-[1px] border-slate-600" href={`#${nav[0]}`}>
                {nav[1]}
              </a>
            </li>
          ))}
        </ul>
        <div className="h-[300px] w-5 border-r-[1px] border-slate-700" />
      </div>
    </motion.div>
  );
}
