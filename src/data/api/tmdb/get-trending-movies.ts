import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { GetTrendingMoviesResponse } from "../../response";
import { Endpoints } from "../../endpoints";
import { getRequest } from "../../../lib";

export async function getTrendingMoviesFn(): Promise<
  RecursivePartial<GetTrendingMoviesResponse>
> {
  return getRequest({
    url: Endpoints.tmdb.getTrendingMovies,
  });
}

export function useGetTrendingMoviesQuery() {
  return useQuery({
    placeholderData: keepPreviousData,
    queryFn: () => getTrendingMoviesFn(),
    queryKey: ["trending-movies"],
  });
}
