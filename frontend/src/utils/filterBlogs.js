// src/utils/filterBlogs.js
export const filterBlogsByCategory = (blogs, category) => {
    return blogs.filter((blog) => blog.category === category);
  };
  
  export const getRecentBlogs = (blogs, count) => {
    return blogs.slice(0, count);
  };
  