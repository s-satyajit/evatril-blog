import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBlogContext } from "../context/BlogProvider";
import { getRecentBlogs } from "../utils/filterBlogs";

const HeroSection = ({ className }) => {
  const { blogs, loading, categories } = useBlogContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const recentBlogs = getRecentBlogs(blogs, 10);

  const navigate = useNavigate();

  const handleSeeMore = (slug) => {
    console.log(`Navigating to /blog/${slug}`);
    navigate(`/blog/${slug}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % Math.ceil(recentBlogs.length / 2)
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [recentBlogs.length]);

  useEffect(() => {
    console.log(recentBlogs);
    console.log(categories);
  }, [recentBlogs]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="relative w-full h-96 md:h-screen overflow-hidden animate-fadeIn mt-8 md:mt-16 lg:mt-24">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {recentBlogs.map((post, index) => (
          <div
            onClick={() => handleSeeMore(post.slug)}
            key={index}
            className="w-full md:w-1/2 h-full flex-shrink-0 relative items-center bg-gray-200 cursor-pointer animate-slideInLeft group overflow-hidden"
          >
            <img
              src={post.image1}
              alt={post.title}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              onClick={() => handleSeeMore(post.slug)}
            />
            <div className="absolute inset-0 bg-opacity-100 flex flex-col justify-center items-center text-white">
              <p className="text-sm mb-2">{post.category}</p>
              <h2 className="text-2xl font-bold animate-slideInDown">{post.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          setCurrentIndex(
            (prevIndex) =>
              (prevIndex - 1 + Math.ceil(recentBlogs.length / 2)) %
              Math.ceil(recentBlogs.length / 2)
          )
        }
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
      >
        ‹
      </button>
      <button
        onClick={() =>
          setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % Math.ceil(recentBlogs.length / 2)
          )
        }
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
      >
        ›
      </button>

      <div className="flex items-center justify-center animate-fadeIn">
        {categories.map((category) => (
          <button
            key={category.categoryName}
            className="bg-red-400 my-10 mx-auto p-7 rounded-sm text-white hover:bg-red-500 transition-colors duration-300"
          >
            {category.categoryName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
