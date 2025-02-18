import React from "react";
import { useNavigate } from "react-router-dom";
import CompanyProfile from "../components/CompanyProfile";
import Carousel from "../components/HeroSection";
import { useBlogContext } from "../context/BlogProvider";

const HomePage = () => {
  const { blogs } = useBlogContext();
  const navigate = useNavigate();
  const handleSeeMore = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <>
      <div className="flex flex-col items-center overflow-x-hidden">
        <div className="w-full">
          <Carousel />
        </div>

        <div className="mx-24 w-full max-w-screen-xl grid grid-cols-6 gap-4">
          <div className="col-span-4 p-4">
            <h1 className="border-b-2 border-black pb-3 text-black flex text-center">
              LATEST POSTS
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogs
                .slice()
                .reverse()
                .map((blog, index) => (
                  <div
                    key={index}
                    className={`my-4 p-4 bg-neutral-200 text-black rounded-sm flex flex-col items-center ${
                      index === 0 ? "col-span-2 w-full" : "w-full"
                    }`}
                    style={index === 0 ? { gridColumn: "span 2" } : {}}
                  >
                    <img
                      src={blog.image1}
                      className="w-full h-auto object-cover my-2"
                    />
                    <h2 className="text-xl font-bold my-4 text-center">
                      {blog.title}
                    </h2>
                    <p className="text-xs text-gray-300 text-center">
                      {blog.date}
                    </p>
                    <p className="mt-2 text-center">
                      {blog.paragraph1.substring(0, 200)}...
                    </p>
                    <button
                      className="mt-2 px-4 py-2 bg-neutral-600 text-white rounded cursor-pointer hover:bg-blue-700"
                      onClick={() => handleSeeMore(blog.slug)}
                    >
                      See More
                    </button>
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
