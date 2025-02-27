import React from "react";
import { useGetMovieQuery } from "../../data/api";
import { ListPreview } from "../../components";
import { TmdbLargeImageUrl } from "../../utils";

export default function List() {
  const { data } = useGetMovieQuery();

  return (
    <div className="my-8 space-y-4">
      <ListPreview
        title="Similar Movies"
        films={
          data?.result?.similar?.results?.map((item) => ({
            id: item.id ?? "",
            imageUrl: TmdbLargeImageUrl.concat(item.poster_path ?? ""),
            title: item.title ?? "",
          })) ?? []
        }
      />
      <ListPreview
        title="Recommended Movies"
        films={
          data?.result?.recommendations?.results?.map((item) => ({
            id: item.id ?? "",
            imageUrl: TmdbLargeImageUrl.concat(item.poster_path ?? ""),
            title: item.title ?? "",
          })) ?? []
        }
      />
    </div>
  );
}
