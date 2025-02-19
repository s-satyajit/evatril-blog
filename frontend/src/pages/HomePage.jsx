import React from "react";
import { useNavigate } from "react-router-dom";
import CompanyProfile from "../components/CompanyProfile";
import HeroSection from "../components/HeroSection";
import { useBlogContext } from "../context/BlogProvider";

const HomePage = () => {
  const { blogs,categories } = useBlogContext();
  const navigate = useNavigate();
  const handleSeeMore = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <>
      <div className="flex flex-col items-center overflow-x-hidden animate-fadeIn md:px-20 lg:px-16 xl:px-24">
          <HeroSection />
          <div className="flex items-center justify-center animate-fadeIn">
        {categories.map((category) => (
          <button
            key={category.categoryName}
            className="bg-red-400 my-10 mx-6 p-7 rounded-sm text-white hover:bg-red-500 transition-colors duration-300"
          >
            {category.categoryName}
          </button>
        ))}
      </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-10 gap-4">
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
