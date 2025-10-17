import React from "react";
import banner from "../images/hm_addbanner.jpg";

const Bus = () => {
  return (
    <div className="w-screen px-12">
      <div
        className="w-full h-[400px] bg-contain bg-center bg-no-repeat rounded-xl shadow-lg"
        style={{ backgroundImage: `url(${banner})` }}
      >
      
      </div>
    </div>
  );
};

export default Bus;
