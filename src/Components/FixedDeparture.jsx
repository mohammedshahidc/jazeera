import React from "react";
import umrah_pac01 from "../images/umrah_pac01.jpg";
const FixedDeparture = () => {
  return (
    <div className="w-screen px-8">
        <h1 className="flex item-center justify-center font-bold text-4xl text-blue-800 my-8">Fixed Departure</h1>
      <div className="w-full grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-1 border-gray-300">
          {/* Top Section - Image and Upper Content */}
          <div className="w-full flex">
            <div className="relative p-3 w-1/3 h-fit ">
              <img
                src={umrah_pac01}
                alt="Umrah Package"
                className="w-full h-28 object-cover rounded-lg"
              />
            </div>

            {/* Upper Content */}
            <div className="p-4 w-2/3">
              {/* Badges */}
              <div className="flex gap-2 mb-3">
                <span className="px-3 py-1 text-xs font-bold uppercase rounded-md border-2 border-orange-500 bg-orange-50 text-orange-600">
                  GROUP
                </span>
                <span className="px-3 py-1 text-xs font-bold uppercase rounded-md border-2 border-pink-500 bg-pink-50 text-pink-600">
                  FAMILY
                </span>
              </div>

              {/* Package Title */}
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Deluxe Umrah Package
              </h2>
              {/* Amenities Icons */}
              <div className="flex gap-4 mb-3 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Section - Everything Below Amenities */}
          <div className="px-4 pb-4">
            {/* Locations */}
            <div className="text-base text-gray-800 mb-1 font-semibold">
              Makkah(4N) | Madinah(3N)
            </div>

            {/* Duration */}
            <div className="text-sm text-gray-600 mb-4">7 Nights / 8 Days</div>

            {/* Divider */}
            <div className="h-px bg-gray-300 my-4"></div>

            {/* Deal Section */}
            <div className="flex items-start justify-between mb-4">
              <div className="bg-orange-600 text-white px-2 py-1 rounded text-sm font-bold flex items-center gap-1">
                <span>★</span>
                <span>5</span>
              </div>
              <div className="text-right">
                <div className="text-green-600 font-bold text-sm mb-0.5">
                  SUPER DEAL PRICE
                </div>
                <div className="text-gray-600 text-xs">
                  (15 Jul 2025){" "}
                  <span className="text-red-600 font-semibold">
                    Last 1 Seat
                  </span>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="text-right mb-4">
              <div className="text-xs text-gray-500 mb-1">Starts from</div>
              <div className="text-3xl font-bold text-gray-900 leading-none mb-1">
                KWD 80.00
              </div>
              <div className="text-xs text-gray-600">
                Per person on twin sharing
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-blue-700 text-white py-3 px-4 rounded-full text-sm font-bold hover:bg-blue-800 transition-colors">
                Enquire Now
              </button>
              <button className="flex-1 bg-yellow-400 text-gray-900 py-3 px-4 rounded-full text-sm font-bold hover:bg-yellow-500 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-1 border-gray-300">
          {/* Top Section - Image and Upper Content */}
          <div className="w-full flex">
            <div className="relative p-3 w-1/3 h-fit ">
              <img
                src={umrah_pac01}
                alt="Umrah Package"
                className="w-full h-28 object-cover rounded-lg"
              />
            </div>

            {/* Upper Content */}
            <div className="p-4 w-2/3">
              {/* Badges */}
              <div className="flex gap-2 mb-3">
                <span className="px-3 py-1 text-xs font-bold uppercase rounded-md border-2 border-orange-500 bg-orange-50 text-orange-600">
                  GROUP
                </span>
                <span className="px-3 py-1 text-xs font-bold uppercase rounded-md border-2 border-pink-500 bg-pink-50 text-pink-600">
                  FAMILY
                </span>
              </div>

              {/* Package Title */}
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Deluxe Umrah Package
              </h2>
              {/* Amenities Icons */}
              <div className="flex gap-4 mb-3 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Section - Everything Below Amenities */}
          <div className="px-4 pb-4">
            {/* Locations */}
            <div className="text-base text-gray-800 mb-1 font-semibold">
              Makkah(4N) | Madinah(3N)
            </div>

            {/* Duration */}
            <div className="text-sm text-gray-600 mb-4">7 Nights / 8 Days</div>

            {/* Divider */}
            <div className="h-px bg-gray-300 my-4"></div>

            {/* Deal Section */}
            <div className="flex items-start justify-between mb-4">
              <div className="bg-orange-600 text-white px-2 py-1 rounded text-sm font-bold flex items-center gap-1">
                <span>★</span>
                <span>5</span>
              </div>
              <div className="text-right">
                <div className="text-green-600 font-bold text-sm mb-0.5">
                  SUPER DEAL PRICE
                </div>
                <div className="text-gray-600 text-xs">
                  (15 Jul 2025){" "}
                  <span className="text-red-600 font-semibold">
                    Last 1 Seat
                  </span>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="text-right mb-4">
              <div className="text-xs text-gray-500 mb-1">Starts from</div>
              <div className="text-3xl font-bold text-gray-900 leading-none mb-1">
                KWD 80.00
              </div>
              <div className="text-xs text-gray-600">
                Per person on twin sharing
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-blue-700 text-white py-3 px-4 rounded-full text-sm font-bold hover:bg-blue-800 transition-colors">
                Enquire Now
              </button>
              <button className="flex-1 bg-yellow-400 text-gray-900 py-3 px-4 rounded-full text-sm font-bold hover:bg-yellow-500 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-1 border-gray-300">
          {/* Top Section - Image and Upper Content */}
          <div className="w-full flex">
            <div className="relative p-3 w-1/3 h-fit ">
              <img
                src={umrah_pac01}
                alt="Umrah Package"
                className="w-full h-28 object-cover rounded-lg"
              />
            </div>

            {/* Upper Content */}
            <div className="p-4 w-2/3">
              {/* Badges */}
              <div className="flex gap-2 mb-3">
                <span className="px-3 py-1 text-xs font-bold uppercase rounded-md border-2 border-orange-500 bg-orange-50 text-orange-600">
                  GROUP
                </span>
                <span className="px-3 py-1 text-xs font-bold uppercase rounded-md border-2 border-pink-500 bg-pink-50 text-pink-600">
                  FAMILY
                </span>
              </div>

              {/* Package Title */}
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Deluxe Umrah Package
              </h2>
              {/* Amenities Icons */}
              <div className="flex gap-4 mb-3 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Section - Everything Below Amenities */}
          <div className="px-4 pb-4">
            {/* Locations */}
            <div className="text-base text-gray-800 mb-1 font-semibold">
              Makkah(4N) | Madinah(3N)
            </div>

            {/* Duration */}
            <div className="text-sm text-gray-600 mb-4">7 Nights / 8 Days</div>

            {/* Divider */}
            <div className="h-px bg-gray-300 my-4"></div>

            {/* Deal Section */}
            <div className="flex items-start justify-between mb-4">
              <div className="bg-orange-600 text-white px-2 py-1 rounded text-sm font-bold flex items-center gap-1">
                <span>★</span>
                <span>5</span>
              </div>
              <div className="text-right">
                <div className="text-green-600 font-bold text-sm mb-0.5">
                  SUPER DEAL PRICE
                </div>
                <div className="text-gray-600 text-xs">
                  (15 Jul 2025){" "}
                  <span className="text-red-600 font-semibold">
                    Last 1 Seat
                  </span>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="text-right mb-4">
              <div className="text-xs text-gray-500 mb-1">Starts from</div>
              <div className="text-3xl font-bold text-gray-900 leading-none mb-1">
                KWD 80.00
              </div>
              <div className="text-xs text-gray-600">
                Per person on twin sharing
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-blue-700 text-white py-3 px-4 rounded-full text-sm font-bold hover:bg-blue-800 transition-colors">
                Enquire Now
              </button>
              <button className="flex-1 bg-yellow-400 text-gray-900 py-3 px-4 rounded-full text-sm font-bold hover:bg-yellow-500 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedDeparture;
