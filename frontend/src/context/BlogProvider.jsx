import React, { useState, createContext, useContext } from "react";
import useBlogs from "../hooks/useBlogs";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const { data: blogs, loading: blogsLoading } = useBlogs("/api/blogs");
    const { data: categories, loading: categoriesLoading } = useBlogs("/api/categories");
    const [currentBlog, setCurrentBlog] = useState(null)

    const loading = blogsLoading || categoriesLoading;

    return (
        <BlogContext.Provider value={{ blogs, categories, loading, currentBlog, setCurrentBlog }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlogContext = () => useContext(BlogContext);