import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./app";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root") as any).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
