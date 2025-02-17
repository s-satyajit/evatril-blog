import React from "react";
import { useBlogContext } from "../context/BlogProvider";

const Categories = () => {
  const { categories } = useBlogContext();

  return (
    <>
      <div className="bg-gray-200 p-8 my-50">
        <h1 className="border-b-2 border-black pb-3">CATEGORIES</h1>
        <div className="py-2">
          {categories.map((category) => (
            <div key={category.id} >
                <li>{category.categoryName}</li>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
