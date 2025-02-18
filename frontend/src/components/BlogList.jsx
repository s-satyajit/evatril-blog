import React from "react";
import { useNavigate } from "react-router-dom";
import { useBlogContext } from "../context/BlogProvider";

const BlogList = () => {
  const { blogs } = useBlogContext();

  const navigate = useNavigate();

  const seeDetails = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <>
      <div className="border-b-2 pb-3 border-black text-medium font-bold">
        RECENT POSTS
      </div>
      <div className="border-b-2 border-black container mx-auto rounded-lg shadow-md">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-200 p-8 my-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div
              onClick={() => seeDetails(blog.slug)}
              className="flex flex-col md:flex-row justify-between gap-4 my-6 cursor-pointer"
            >
              <div>
                <img
                  className="h-auto w-full md:w-48 rounded-md"
                  src={blog.image1}
                />
              </div>
              <div>
                <p className="font-semibold text-small">{blog.title}</p>
                <p className="py-1 text-small">{blog.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
