import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBlogContext } from "../context/BlogProvider";

const CategoryCarousel = () => {
  const { categories } = useBlogContext();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleCategory = (slug) => {
    navigate(`/category/${slug}`);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (screenWidth <= 600) {
    return (
      <div className="md:hidden w-full my-6 relative">
        <div className="flex overflow-x-scroll no-scrollbar">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategory(category.slug)}
              className={`flex-shrink-0 w-full ${
                index === currentIndex ? "block" : "hidden"
              } transition-transform duration-300`}
            >
              <div className="overflow-hidden animate-sideInLeft cursor-pointer relative w-full hover:scale-105 transition-transform object-cover transform duration-300 shadow-lg">
                <img
                  src={category.image}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110 opacity-85 grayscale-30 blur-[1.5px]"
                />
                <div className="absolute inset-0 bg-opacity-100 flex flex-col justify-center items-center text-white col-span-2 text-center">
                  <p className="md:text-2xl text-sm font-bold animate-slideInDown">
                    {category.categoryName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
        >
          ›
        </button>
      </div>
    );
  } else if (screenWidth >= 601 && screenWidth <= 993) {
    return (
      <div className="grid grid-cols-5 items-center my-6 justify-center animate-fadeIn gap-3 mx-1">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategory(category.slug)}
            className="overflow-hidden animate-sideInLeft cursor-pointer relative w-full hover:scale-105 transition-transform object-cover transform duration-300 shadow-lg"
          >
            <img
              src={category.image}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110 opacity-85 grayscale-30 blur-[1.5px] "
            />
            <div className="absolute inset-0 bg-opacity-100 flex flex-col justify-center items-center text-white col-span-2 text-center">
              <p className="md:text-2xl text-sm font-bold animate-slideInDown">
                {category.categoryName}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className=" md:grid grid-cols-3 md:grid-cols-5 items-center my-6 justify-center animate-fadeIn gap-3 mx-1">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategory(category.slug)}
            className="overflow-hidden animate-sideInLeft cursor-pointer relative w-full hover:scale-105 transition-transform object-cover transform duration-300 shadow-lg"
          >
            <img
              src={category.image}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110 opacity-85 grayscale-30 blur-[1.5px]"
            />
            <div className="absolute inset-0 bg-opacity-100 flex flex-col justify-center items-center text-white col-span-2 text-center">
              <p className="md:text-2xl text-sm font-bold animate-slideInDown">
                {category.categoryName}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default CategoryCarousel;
