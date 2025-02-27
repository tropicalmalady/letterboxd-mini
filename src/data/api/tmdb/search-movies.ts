import { useQuery } from "@tanstack/react-query";
import { SearchMoviesResponse } from "../../response";
import { SearchMoviesRequest } from "../../request";
import { Endpoints } from "../../endpoints";
import { getRequest } from "../../../lib";
import useDebouncedValue from "../../../hooks/useDebouncedValue";

export async function SearchMoviesFn({
  query,
}: SearchMoviesRequest): Promise<RecursivePartial<SearchMoviesResponse>> {
  return getRequest({
    url: Endpoints.tmdb.searchMovies,
    query: {
      query,
    },
  });
}

export function useSearchMoviesQuery({ query }: SearchMoviesRequest) {
  const debouncedValue = useDebouncedValue(query);
  return useQuery({
    queryFn: () =>
      SearchMoviesFn({
        query:debouncedValue,
      }),
    queryKey: ["search-movie", debouncedValue],
  });
}
