import React from "react";
import GettingStarted from "./getting-started";
import TrendingMovies from "./trending-movies";
import Perks from "./perks";

export function HomeView() {
  return (
    <>
      <GettingStarted />
      <TrendingMovies />
      <Perks/>
    </>
  );
}
