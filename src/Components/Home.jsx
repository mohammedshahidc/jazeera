import React, { useState, useEffect } from "react";
import { Calendar, Users, ChevronDown } from "lucide-react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import hm_banner01 from "../images/hm_banner01.jpg";
import hm_banner02 from "../images/hm_banner02.jpg";
import hm_banner03 from "../images/hm_banner03.jpg";



const Home = () => {
  const images = [hm_banner01, hm_banner02, hm_banner03];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("create");


  const [clickNationality, setClickNationality] = useState(false);
  const [clickClass, setClickClass] = useState(false);
  const [nationality, setNationality] = useState("India");
  const [classs, setClass] = useState("Economy");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const handleNationality = () => {
    setClickNationality(!clickNationality);
    setClickClass(false); 
  };

  const handleClassy = () => {
    setClickClass(!clickClass);
    setClickNationality(false); 
  };


  return (
    <div
      className="relative pt-16 bg-cover bg-center min-h-screen flex flex-col text-white transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 sm:mt-22 md:px-16 lg:px-24">
        {/* Hero Text */}
        <div className="mb-8 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-blue-400">Journey</span>{" "}
            <span className="text-blue-900">to</span> <br />
            <span className="text-blue-900">Explore</span>{" "}
            <span className="text-blue-400">World</span>
          </h1>
          <p className="md:text-sm text-gray-900 font-medium">
            Choose from over 1.5 million hotels & 450+ airlines
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-blue-700 bg-opacity-95 rounded-lg shadow-2xl p-6 max-w-7xl relative">
          {/* Tabs */}
          <div className="flex gap-8 mb-8 border-b border-blue-300 pb-1">
            {["create", "fixed", "static", "manage"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-base font-semibold pb-1 transition-all ${
                  activeTab === tab
                    ? "text-white border-b-4 border-yellow-400"
                    : "text-blue-200 hover:text-white"
                }`}
              >
                {tab === "create"
                  ? "Create Your Package"
                  : tab === "fixed"
                  ? "Fixed Departure"
                  : tab === "static"
                  ? "Static Packages"
                  : "Manage My Booking"}
              </button>
            ))}
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end relative">
            {/* Start Date */}
            <div>
              <div className="relative border border-blue-500 rounded-lg p-4 flex items-center gap-3 cursor-pointer transition">
                <label className="absolute -top-4 left-4 bg-blue-800 px-2 text-sm font-medium text-white">
                  Start Date
                </label>
                <Calendar className="w-5 h-5 text-white" />
                <span className="text-white font-medium">18 Jun 2025</span>
              </div>
            </div>

            {/* Guest & Room */}
            <div>
              <div className="relative border border-blue-500 rounded-lg p-4 flex items-center gap-3 cursor-pointer transition">
                <label className="absolute -top-4 left-4 bg-blue-800 px-2 text-sm font-medium text-white">
                  Guest & Room
                </label>
                <Users className="w-5 h-5 text-white" />
                <span className="text-white font-medium">1 Room, 2 Adult</span>
              </div>
            </div>

            {/* Nationality */}
<div className="relative">
  <div
    onClick={handleNationality}
    className="border border-blue-500 rounded-lg p-4 flex items-center justify-between cursor-pointer transition"
  >
    <label className="absolute -top-4 left-4 bg-blue-800 px-2 text-sm font-medium text-white">
      Nationality
    </label>
    <span className="text-white font-medium">{nationality}</span>
    <ChevronDown className="w-5 h-5 text-white" />
  </div>

  {clickNationality && (
    <div className="absolute top-full mt-2 left-0 w-full bg-white text-black rounded-lg shadow-lg z-20">
      {["India", "Kuwait", "UAE"].map((country) => (
        <div
          key={country}
          onClick={() => {
            setNationality(country);
            setClickNationality(false);
          }}
          className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${
            nationality === country ? "bg-blue-200 font-semibold" : ""
          }`}
        >
          {country}
        </div>
      ))}
    </div>
  )}
</div>

{/* Class */}
<div className="relative">
  <div
    onClick={handleClassy}
    className="border border-blue-500 rounded-lg p-4 flex items-center justify-between cursor-pointer transition"
  >
    <label className="absolute -top-4 left-4 bg-blue-800 px-2 text-sm font-medium text-white">
      Class
    </label>
    <span className="text-white font-medium">{classs}</span>
    <ChevronDown className="w-5 h-5 text-white" />
  </div>

  {clickClass && (
    <div className="absolute top-full mt-2 left-0 w-full bg-white text-black rounded-lg shadow-lg z-20">
      {["Economy", "Premium Economy", "Business", "First Class"].map((item) => (
        <div
          key={item}
          onClick={() => {
            setClass(item);
            setClickClass(false);
          }}
          className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${
            classs === item ? "bg-blue-200 font-semibold" : ""
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  )}
</div>

            {/* Search Button */}
            <div className="mt-8 flex justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-lg flex items-center gap-2 transition shadow-lg transform hover:scale-105">
                <span className="text-2xl">🔍</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-3 transition z-20"
        onClick={() => handleArrowClick("left")}
      >
        <IoIosArrowBack className="text-gray-200 text-2xl" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-3 transition z-20"
        onClick={() => handleArrowClick("right")}
      >
        <IoIosArrowForward className="text-gray-200 text-2xl" />
      </button>
    </div>
  );
};

export default Home;
