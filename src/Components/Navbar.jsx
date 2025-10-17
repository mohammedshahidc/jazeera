import React, { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import logo from "../images/logo.png";
import Login from "./Login";
import AED from "../Images/CurrencyIcons/AED.jpg";
import AUD from "../Images/CurrencyIcons/AUD.jpg";
import BHD from "../Images/CurrencyIcons/BHD.jpg";
import EGP from "../Images/CurrencyIcons/EGP.png";
import EUR from "../Images/CurrencyIcons/EUR.jpg";
import GBP from "../Images/CurrencyIcons/GBP.jpg";
import GEL from "../Images/CurrencyIcons/GEL.jpg";
import INR from "../Images/CurrencyIcons/INR.jpg";
import IQD from "../Images/CurrencyIcons/IQD.jpg";
import JOD from "../Images/CurrencyIcons/JOD.jpg";
import KWD from "../Images/CurrencyIcons/KWD.jpg";
import OMR from "../Images/CurrencyIcons/OMR.jpg";
import QAR from "../Images/CurrencyIcons/QAR.jpg";
import SAR from "../Images/CurrencyIcons/SAR.jpg";

const Navbar = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("KWD");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLogin, setActiveLogin] = useState(false);

  const currencyFlags = [
    { name: "AUD", fullName: "Australian Dollar", image: AUD },
    { name: "BHD", fullName: "Bahraini Dinar", image: BHD },
    { name: "EGP", fullName: "Egyptian Pound", image: EGP },
    { name: "EUR", fullName: "Euro", image: EUR },
    { name: "GBP", fullName: "British Pound Sterling", image: GBP },
    { name: "GEL", fullName: "Georgian Lari", image: GEL },
    { name: "INR", fullName: "Indian Rupee", image: INR },
    { name: "IQD", fullName: "Iraqi Dinar", image: IQD },
    { name: "JOD", fullName: "Jordanian Dinar", image: JOD },
    { name: "KWD", fullName: "Kuwaiti Dinar", image: KWD },
    { name: "OMR", fullName: "Omani Rial", image: OMR },
    { name: "QAR", fullName: "Qatari Riyal", image: QAR },
    { name: "SAR", fullName: "Saudi Riyal", image: SAR },
  ];

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency.name);
    setDropdownOpen(false);
  };

  const currentCurrency = currencyFlags.find(
    (cur) => cur.name === selectedCurrency
  );

  return (
    <nav className="w-full bg-white border-b border-blue-100 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-6 text-sm text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600">
            My Bookings
          </a>

          <div
            className="hover:text-blue-600 cursor-pointer"
            onClick={() => setActiveLogin(true)}
          >
            Login / Sign-up
          </div>

          {activeLogin && (
            <Login activeLogin={activeLogin} setActiveLogin={setActiveLogin} />
          )}

          <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
            <span>Lang / EN</span>
          </div>

          {/* Currency Dropdown */}
          <div className="relative">
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 cursor-pointer border border-gray-200 px-2 py-1 rounded-md hover:bg-gray-100"
            >
              <img
                src={currentCurrency?.image}
                alt={currentCurrency?.name}
                className="h-4 w-6 object-cover rounded-sm"
              />
              <span>{currentCurrency?.name}</span>
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 max-h-64 overflow-y-auto scrollbar-hide z-50">
                {currencyFlags.map((currency) => (
                  <div
                    key={currency.name}
                    onClick={() => handleCurrencyChange(currency)}
                    className="flex items-center gap-3 p-2 hover:bg-yellow-600 cursor-pointer"
                  >
                    <img
                      src={currency.image}
                      alt={currency.name}
                      className="h-4 w-6 object-cover rounded-sm"
                    />
                    <span className="font-semibold">{currency.name}</span>
                    <span className="text-xs text-black">
                      – {currency.fullName}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden flex items-center text-gray-700 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-56 bg-white shadow-lg border-l border-gray-200 transform transition-transform duration-300 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col text-gray-800 text-sm font-medium mt-14">
          <a
            href="#"
            className="px-5 py-3 border-b border-gray-200 hover:bg-gray-50"
          >
            My Bookings
          </a>
          <div
            className="px-5 py-3 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
            onClick={() => setActiveLogin(true)}
          >
            Login / Sign-up
          </div>
          <a
            href="#"
            className="px-5 py-3 border-b border-gray-200 hover:bg-gray-50"
          >
            عربي
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
