import React from "react";
import GettingStarted from "./getting-started";
import TrendingMovies from "./trending-movies";
import Perks from "./perks";
import { useAuth } from "../../context";
import UserLists from "./user-lists";

export function HomeView() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? <UserLists /> : <GettingStarted />}
      <TrendingMovies />
      <Perks />
    </>
  );
}
