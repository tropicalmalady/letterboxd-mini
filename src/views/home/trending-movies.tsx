import React from "react";
import { Poster } from "../../components";

export default function TrendingMovies() {
  return (
    <section>
      <div className="mt-[3.75rem] mb-[2.3rem]">
        <div className="flex gap-2.5">
          {new Array(6).fill(null).map((_, index) => (
            <Poster
              insights={{ likes: "1.2k", watches: "1.2k" }}
              id=""
              imageUrl="https://a.ltrbxd.com/resized/film-poster/6/2/0/2/8/1/620281-mickey-17-0-300-0-450-crop.jpg?v=93e4d2af6d"
              title=""
              year=""
            />
          ))}
        </div>
      </div>
    </section>
  );
}
