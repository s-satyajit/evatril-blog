import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const CompanyProfile = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-4">
      {/* Company Logo */}
      <div className="mb-6">
        <img src="https://www.evatril.com/assets/logo-CRXzgGzX.png" alt="Evatril Logo" className="rounded-full w-32 h-32 object-contain" />
      </div>
      
      {/* Greeting and Company Name */}
      <h1 className="text-3xl mb-2">Hello, We are Evatril</h1>
      
      {/* Company Description */}
      <p className="text-center mb-6 max-w-xl">
        We are a leading company in Event Industry. Innovation and excellence drive us to deliver the best products and services to our customers.
        Our mission is to make a positive impact in the world through our innovative solutions.
      </p>
      
      {/* About Us Button */}
      <button className="bg-blue-600 text-white py-2 px-4 rounded mb-6">About Us</button>
      
      {/* Social Media Icons */}
      <div className="flex space-x-4">
        <a href="https://www.facebook.com/evatril.in/" target="_blank" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700">
          <FaFacebookF className="w-6 h-6" />
        </a>
        <a href="https://twitter.com/evatril" target="_blank" className="bg-blue-400 p-3 rounded-full hover:bg-blue-500">
          <FaTwitter className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/evatril.in/?locale=de&hl=am-et" target="_blank" className="bg-pink-600 p-3 rounded-full hover:bg-pink-700">
          <FaInstagram className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/company/evatril/?originalSubdomain=in" target="_blank" className="bg-blue-800 p-3 rounded-full hover:bg-blue-900">
          <FaLinkedinIn className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default CompanyProfile;
