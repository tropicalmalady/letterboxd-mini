import React from "react";
import { useGetMovieQuery } from "../../data/api";
import Badge from "../../components/badge";

export default function Details() {
  const { data } = useGetMovieQuery();
  return (
    <div>
      <div className="flex mb-4 gap-2">
        <div className="flex-1">
          <h6 className="text-xs m-0 p-0">Studios</h6>
        </div>
        <div className="flex-1">
          <div className="space-x-2 space-y-2">
            {data?.result?.studios?.map((item, index) => (
              <Badge key={index} title={item.name ?? ""} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex mb-4 gap-2">
        <div className="flex-1">
          <h6 className="text-xs m-0 p-0">Country</h6>
        </div>
        <div className="flex-1">
          <div className="space-x-2 space-y-2">
            {data?.result?.countries?.map((item, index) => (
              <Badge key={index} title={item.name ?? ""} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex mb-4 gap-2">
        <div className="flex-1">
          <h6 className="text-xs m-0 p-0">Language</h6>
        </div>
        <div className="flex-1">
          <div className="space-x-2 space-y-2">
            {data?.result?.spoken_languages?.map((item, index) => (
              <Badge key={index} title={item.name ?? ""} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex mb-4 gap-2">
        <div className="flex-1">
          <h6 className="text-xs m-0 p-0">Alternative Titles</h6>
        </div>
        <div className="flex-1">
          {data?.result?.alternative_titles?.slice(0,20).map((item, index) => (
            <p key={index} className="whitespace-nowrap text-[0.7rem]">
              {item ?? ""}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
