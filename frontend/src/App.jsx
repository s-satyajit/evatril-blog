import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { BlogProvider } from "./context/BlogProvider";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <BlogProvider>
      <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/:slug" element={<BlogPage />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
          </Routes>
      </Router>
    </BlogProvider>
  );
}

export default App;
