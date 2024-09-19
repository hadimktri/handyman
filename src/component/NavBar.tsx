"use client";

import useScrollDirection from "@/hooks/useScrollDirection";
import ThemeSwitcher from "@/component/ThemeSwitcher";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbHomeUp, TbPhone, TbX } from "react-icons/tb";
import { navVariants } from "../utils/motions";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Contents from "@/Shared";
import S from "@/styles";
import { BsTools } from "react-icons/bs";

export default function NavBar() {
  const scrollDirection = useScrollDirection();
  const [arrow, setArrow] = useState(false);
  const [open, setOpen] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleService = () => {
    setOpen((prev) => !prev);
    setArrow(false);
  };
  const handleLogo = (el: boolean) => {
    setLogo(el);
  };

  useEffect(() => {
    setArrow(false);
  }, [scrollDirection]);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${S.flxC} flex-col ${S.gradient} ${
        scrollDirection === "down" ? "-top-20 sm:-top-28" : "top-0"
      } fixed z-50 w-full `}
    >
      <div className={`${S.flxBC} w-11/12 h-[80px] lg:h-[120px]`}>
        <div className={` ${S.flxBC} w-1/3 `}>
          <div className="w-32">
            <button
              onMouseOver={() => handleLogo(true)}
              onMouseLeave={() => handleLogo(false)}
              className={` ${S.flxBC} cursor-pointer h-[60px]`}
            >
              <a href="#Home">
                {!logo ? (
                  <img
                    src="/Logo.png"
                    alt="Logo"
                    className="h-[50px] w-[100px] "
                  />
                ) : (
                  <TbHomeUp size={25} className="ml-8" />
                )}
              </a>
            </button>
          </div>
        </div>

        <div className={` ${S.flxBC}  w-7/12 sm:w-2/3`}>
          <button
            onClick={handleService}
            onMouseOver={() => setArrow(true)}
            onMouseLeave={() => setArrow(false)}
            className={` ${S.flxBC} cursor-pointer hover:scale-105`}
          >
            <BsTools size={25}  className={`hidden sm:flex  ${S.secondary}`} />
            <h2 className="sm:ml-4 font-bold tracking-wide text-lg sm:text-xl">
              Services
            </h2>

            {open ? (
              <TbX color="#f87171" className="h-7 w-7 p-1 hover:scale-110" />
            ) : (
              <RiArrowDropDownLine
                size={30}
                
                className={`${
                  arrow && "transition ease-in-out translate-y-1 "
                } ${S.secondary} h-7 w-7 hover:scale-110`}
              />
            )}
          </button>
          <div className={`hidden sm:flex `}>
            <TbPhone size={25} className={``} />
            <h4
              className={`  font-bold md:text-xl tracking-widest ${S.secondary} `}
            >
              : (604)-716-3554
            </h4>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
      <div
        className={`${S.flxC} flex-col sm:flex-row sm:justify-around w-11/12 lg:w-3/4 self-start`}
      >
        <div className={` ${!open && "hidden"}  sm:h-screen mt-2`}>
          <h3 className={` font-semibold py-5 ${S.secondary} `}>
            Home Repair and Maintenance
          </h3>
          <ul className={`flex flex-col gap-3 font-semibold`}>
            {Contents.navList.map((nav, idx) => (
              <li
                key={idx}
                onClick={handleService}
                className="hover:border-b-[1px] hover:scale-110 border-[#334155] dark:border-[#cbd5e1]"
              >
                <a className="p-2" href={`#${nav[0]}`}>
                  {nav[1]}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={` ${!open && "hidden"} sm:self-start mb-10 sm:mt-6`}>
          <h3 className={`font-semibold py-5 sm:py-0 ${S.secondary} `}>
            Car Repair and Maintenance
          </h3>
          <ul
            className={` ${
              !open && "hidden"
            } flex flex-col gap-3 font-semibold `}
          >
            {Contents.carNavList.map((nav, idx) => (
              <li
                key={idx}
                onClick={handleService}
                className="hover:border-b-[1px] hover:scale-110 border-[#334155] dark:border-[#cbd5e1]"
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
