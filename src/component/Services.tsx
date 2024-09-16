"use client";

import { RiArrowDropRightLine } from "react-icons/ri";
import Animate from "@/utils/Animate";
import Image from "next/image";

export default function Services({
  id,
  title,
  services,
  images,
}: {
  id: number;
  title: string;
  services: string[];
  images: string[];
}) {
  return (
    <div >
      <Animate title={title} number={id}>
        <ul className="flex flex-col gap-8 md:gap-8">
          {services.map((item, idx) => (
            <li key={idx} className="flex flex-col gap-5 ">
              <div className="flex flex-col lg:flex-row ">
                <div className="flex items-center">
                  <RiArrowDropRightLine size={30} color="#71717a" />
                  <h2 className="text-lg md:text-xl font-extrabold">{item}</h2>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Animate>
      <div className="flex flex-col justify-center items-center">
        {images.map((item, idx) => (
          <div key={idx} className="py-2">
            <Image
              alt={item}
              src={`/${item}.jpg`}
              width={350}
              height={100}
              priority
            />
          </div>
        ))}
      </div>
      <div id="" className="h-24" />
    </div>
  );
}
