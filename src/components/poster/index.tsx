import React from "react";
import { Link } from "../link";
import { FaEye, FaHeart } from "react-icons/fa";
import { Routes } from "../../utils";

export interface PosterProps {
  imageUrl: string;
  id: string | number;
  title: string;
  isUnclickable?: boolean;
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
  insights,
  className,
  isUnclickable,
}: PosterProps) {
  const child = (
    <div
      className={`aspect-[2/3] relative rounded-sm overflow-hidden group ${className}`}
      style={{ boxShadow: "inset 0 0 1px #def" }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover p-[1px]"
      />
      {!isUnclickable && (
        <div className="absolute border-accent inset-0 rounded-sm border-[0px] group-hover:border-[0.1875rem] transition-all hidden lg:flex items-center ">
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
      )}
    </div>
  );

  return isUnclickable ? child : <Link to={Routes.film(id)}>{child}</Link>;
}
