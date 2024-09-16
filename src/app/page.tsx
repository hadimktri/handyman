import Plumbing from "./plumbing/page";
import Electrician from "./electrition/page";
import Carpentry from "./carpentry/page";
import DoorsWindows from "./doorwindow/page";
import WallFloor from "./wallfloor/page";
import PaintingStaining from "./paintingstaining/page";
import MountingsAssemblies from "./mountingassemblies/page";
import SeniorsMobility from "./safetyseniors/page";
import CarDetailing from "./cardetailing/page";
import CarRepair from "./carrepair/page";
import Intro from "./intro/page";
import { div } from "framer-motion/client";

export default function LetProFixIt() {
  return (
    <div className=" w-full  lg:left-80 ">
      <div className=" w-full  lg:left-80 ">
        {/* <div className=" w-full text-sm md:text-base px-4 sm:px-16 md:ml-24"> */}
        <div id="intro">
          <Intro />
        </div>
        <div id="plumbing">
          <Plumbing />
        </div>
        <div id="electrician">
          <Electrician />
        </div>
        <div id="carpentry">
          <Carpentry />
        </div>
        <div id="doorwindow">
          <DoorsWindows />
        </div>
        <div id="wallfloor">
          <WallFloor />
        </div>
        <div id="painting">
          <PaintingStaining />
        </div>
        <div id="mounting">
          <MountingsAssemblies />
        </div>
        <div id="senior">
          <SeniorsMobility />
        </div>
        <div id="cardetail">
          <CarDetailing />
        </div>
        <div id="carrepair">
          <CarRepair />
        </div>
      </div>
    </div>
  );
}
