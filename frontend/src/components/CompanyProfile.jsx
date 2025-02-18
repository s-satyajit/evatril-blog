import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const CompanyProfile = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto md:h-screen bg-neutral-200 text-black p-4 container animate-fadeIn">
      <div className="mb-6 animate-scaleIn">
        <img
          src="https://www.evatril.com/assets/logo-CRXzgGzX.png"
          alt="Evatril Logo"
          className="rounded-full w-32 h-32 md:w-48 md:h-48 object-contain shadow-lg"
        />
      </div>

      <h1 className="text-2xl mb-2 text-medium font-bold animate-slideInDown">
        Hello, We are Evatril
      </h1>

      <p className="text-center mb-6 max-w-xl text-small leading-relaxed animate-slideInLeft">
        We are a leading company in Event Industry. Innovation and excellence
        drive us to deliver the best products and services to our customers. Our
        mission is to make a positive impact in the world through our innovative
        solutions.
      </p>

      <button className="bg-neutral-600 text-white py-2 px-4 rounded mb-6 hover:bg-blue-700 transform transition-transform duration-300 hover:scale-110 active:scale-90">
        About Us
      </button>

      <div className="flex space-x-4 animate-fadeIn">
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
