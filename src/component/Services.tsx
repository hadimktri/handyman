"use client";

import { RiArrowDropRightLine } from "react-icons/ri";
import Animate from "@/utils/Animate";
import Image from "next/image";
import S from "@/styles";
import { TypingText } from "@/utils/CustomTexts";

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
    <div className={`flex flex-col w-full border-t-2 gap-8 py-6 mt-4`}>
      <Animate>
        <div className={`w-full flex items-center md:text-xl`}>
          <span className={S.highLight}>{id}-&nbsp;</span>
          <TypingText title={title} />
          <div className="hidden sm:block border-b-[1px] border-gray-700 w-32 m-3 mb-1" />
          <div className="hidden sm:block w-1 h-1 bg-[#8b73a5] rounded-full mt-2" />
        </div>
      </Animate>

      <div className={`${S.flxBC} flex-col sm:flex-row w-full`}>
        <div className={`w-full sm:w-1/3 self-start`}>
          <Animate>
            <ul className="flex flex-col">
              {services.map((item, idx) => (
                <li key={idx}>
                  <div className="flex items-center">
                    <RiArrowDropRightLine size={30} color="#71717a" />
                    <h2>{item}</h2>
                  </div>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div
          className={`${S.flxBC} flex-col w-full sm:w-2/3 sm:grid sm:grid-flow-row sm:grid-cols-2 gap-3`}
        >
          {images.map((item, idx) => (
            <div key={idx} className="py-2">
              <Image
                alt={item}
                src={`/${item}.jpg`}
                width={800}
                height={100}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
