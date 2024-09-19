"use client";

import { motion } from "framer-motion";
import { navVariants } from "@/utils/motions";
import Contents from "@/Shared";
import S from "@/styles";
import { TbHomeUp } from "react-icons/tb";

export default function SideNavBar() {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="hidden fixed lg:flex flex-col justify-center items-start self-start h-screen"
    >
      <div className={`${S.flxBC} gap-1`}>
        <div className={`flex flex-col gap-2`}>
          <h2 className="font-bold tracking-wide text-xl ml-4 mt-32">
            Services
          </h2>
          <ul className={`flex flex-col gap-1 `}>
            {Contents.navList.map((nav, idx) => (
              <li
                key={idx}
                className="p-2 hover:scale-110 border-[#334155] dark:border-[#cbd5e1]"
              >
                <a
                  className="p-2 hover:border-b-[1px] border-slate-600"
                  href={`#${nav[0]}`}
                >
                  {nav[1]}
                </a>
              </li>
            ))}
            {Contents.carNavList.map((nav, idx) => (
              <li
                key={idx}
                className="p-2 hover:scale-110 border-[#334155] dark:border-[#cbd5e1]"
              >
                <a
                  className="p-2 hover:border-b-[1px] border-[#334155] dark:border-[#cbd5e1]"
                  href={`#${nav[0]}`}
                >
                  {nav[1]}
                </a>
              </li>
            ))}
            <li className="mt-4 hover:scale-125 self-center">
              <a href="#Home">
                <TbHomeUp size={25} color="#cbdbc1" />
              </a>
            </li>
          </ul>
        </div>
        <div className="h-[300px] w-5 border-r-[1px] border-slate-700" />
      </div>
    </motion.div>
  );
}
