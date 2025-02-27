import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { GetMovieResponse } from "../../response";
import { GetMovieRequest } from "../../request";
import { Endpoints } from "../../endpoints";
import { useParams } from "react-router-dom";
import { getRequest } from "../../../lib";

export async function getMovieFn({
  movieId,
}: GetMovieRequest): Promise<RecursivePartial<GetMovieResponse>> {
  return getRequest({
    url: Endpoints.tmdb.getMovie(movieId),
  });
}

export function useGetMovieQuery() {
  const { id } = useParams<{ id: string }>();
  return useQuery({
    placeholderData: keepPreviousData,
    queryFn: () =>
      getMovieFn({
        movieId: id ?? "",
      }),
    queryKey: ["movie", id],
  });
}
