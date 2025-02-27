import React from "react";
import { useIsMobile } from "../../hooks";
import { Poster, PosterProps } from "../poster";
import { Loader } from "../loader";

interface ListPreviewProps {
  title: string;
  films: PosterProps[];
  isLoading?: boolean;
}

export function ListPreview({ title, films, isLoading }: ListPreviewProps) {
  const isMobile = useIsMobile();

  return (
    <div className="mt-[3.75rem] mb-[2.3rem] text-left">
      <div className="border-b border-primary-6 mb-4">
        <h6 className="mb-0">{title}</h6>
      </div>
      {films.length == 0 ? (
        <div className="py-2 flex items-center justify-center bg-primary-5">
          <p>Empty</p>
        </div>
      ) : !isLoading ? (
        <div className="grid grid-cols-4 md:grid-cols-6 gap-1.5 md:gap-2.5">
          {films.slice(0, isMobile ? 4 : 6).map((item, index) => (
            <Poster key={index} {...item} />
          ))}
        </div>
      ) : (
        <div className="my-8 flex items-center justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
}
