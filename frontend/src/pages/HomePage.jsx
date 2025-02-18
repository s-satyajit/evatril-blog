import React from "react";
import Carousel from "../components/HeroSection";
import { useBlogContext } from "../context/BlogProvider";
import CompanyProfile from "../components/CompanyProfile";

const HomePage = () => {
  const { blogs } = useBlogContext();

  return (
    <>
      <div className="flex flex-col items-center overflow-x-hidden">
        {/* Carousel Section */}
        <div className="w-full">
          <Carousel />
        </div>

        {/* Main Content Section */}
        <div className="mx-24 w-full max-w-screen-xl grid grid-cols-6 gap-4">
          <div className="col-span-4 p-4">
            <h1 className="border-b-2 border-black pb-3 text-white">
              LATEST POSTS
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogs
                .slice()
                .reverse()
                .map((blog, index) => (
                  <div
                    key={index}
                    className={`my-4 p-4 bg-gray-800 text-white rounded flex flex-col items-center ${
                      index === 0 ? "col-span-2 w-full" : "w-full"
                    }`}
                    style={index === 0 ? { gridColumn: "span 2" } : {}}
                  >
                    <img
                      src={blog.image1}
                      className="w-full h-auto object-cover my-2"
                    />
                    <h2 className="text-xl font-bold my-4">{blog.title}</h2>
                    <p className="text-xs  text-gray-300">{blog.date}</p>
                    <p className="mt-2">{blog.paragraph1}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-span-2 p-4">
            <CompanyProfile />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
