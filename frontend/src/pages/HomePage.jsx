import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyProfile from "../components/CompanyProfile";
import HeroSection from "../components/HeroSection";
import { useBlogContext } from "../context/BlogProvider";
import CategoryCarousel from "../components/CategoryCarousel";

const HomePage = () => {
  const { blogs, categories } = useBlogContext();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSeeMore = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <>
      <div className="flex flex-col items-center overflow-x-hidden animate-fadeIn px-2 md:px-20 lg:px-16 xl:px-24 ">
        <HeroSection />
        <CategoryCarousel />
        <div className="flex items-center my-6 justify-center animate-fadeIn"></div>
        <div className="w-full grid grid-cols-1 md:grid-cols-10 gap-8">
          <div className="md:col-span-7">
            <h1 className="border-b-2 border-[#ccc] text-[#6C7383] pb-2 mb-1 text-medium font-bold">
              LATEST POSTS
            </h1>
            <div className="mt-4 md:grid md:grid-cols-2 gap-4">
              {blogs
                .slice()
                .reverse()
                .map((blog, index) => (
                  <div
                    key={index}
                    className={`my-2 shadow-md text-black rounded-sm flex flex-col items-center ${
                      index === 0 ? "md:col-span-2 w-full" : "w-full"
                    } animate-fadeIn`}
                    style={index === 0 ? { gridColumn: "span 2" } : {}}
                  >
                    <div className="overflow-hidden w-full">
                      <img
                        src={blog.image1}
                        className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col items-center w-full px-4">
                      <h2 className="text-xl font-bold my-4 text-center">
                        {blog.title}
                      </h2>
                      <p className="text-sm text-gray-700 text-center">
                        {blog.date}
                      </p>
                      <p
                        className="m-4 text-center"
                        dangerouslySetInnerHTML={{
                          __html: blog.paragraph1.substring(0, 200) + "...",
                        }}
                      ></p>
                      <a
                        href="#"
                        className="m-4 transition duration-300 hover:underline hover:scale-110"
                        onClick={() => handleSeeMore(blog.slug)}
                      >
                        Read More...
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="md:col-span-3">
            <CompanyProfile />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
