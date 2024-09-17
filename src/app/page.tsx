import MountingsAssemblies from "./mountingassemblies/page";
import PaintingStaining from "./paintingstaining/page";
import SeniorsMobility from "./safetyseniors/page";
import CarDetailing from "./cardetailing/page";
import DoorsWindows from "./doorwindow/page";
import Electrician from "./electrition/page";
import CarRepair from "./carrepair/page";
import Carpentry from "./carpentry/page";
import WallFloor from "./wallfloor/page";
import Plumbing from "./plumbing/page";
import Intro from "./intro/page";
import S from "@/styles";

export default function LetProFixIt() {
  return (
    <div className={`${S.flxC} flex-col w-full lg:ml-72 lg:mr-12 p-2 gap-10`}>
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
  );
}
