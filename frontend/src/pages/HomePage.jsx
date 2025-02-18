import React from "react";
import { useNavigate } from "react-router-dom";
import CompanyProfile from "../components/CompanyProfile";
import HeroSection from "../components/HeroSection";
import { useBlogContext } from "../context/BlogProvider";

const HomePage = () => {
  const { blogs } = useBlogContext();
  const navigate = useNavigate();
  const handleSeeMore = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <>
      <div className="flex flex-col items-center overflow-x-hidden animate-fadeIn">
        <div className="w-full px-20 md:px-20 lg:px-16 xl:px-24">
          <HeroSection />
        </div>

        <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-10 gap-4 md:px-8 lg:px-16 xl:px-1">
          <div className="md:col-span-7">
            <h1 className="border-b-2 flex border-black pb-3 text-black text-center">
              LATEST POSTS
            </h1>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogs
                .slice()
                .reverse()
                .map((blog, index) => (
                  <div
                    key={index}
                    className={`my-2 bg-neutral-200 text-black rounded-sm flex flex-col items-center ${
                      index === 0 ? "md:col-span-2 w-full" : "w-full"
                    } animate-fadeIn`}
                    style={index === 0 ? { gridColumn: "span 2" } : {}}
                  >
                    <div className="overflow-hidden">
                      <img
                        src={blog.image1}
                        className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <h2 className="text-xl font-bold my-4 text-center">
                      {blog.title}
                    </h2>
                    <p className="text-xs text-gray-300 text-center">
                      {blog.date}
                    </p>
                    <p className="m-4 text-center"
                      dangerouslySetInnerHTML={{ __html: blog.paragraph1.substring(0, 200) + "..."}}
                    >
                    </p>
                    <button
                      className="my-4 px-4 py-2  bg-neutral-600 text-white rounded cursor-pointer hover:bg-blue-700 transform transition-transform duration-300 hover:scale-105"
                      onClick={() => handleSeeMore(blog.slug)}
                    >
                      See More
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <div className="md:col-span-3 px-4">
            <CompanyProfile />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
