"use client";

import useScrollDirection from "@/hooks/useScrollDirection";
import ThemeSwitcher from "@/component/ThemeSwitcher";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbHomeUp, TbX } from "react-icons/tb";
import { navVariants } from "../utils/motions";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Contents from "@/Shared";
import S from "@/styles";

export default function NavBar() {
  const scrollDirection = useScrollDirection();
  const [arrow, setArrow] = useState(false);
  const [open, setOpen] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleBurger = () => {
    setOpen((prev) => !prev);
    setArrow(false);
  };
  const handleLogo = (el: boolean) => {
    setLogo(el);
  };

  useEffect(() => {
    setOpen(false);
    setArrow(false);
  }, [scrollDirection]);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={` ${
        scrollDirection === "down" ? "-top-20 sm:-top-36" : "top-0"
      }
       ${S.flxC}${S.gradient}  w-full fixed z-50 p-2`}
    >
      <div className={`${S.flxBC} w-full sm:w-5/6 `}>
        {!open && (
          <div
            className={`${S.flxC} h-20 w-20 sm:h-32 sm:w-32`}
            onMouseOver={() => handleLogo(true)}
            onMouseLeave={() => handleLogo(false)}
          >
            <a className="hover:scale-125" href="#Home">
              {logo ? (
                <TbHomeUp size={30} />
              ) : (
                <img
                  src="/Logo-1.png"
                  alt="Logo"
                  className="sm:h-180 sm:w-180"
                />
              )}
            </a>
          </div>
        )}
        <div className={`${open && "w-full"} ${S.flxBC} flex-col`}>
          <div className={`${S.flxC} w-full cursor-pointer`}>
            {open ? (
              <div className={`${S.flxBC} w-full sm:w-2/3 p-2`}>
                <ThemeSwitcher />
                <TbX
                  onClick={handleBurger}
                  size={25}
                  color="#f87171"
                  className="h-8 w-8 p-1 hover:scale-110 border border-gray-500 rounded-md"
                />
              </div>
            ) : (
              <div
                onClick={handleBurger}
                onMouseOver={() => setArrow(true)}
                onMouseLeave={() => setArrow(false)}
                className={`  ${S.flxC} h-10 w-25 p-2 lg:hidden`}
              >
                <p className="font-bold text-lg border-[#334155] dark:border-[#cbd5e1] hover:border-b-[1px] hover:scale-105">
                  Services
                </p>
                <RiArrowDropDownLine
                  size={30}
                  color="orange"
                  className={`${
                    arrow && " transition ease-in-out translate-y-1.5"
                  }`}
                />
              </div>
            )}
          </div>
          <ul
            className={` ${
              !open && "hidden"
            } flex flex-col gap-1 font-semibold`}
          >
            {Contents.navList.map((nav, idx) => (
              <li
                key={idx}
                onClick={handleBurger}
                className="hover:border-b-[1px] p-2 hover:scale-110 border-[#334155] dark:border-[#cbd5e1]"
              >
                <a className="p-2" href={`#${nav[0]}`}>
                  {nav[1]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
