import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecentBlogs } from "../utils/filterBlogs";
import { useBlogContext } from "../context/BlogProvider";

const Carousel = () => {
  const { blogs, loading } = useBlogContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const recentBlogs = getRecentBlogs(blogs, 5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % recentBlogs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [recentBlogs.length]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 50}%)` }}
      >
        {recentBlogs.map((post) => (
          <div key={post.id} className="w-1/2 flex-shrink-0">
            <div className="border rounded shadow-md overflow-hidden h-full">
              <img
                src={post.image1}
                alt={post.title}
                className="w-full h-1/2 object-cover"
              />
              <div className="p-4 h-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-700">{post.excerpt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          setCurrentIndex(
            (prevIndex) =>
              (prevIndex - 1 + recentBlogs.length) % recentBlogs.length
          )
        }
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % recentBlogs.length)
        }
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
