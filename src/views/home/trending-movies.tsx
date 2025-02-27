import React from "react";
import { ListPreview } from "../../components";
import { useGetTrendingMoviesQuery } from "../../data/api/tmdb/get-trending-movies";
import { TmdbLargeImageUrl } from "../../utils";

export default function TrendingMovies() {
  const { data, isPending } = useGetTrendingMoviesQuery();

  return (
    <section>
      <ListPreview
        isLoading={isPending}
        title="Trending Movies"
        films={
          data?.results?.map((item) => ({
            id: item.id ?? "",
            imageUrl: TmdbLargeImageUrl.concat(item.poster_path ?? ""),
            title: "",
          })) ?? []
        }
      />
    </section>
  );
}
