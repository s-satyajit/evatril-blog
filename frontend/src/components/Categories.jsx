import React from "react";
import { useBlogContext } from "../context/BlogProvider";

const Categories = () => {
  const { categories } = useBlogContext();

  return (
    <div className="bg-gray-200 p-8 my-50 container mx-auto rounded-lg shadow-md animate-fadeIn">
      <h1 className="border-b-2 border-black pb-3 text-medium font-bold">
        CATEGORIES
      </h1>
      <div className="py-2">
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
