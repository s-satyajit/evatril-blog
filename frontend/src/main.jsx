import { AnimatePresence } from "framer-motion";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BlogProvider } from "./context/BlogProvider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BlogProvider>
      <div className="app-container">
        <AnimatePresence>
          <App />
        </AnimatePresence>
      </div>
    </BlogProvider>
  </StrictMode>
);
