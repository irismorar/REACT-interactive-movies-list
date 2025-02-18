import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MovieTrackingWebsite from "./MovieTrackingWebsite.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MovieTrackingWebsite />
  </StrictMode>
);
