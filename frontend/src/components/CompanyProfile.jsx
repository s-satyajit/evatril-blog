import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const CompanyProfile = () => {
  return (
    <div className="flex md:mt-15 rounded-sm flex-col items-center justify-center shadow-md text-black animate-fadeIn">
      <div className="animate-scaleIn">
        <img
          src="https://www.evatril.com/assets/logo-CRXzgGzX.png"
          alt="Evatril Logo"
          className="w-24 h-24 md:w-32 object-contain"
        />
      </div>

      <h1 className="text-2xl mb-4 text-medium font-bold animate-slideInDown">
        Thick Celebration, Click Evatril
      </h1>

      <p className="text-center mb-6 mx-5 max-w-xl text-small leading-relaxed animate-slideInLeft">
      Evatril is a virtual event management platform offering a wide range of services for various occasions and gatherings. Our customizable menu items set us apart, ensuring a unique and hassle-free event hosting experience. Creating seamless events, unforgettable memories.
      </p>

      <a href="https://www.evatril.com/" className="bg-[#f55253] text-white fontbold py-2 px-4 rounded mb-6 hover:bg-black transform transition-transform duration-300 hover:scale-110 active:scale-90">
        About Us
      </a>

      <div className="flex space-x-4 mb-6 animate-fadeIn text-white">
        <a
          href="https://www.facebook.com/evatril.in/"
          target="_blank"
          className="bg-blue-600 p-3 rounded-full hover:bg-blue-700"
        >
          <FaFacebookF className="w-6 h-6" />
        </a>
        <a
          href="https://twitter.com/evatril"
          target="_blank"
          className="bg-blue-400 p-3 rounded-full hover:bg-blue-500"
        >
          <FaTwitter className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/evatril.in/?locale=de&hl=am-et"
          target="_blank"
          className="bg-pink-600 p-3 rounded-full hover:bg-pink-700"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/company/evatril/?originalSubdomain=in"
          target="_blank"
          className="bg-blue-800 p-3 rounded-full hover:bg-blue-900"
        >
          <FaLinkedinIn className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default CompanyProfile;
