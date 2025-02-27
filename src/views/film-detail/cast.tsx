import React from "react";
import { useGetMovieQuery } from "../../data/api";
import Badge from "../../components/badge";

export default function Casts() {
  const { data } = useGetMovieQuery();
  return (
    <div className="space-x-2 space-y-2">
      {data?.result?.credits?.cast?.slice(0,40).map((item, index) => (
        <Badge key={index} title={item.name ?? ""}></Badge>
      ))}
    </div>
  );
}
