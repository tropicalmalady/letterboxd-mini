import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilmDetailView from "./views/film-detail";
import AppLayout from "./views/layout";
import { HomeView } from "./views";

createRoot(document.getElementById("root") as any).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomeView />} />
          <Route path="/film/:id" element={<FilmDetailView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
