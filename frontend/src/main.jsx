import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BlogProvider } from "./context/BlogProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BlogProvider>
      <App />
    </BlogProvider>
  </StrictMode>
);
