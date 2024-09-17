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
    setOpen(false);
    setArrow(false);
  }, [scrollDirection]);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${S.flxC} flex-col ${S.gradient} ${
        scrollDirection === "down" ? "-top-32" : "top-0"
      } fixed z-50 w-full `}
    >
      <div className={`${S.flxBC} w-11/12 h-[80px] lg:h-[120px]`}>
        <div className={` ${S.flxBC} w-1/3 `}>
          <div className="w-32">
            <div
              onMouseOver={() => handleLogo(true)}
              onMouseLeave={() => handleLogo(false)}
              className={` ${S.flxBC} cursor-pointer h-[60px]`}
            >
              <a href="#Home">
                {logo ? (
                  <TbHomeUp size={25} color="#cbdbc1" className="ml-8" />
                ) : (
                  <img
                    src="/Logo.png"
                    alt="Logo"
                    className="h-[60px] w-[110px] "
                  />
                )}
              </a>
            </div>
          </div>
        </div>

        <div className={` ${S.flxBC}  w-7/12 sm:w-2/3`}>
          <div
            onClick={handleService}
            onMouseOver={() => setArrow(true)}
            onMouseLeave={() => setArrow(false)}
            className={` ${S.flxBC} cursor-pointer hover:scale-105`}
          >
            <BsTools size={25} color="#fb923c" className={`hidden sm:flex `} />
            <h2 className="sm:ml-4 font-bold tracking-wide dark:text-[#cbdbc1] text-[#6a7b83] text-lg sm:text-xl">
              Services
            </h2>

            {open ? (
              <TbX color="#f87171" className="h-7 w-7 p-1 hover:scale-110" />
            ) : (
              <RiArrowDropDownLine
                size={30}
                color="#b2946e"
                className={`${
                  arrow && "transition ease-in-out translate-y-1"
                } h-7 w-7 hover:scale-110`}
              />
            )}
          </div>
          <div className={`hidden sm:flex `}>
            <TbPhone size={25} color="#cbdbc1" className={``} />
            <h4 className=" text-orange-400 dark:text-orange-400 font-bold md:text-xl tracking-widest">
              : (604)-716-3554
            </h4>
          </div>
          <div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
      <div
        className={`${S.flxC} flex-col sm:flex-row sm:justify-around w-11/12 lg:w-3/4 self-start`}
      >
        <div className={` ${!open && "hidden"}  sm:h-screen mt-2`}>
          <h3 className="text-orange-400 font-semibold py-5">
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
          <h3 className="text-orange-400 font-semibold py-5">
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

// <motion.nav
// variants={navVariants}
// initial="hidden"
// whileInView="show"
// className={`${S.flxC} ${S.gradient} ${
//   scrollDirection === "down" ? "-top-20 sm:-top-36" : "top-0"
// } w-full fixed z-50 border-b-[1px] dark:border-slate-700 `}
// >

// <div className={`${S.flxBC} w-11/12`}>

// {!open && (
//   <div
//     className={`${S.flxC} h-20 w-20 sm:h-32 sm:w-32`}
//     onMouseOver={() => handleLogo(true)}
//     onMouseLeave={() => handleLogo(false)}
//   >
//     <a className="hover:scale-125" href="#Home">
//       {logo ? (
//         <TbHomeUp size={30} color="#cbdbc1" />
//       ) : (
//         <img
//           src="/Logo-1.png"
//           alt="Logo"
//           className="sm:h-180 sm:w-180"
//         />
//       )}
//     </a>
//   </div>
// )}

//   <div className={`${open && "w-full py-5"} ${S.flxBC} flex-col `}>
//     <div className={`${S.flxC} `}>
//       {open ? (
//         <div className={`${S.flxBC} w-full sm:w-2/3`}>
//           {/* <ThemeSwitcher /> */}
//           <h2 className="font-bold tracking-wide text-[#cbdbc1] text-xl">
//             Services
//           </h2>
//           <TbX
//             onClick={handleService}
//             size={25}
//             color="#f87171"
//             className="h-8 w-8 p-1 hover:scale-110 border border-gray-500 rounded-md"
//           />
//         </div>
//       ) : (
//         <div className={` flex gap-5 lg:gap-10`}>
//           <div className={` ${S.flxC} flex-col sm:flex-row gap-1`}>
//             <h2 className="font-semibold text-lg sm:text-xl text-[#b2946e] lg:text-2xl">
//               604-716-3554
//             </h2>
//             <div
//               onClick={handleService}
//               onMouseOver={() => setArrow(true)}
//               onMouseLeave={() => setArrow(false)}
//               className={`w-full ${S.flxBC} cursor-pointer`}
//             >
//               <h2 className="font-bold tracking-wide text-[#cbdbc1] text-lg sm:text-xl border-[#334155] dark:border-[#cbd5e1] hover:border-b-[1px] hover:scale-105">
//                 Services
//               </h2>
//               <RiArrowDropDownLine
//                 size={30}
//                 color="orange"
//                 className={`${
//                   arrow && "transition ease-in-out translate-y-1.5"
//                 }`}
//               />
//             </div>
//           </div>
//           <ThemeSwitcher />
//         </div>
//       )}
//     </div>
//     <ul
//       className={` ${
//         !open && "hidden"
//       } flex flex-col gap-3 font-semibold py-8`}
//     >
//       {Contents.navList.map((nav, idx) => (
//         <li
//           key={idx}
//           onClick={handleService}
//           className="hover:border-b-[1px] hover:scale-110 border-[#334155] dark:border-[#cbd5e1]"
//         >
//           <a className="p-2" href={`#${nav[0]}`}>
//             {nav[1]}
//           </a>
//         </li>
//       ))}
//     </ul>
//   </div>

// </div>
// </motion.nav>
