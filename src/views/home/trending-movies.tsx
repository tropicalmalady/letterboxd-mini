import React from "react";
import { Poster } from "../../components";
import { useIsMobile } from "../../hooks";

export default function TrendingMovies() {
  const isMobile = useIsMobile();

  return (
    <section>
      <div className="mt-[3.75rem] mb-[2.3rem]">
        <div className="flex gap-1.5 md:gap-2.5">
          {new Array(isMobile ? 4 : 6).fill(null).map((_, index) => (
            <Poster
              key={index}
              insights={{ likes: "1.2k", watches: "1.2k" }}
              id=""
              imageUrl="https://a.ltrbxd.com/resized/film-poster/6/2/0/2/8/1/620281-mickey-17-0-300-0-450-crop.jpg?v=93e4d2af6d"
              title=""
            />
          ))}
        </div>
      </div>
    </section>
  );
}
