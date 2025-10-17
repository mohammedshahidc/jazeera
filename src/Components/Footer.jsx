import React from "react";
import logo from "../Images/logo.png";
import pay_knet from "../Images/pay_knet.png";
import pay_mastercard from "../Images/pay_mastercard.png";
import pay_visa from "../Images/pay_visa.png";
import pay_amex from "../Images/pay_amex.png";
import kw_licence from "../Images/kw_licence.png";
import kw_secure from "../Images/kw_secure.png";
import thawate from "../Images/thawate.png";
import fb from '../Images/fb.svg'
import insta from '../Images/insta.svg'
import linkedin from '../Images/linkedin.svg'
import twiter from '../Images/twitter.svg'
const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Popular Packages */}
          <div>
            <h3 className="text-blue-700 font-bold text-lg mb-4">
              Popular Packages
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-black hover:text-blue-700 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span>
                  Dubai Package 2023
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-blue-700 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span>
                  London Tour 21 Days
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-blue-700 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span>
                  Oman Safari Package
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-blue-700 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span>
                  Religious Pilgrimage
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-blue-700 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span>
                  Dubai Tour Package
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-blue-700 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span>7 Nights Umrah Package
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-black font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-black hover:text-blue-700 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-blue-700 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span>
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-blue-700 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-blue-700 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span>
                  T&C
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-blue-700 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span>
                  Media Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-blue-700 transition-colors flex items-center"
                >
                  <span className="mr-2">›</span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Payment */}
          <div>
            <h3 className="text-blue-700 font-bold text-lg mb-4">Payment</h3>
            <div className="space-y-4">
              {/* Payment Cards */}
              <div className="flex flex-wrap gap-2">
                <div className="bg-blue-600 text-white px-3 py-2 rounded text-xs font-bold">
                  <img src={pay_amex} alt="american expres" />
                </div>
                <div className="bg-yellow-400 text-blue-900 px-3 py-2 rounded text-xs font-bold border-2 border-blue-900">
                  <img src={pay_knet} alt="knet" />
                </div>
                <div className="bg-white border border-gray-300 px-3 py-2 rounded">
                  <img src={pay_visa} alt="visa card" />
                </div>
                <div className="flex">
                  <img src={pay_mastercard} alt="mastercard" />
                </div>
              </div>

              <p className="text-black text-sm">
                Bookings made by credit or debit card no longer incur a fee.
                Perfect, more spending money for your holiday.
              </p>

              {/* Certification Logos */}
              <div className="flex flex-wrap gap-3 items-center pt-2">
                <div className="w-12 h-12  rounded flex items-center justify-center">
                  <img src={kw_secure} alt="secure" />{" "}
                </div>
                <div className="w-12 h-12  rounded flex items-center justify-center">
                  <img src={kw_licence} alt="licence" />
                </div>
                <div className="w-12 h-12 border-2 border-gray-700 rounded flex items-center justify-center">
                  <span className="text-gray-700 text-xs font-bold">IATA</span>
                </div>
                <div className="rounded flex items-center justify-center ">
                  <img src={thawate} alt="thwate" className="h-9 w-24 " />{" "}
                </div>
              </div>
            </div>
          </div>

          <div>
  <h3 className="text-blue-700 font-bold text-lg mb-4">
    Connect with us
  </h3>
  <p className="text-gray-700 mb-4">
    Check out reviews, podcasts, blogs and more...
  </p>
  <div className="flex items-center space-x-4">
    <a href="#">
      <img src={fb} alt="Facebook" className="w-9 h-9 hover:scale-110 transition-transform" />
    </a>
    <a href="#">
      <img src={twiter} alt="Twitter" className="w-9 h-9 hover:scale-110 transition-transform" />
    </a>
    <a href="#">
      <img src={linkedin} alt="LinkedIn" className="w-9 h-9 hover:scale-110 transition-transform" />
    </a>
    <a href="#">
      <img src={insta} alt="Instagram" className="w-9 h-9 hover:scale-110 transition-transform" />
    </a>
  </div>
</div>
</div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="jzeer logo" className="w-30 h-10" />
            </div>

            {/* Links */}
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-700 transition-colors">
                Terms and conditions
              </a>
              <a href="#" className="hover:text-blue-700 transition-colors">
                Privacy policy
              </a>
              <a href="#" className="hover:text-blue-700 transition-colors">
                Sitemap
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-600">
              © 2025 Jazeera Airways. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
