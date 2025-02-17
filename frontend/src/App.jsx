import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { BlogProvider } from "./context/BlogProvider";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BlogProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
        </Routes>
      </Router>
    </BlogProvider>
  );
}

export default App;
