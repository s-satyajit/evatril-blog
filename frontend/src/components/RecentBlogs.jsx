import React from "react";
import { useNavigate } from "react-router-dom";
import { useBlogContext } from "../context/BlogProvider";

const RecentBlogs = () => {
  const { blogs } = useBlogContext();

  const navigate = useNavigate();

  const seeDetails = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="bg-white p-4 rounded-sm shadow-md">
      <div className="border-b-2 pb-2 mb-3 border-[#ccc] text-medium font-bold text-[#6C7383]">
        RECENT POSTS
      </div>
      <div className="">
        {blogs.slice(0, 4).reverse().map((blog) => (
          <div
            key={blog.id}
            className="px-4 py-2 rounded-lg hover:shadow-lg transition-shadow duration-300 animate-fadeIn"
          >
            <div
              onClick={() => seeDetails(blog.slug)}
              className="flex flex-col md:flex-row justify-between items-center gap-2 cursor-pointer transform transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              
                <img 
                  className="w-24 h-18 object-cover rounded-md transform transition-transform duration-300 hover:scale-110"
                  src={blog.image1}
                />
              <div>
                <p className="font-semibold text-sm">{blog.title}</p>
                <p className="py-1 text-xs text-[#6C7383]">Posted on {blog.date}</p>
                <div
                  className="text-small"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
