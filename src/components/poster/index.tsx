import React from "react";
import { Link } from "../link";
import { FaEye, FaHeart } from "react-icons/fa";

interface PosterProps {
  imageUrl: string;
  id: string;
  title: string;
  year: string;
  className?: string;
  insights?: {
    watches: string;
    likes: string;
  };
}

export function Poster({
  imageUrl,
  id,
  title,
  year,
  insights,
  className,
}: PosterProps) {
  return (
    <Link to="#">
      <div
        className={`aspect[2/3] relative rounded-sm overflow-hidden cursor-pointer group ${className}`}
        style={{
          boxShadow:
            "0 1px 5px rgba(0, 0, 0, .25), 0 1px 10px rgba(0, 0, 0, .35);",
        }}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute  border-accent inset-0 rounded-sm border-[0px] group-hover:border-[0.1875rem] transition-all flex  items-center">
          {insights && (
            <div className="opacity-0 group-hover:opacity-100 transition-all bg-black/80 text-center py-4 w-full flex flex-col gap-3 items-center mx-6 rounded-sm">
              <div className="flex flex-col items-center gap-1">
                <FaEye className="text-accent text-3xl" />
                <p className="text-white text-xl "> {insights.watches}</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <FaHeart className="text-error text-3xl" />
                <p className="text-white text-xl"> {insights.likes}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
