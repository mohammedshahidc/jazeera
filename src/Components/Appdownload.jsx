import React from "react";
import app_download from "../Images/app_download.png";
import app_store from "../Images/app_store.png";
import google_play from "../Images/google_play.png";
import qr_code from "../Images/qr_code.png";
const Appdownload = () => {
  return (
    <div className="w-screen h-fit px-8 ">
      <div className=" h-fit mx-18 grid grid-cols-1 sm:grid-cols-[1.5fr_1fr_1fr]">
        <div className="bg-gradient hidden sm:block ">
          <img className=" h-[300px]" src={app_download} alt="app download" />
        </div>
        <div className="relative h-[300px]   ">
          <div className="w-full h-[200px] p-3 absolute bottom-0 bg-gray-200 border-t-1 border-gray-300 border-b-1 border-gray-300">
            <h1 className="flex item-center justify-center font-bold text-xl text-black">
              More ways to get the App
            </h1>
            {/* qr and googpleplay session */}

            <div className="flex item-center justify-center">
              {/* googleplay session */}
              <div className="space-y-3 mt-3">
                <img src={app_store} alt="appstore" />
                <img src={google_play} alt="google pay" />
              </div>
              {/* qr code session */}
              <div className="m-3">
                <img src={qr_code} alt="qr code" />
              </div>
            </div>
          </div>
        </div>
        {/* input session */}
        <div className="relative w-full  h-[300px] flex items-end justify-center">
          <div className="w-full h-[200px] max-w-3xl bg-gray-200 border border-gray-300 rounded-xl p-4 shadow-md">
            <h1 className=" text-xl font-bold text-black mb-4 text-center">
              Sign up for our Newsletter
            </h1>
            <div className="flex w-full  items-center bg-white border border-yellow-500 rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Enter your email"
                className="flex-1  px-2 py-2 outline-none"
              />
              <button className=" bg-yellow-400 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-full transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Appdownload;
