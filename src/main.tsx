import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./views/layout";
import { FilmDetailView, HomeView, ListDetail } from "./views";

createRoot(document.getElementById("root") as any).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomeView />} />
          <Route path="/film/:id" element={<FilmDetailView />} />
          <Route path="/list/:id" element={<ListDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
