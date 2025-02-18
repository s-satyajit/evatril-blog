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
      <div className="flex space-x-7">
        {similarBlogs.map((blog) => (
          <div
            key={blog.id}
            className="flex justify-center border-b-2 border-black"
          >
            <div
              onClick={() => seeDetails(blog.slug)}
              className="pt-8 pb-2 flex flex-col items-center cursor-pointer"
            >
              <img className="w-96" src={blog.image1} />
              <h1 className="text-xl text-center py-3 font-bold">
                {blog.title}
              </h1>
              {blog.date}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RelatedBlogs;
