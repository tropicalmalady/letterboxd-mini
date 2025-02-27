import React from "react";
import { useGetListsQuery } from "../../../data/api";
import { Link, ListPreview } from "../../../components";
import { Routes, TmdbLargeImageUrl } from "../../../utils";

export default function Lists() {
  const { data } = useGetListsQuery();

  return (
    <div>
      {data?.data?.map((item, index) => (
        <Link key={index} to={Routes.list(item?._id ?? "")} className="w-full">
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
        </Link>
      ))}
    </div>
  );
}
