import React from "react";
import { useBlogContext } from "../context/BlogProvider";

const BlogList = () => {
  const { blogs } = useBlogContext();

  return (
    <>
      <div className="border-b-2 pb-3 border-black">RECENT POSTS</div>
      <div className="border-b-2 border-black">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-gray-200 p-8">
            <div className="flex justify-between gap-4 my-6 ">
              <div>
                <img className="h-auto w-48 rounded-md" src={blog.image1} />
              </div>
              <div>
                <p className="font-semibold">{blog.title}</p>
                <p className="py-1">{blog.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
