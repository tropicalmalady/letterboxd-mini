import { useQuery } from "@tanstack/react-query";
import { SearchMoviesResponse } from "../../response";
import { SearchMoviesRequest } from "../../request";
import { Endpoints } from "../../endpoints";
import { getRequest } from "../../../lib";

export async function SearchMoviesFn({
  query,
}: SearchMoviesRequest): Promise<RecursivePartial<SearchMoviesResponse>> {
  return getRequest({
    url: Endpoints.tmdb.searchMovies,
    query,
  });
}

export function useSearchMoviesQuery() {
  const query = "";
  return useQuery({
    queryFn: () =>
      SearchMoviesFn({
        query,
      }),
    queryKey: ["search-movie", query],
  });
}
