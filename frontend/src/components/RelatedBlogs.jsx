import React from "react";
import { useNavigate } from "react-router-dom";
import { useBlogContext } from "../context/BlogProvider";

const RelatedBlogs = () => {
  const { blogs, currentBlog } = useBlogContext();

  const navigate = useNavigate();

  const similarBlogs = blogs.filter(
    (blog) => blog.category === currentBlog.category
  );

  const seeDetails = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <>
    <div className="border-b-2 border-[#ccc] py-2 text-medium font-bold text-[#6C7383]">
        RELATED POSTS
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
        {similarBlogs.map((blog) => (
          <div
            key={blog.id}
            className=""
          >
            <div
              onClick={() => seeDetails(blog.slug)}
              className="pt-8 pb-2 flex flex-col items-center cursor-pointer"
            >
              <img className="w-auto" src={blog.image1} />
              <h1 className="text-center py-3 font-bold">
                {blog.title}
              </h1>
              <p className="text-[#6C7383] text-sm">Posted on {blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RelatedBlogs;
