"use client";

import useScrollDirection from "@/hooks/useScrollDirection";
import ThemeSwitcher from "@/component/ThemeSwitcher";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbHomeUp, TbPhone, TbX } from "react-icons/tb";
import { useState, useEffect } from "react";
import Contents from "@/Shared";
import S from "@/styles";
import { BsTools } from "react-icons/bs";
import { div } from "framer-motion/client";
export default function NavBar() {
  const scrollDirection = useScrollDirection();
  const [arrow, setArrow] = useState(false);
  const [open, setOpen] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleService = () => {
    setOpen((prev) => !prev);
    setArrow(false);
    setTimeout(() => {
      setOpen(false);
    }, 30000);
  };
  const handleLogo = () => {
    setLogo((prev) => !prev);
    setTimeout(() => {
      setLogo(false);
    }, 750);
    setOpen(false);
  };

  useEffect(() => {
    setArrow(false);
  }, [scrollDirection]);

  return (
    <nav
      className={`${S.flxC} flex-col ${S.gradient} ${
        scrollDirection === "down" ? "-top-20 sm:-top-36" : "top-0"
      } fixed z-50 w-full scroll-smooth`}
    >
      <div className={`${S.flxBC} w-11/12 h-[95px] md:h-[160px]`}>
        <div className={` ${S.flxBC} `}>
          <div
            onClick={() => handleLogo()}
            className={` ${S.flxBC} cursor-pointer h-[60px] w-[100px] md:h-[80px] md:w-[130px]`}
          >
            <button className="">
              <a href="#Home">
                {!logo ? (
                  <div>
                    <p className={`font-extrabold text-3xl md:text-5xl w-fit`}>
                      TDH
                    </p>
                    <p
                      className={`ml-5 md:ml-9 font-bold text-sm md:text-xl w-fit`}
                    >
                      service
                    </p>
                  </div>
                ) : (
                  <TbHomeUp size={40} className="ml-8" />
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
            <BsTools size={25} className={`hidden sm:flex  ${S.secondary}`} />
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
                className="hover:border-b-[1px] hover:scale-110 border-slate-500"
              >
                <a className="p-2" href={`#${nav[0]}`}>
                  {nav[1]}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={` ${!open && "hidden"} sm:self-start mb-10 sm:mt-6`}>
          <h3 className={`font-semibold py-5 sm:pt-0 ${S.secondary} `}>
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
                className="hover:border-b-[1px] hover:scale-110 border-slate-500"
              >
                <a className="p-2" href={`#${nav[0]}`}>
                  {nav[1]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
