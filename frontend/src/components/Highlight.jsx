import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBlogContext } from "../context/BlogProvider";
import { getRecentBlogs } from "../utils/filterBlogs";

const Highlight = ({ className }) => {
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

  if (loading) return <div>Loading...</div>;

  return (
    <div className="relative overflow-hidden animate-fadeIn mt-8 md:mt-4  ">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {recentBlogs.map((post, index) => (
          <div
            onClick={() => handleSeeMore(post.slug)}
            key={index}
            className="w-full md:w-1/2 h-[95vh] flex-shrink-0 relative items-center bg-gray-200 cursor-pointer animate-slideInLeft group overflow-hidden"
          >
            <img
              src={post.image1}
              alt={post.title}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110 blur-[1.5px]"
              onClick={() => handleSeeMore(post.slug)}
            />
            <div className="absolute inset-0 bg-opacity-100 flex flex-col justify-center items-center text-white mx-4 text-center">
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
    </div>
  );
};

export default Highlight;
