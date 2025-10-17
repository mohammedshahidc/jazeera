import React from "react";
import holyday01 from "../images/holiday01.jpg";
import holyday02 from "../images/holiday02.jpg";
import holyday03 from "../images/holiday03.jpg";

const HollydayPackage = () => {
  return (
    <div className="w-screen px-14">
      <h1 className="flex item-center justify-center font-bold text-4xl text-blue-800 my-8">
        Holiday Packages
      </h1>
      <div className="w-full p-5 grid grid-col-1 sm:grid-cols-3 gap-12">
        <div
          className="relative h-[350px] bg-cover bg-center rounded-lg opacity-[180] brightness-bottom hover:brightness-90 transition-all shadow-lg"
          style={{ backgroundImage: `url(${holyday01})` }}
        >
          <h1 className="absolute text-white text-xl font-bold bottom-0 left-3 p-5">
            Dubai Holiday
          </h1>
        </div>
        <div
          className="relative h-[350px] bg-cover bg-center rounded-lg brightness-bottom hover:brightness-90 transition-all shadow-lg"
          style={{ backgroundImage: `url(${holyday02})` }}
        >
          <h1 className="absolute text-white text-xl font-bold bottom-0 left-3 p-5">
            Kuwait Holidays{" "}
          </h1>
        </div>
        <div
          className="relative h-[350px] bg-cover bg-center rounded-lg brightness-bottom hover:brightness-90 transition-all shadow-lg"
          style={{ backgroundImage: `url(${holyday03})` }}
        >
          <h1 className="absolute text-white text-xl font-bold bottom-0 left-3 p-5">
            Singapore Holidays
          </h1>
        </div>
      </div>
    </div>
  );
};
export default HollydayPackage;
