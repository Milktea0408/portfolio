import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// css file setup for tailwind
import "./tailwind.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
