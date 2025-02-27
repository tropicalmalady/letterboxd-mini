import React, { useEffect, useState } from "react";
import { Loader, Poster } from "../../components";
import Casts from "./cast";
import Crew from "./crews";
import Details from "./details";
import { useGetMovieQuery } from "../../data/api";
import { TmdbLargeImageUrl, TmdbOriginalImageUrl } from "../../utils";
import List from "./list";
import { FaStar } from "react-icons/fa";

enum Tab {
  cast = "Cast",
  crew = "Crew",
  details = "Details",
}

export function FilmDetailView() {
  const [tabState, setTabState] = useState<Tab>(Tab.cast);
  const { data, isFetching } = useGetMovieQuery();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (isFetching) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <section className="mx-[-1rem] md:mx-auto overflow-hidden md:overflow-visible pb-16">
      <div
        className="aspect-[1.778] relative mx-[-8rem]"
        style={{
          backgroundImage: `url(${TmdbOriginalImageUrl}/${data?.result?.backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="backdropmask"></div>
      </div>

      <div className="relative mt-[-20%] flex mx-4 md:mx-auto">
        <div className="absolute md:sticky top-0 md:top-[2rem] right-0 md:right-[initial]">
          <Poster
            title=""
            id=""
            imageUrl={`${TmdbLargeImageUrl}/${data?.result?.poster_path}`}
            className="w-[5rem] md:w-[14rem]"
            isUnclickable
          />
          {data?.result?.vote_average && (
            <div className="hidden md:flex mt-4 items-center justify-center">
              <FaStar className="text-accent text-3xl mr-[1rem]" />
              <p className="text-4xl">{data.result.vote_average.toFixed(1)}</p>
              <p>/10</p>
            </div>
          )}
        </div>

        <div className="md:mx-[3rem] md:max-w-[24rem] bg-primary md:bg-transparent">
          <div className="md:flex flex-wrap items-end gap-2 max-w-[75%] md:max-w-full">
            <h4 className="text-white text-[2rem] leading-[1.1] mr-1">
              {data?.result?.title}
            </h4>
            <div className="flex flex-col md:flex-row gap-1">
              <p className="text-on-primary-3 md:underline mt-4 md:mt-0">
                {data?.result?.release_date}
                <span className="inline-block mx-2">Directed by</span>
                <span className="inline-block text-on-primary-3 md:underline font-bold md:font-normal">
                  {data?.result?.directorName}
                </span>
              </p>
            </div>
          </div>

          <div className="pt-3 pb-1 mt-2 md:mt-0">
            <h6 className="text-sm">{data?.result?.tagline}</h6>
          </div>

          <div>
            <p>{data?.result?.overview}</p>
          </div>

          <div className="mt-9">
            <div className="space-x-4 border-b border-primary-8 pb-1 mb-3">
              {Object.values(Tab).map((item, index) => (
                <button
                  className={`${
                    item == tabState ? "text-white" : "text-accent"
                  } uppercase cursor-pointer`}
                  key={index}
                  onClick={() => {
                    setTabState(item);
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
            {tabState == Tab.cast ? (
              <Casts />
            ) : tabState == Tab.crew ? (
              <Crew />
            ) : (
              <Details />
            )}
          </div>
        </div>
      </div>
      <List />
    </section>
  );
}
