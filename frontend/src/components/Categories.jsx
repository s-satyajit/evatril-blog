import React from "react";
import { useBlogContext } from "../context/BlogProvider";

const Categories = () => {
  const { categories } = useBlogContext();

  return (
    <div className="bg-gray-200 p-4 my-10  mx-auto rounded-lg shadow-md animate-fadeIn">
      <h1 className="border-b-2 border-[#ccc] text-[#6C7383] pb-2 mb-1 text-medium font-bold">
        CATEGORIES
      </h1>
      <div className="py-2 px-4">
        {categories.map((category) => (
          <div key={category.id} className="py-1 animate-slideInLeft">
            <li className="text-small">{category.categoryName}</li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
