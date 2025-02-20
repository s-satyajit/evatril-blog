import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogContext } from "../context/BlogProvider";
import RecentBlogs from "../components/RecentBlogs";
import CategoryList from "../components/CategoryList";
import RelatedBlogs from "../components/RelatedBlogs";

const CategoryPage = () => {
  const navigate = useNavigate();
  const { blogs, categories } = useBlogContext();

  const { slug } = useParams();

  const handleReadMore = (slug) => {
    navigate(`/blog/${slug}`)
  }

  const currentCategoryArray = categories.filter((c) => c.slug === slug);
  const currentCategory =
    currentCategoryArray.length > 0 ? currentCategoryArray[0] : null;

  const selectedBlogs = currentCategory
    ? blogs.filter((b) => b.category === currentCategory.categoryName)
    : [];

  return (
    <>
      <div className="mx-auto px-4 md:px-24 py-5 animate-fadeIn">
        <h1 className="text-3xl text-center py-3">
          {currentCategory
            ? currentCategory.categoryName
            : "Category Not Found"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-10 gap-12">
          <div className="col-span-1 md:col-span-7">
            <div className="mt-4 gap-4 grid grid-cols-1 md:grid-cols-2">
              {selectedBlogs.map((blog) => (
                <div key={blog.title} className="bg-white">
                  <div className="w-full overflow-hidden">
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
                    onClick={() => handleReadMore(blog.slug)}
                    >Read More...</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 md:col-span-3">
            <RecentBlogs />
            <CategoryList />
          </div>
        </div>
        {/* <RelatedBlogs /> */}
      </div>
    </>
  );
};

export default CategoryPage;
