import React from "react";
import { useGetListsQuery } from "../../../data/api";
import { ListPreview } from "../../../components";
import { TmdbLargeImageUrl } from "../../../utils";

export default function Lists() {
  const { data, isPending } = useGetListsQuery();

  return (
    <div>
      {data?.data?.map((item, index) => (
        <div key={index}>
          <ListPreview
            title={item.title ?? ""}
            films={
              item.films?.map((item) => ({
                id: item.id ?? "",
                isUnclickable: true,
                imageUrl: TmdbLargeImageUrl.concat(item.poster_path ?? ""),
                title: item.title ?? "",
              })) ?? []
            }
          />
        </div>
      ))}
    </div>
  );
}
