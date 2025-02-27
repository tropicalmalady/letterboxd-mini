import React, { useState } from "react";
import { Label } from "react-aria-components";
import { FaSearch, FaTrash } from "react-icons/fa";
import { Input, Loader, Poster } from "../../../components";
import { useSearchMoviesQuery } from "../../../data/api";
import { useCreateList } from "../../../context";
import { TmdbMediumImageUrl } from "../../../utils";

export default function AddFilm() {
  const [input, setInput] = useState<string>("");
  const { data, isFetching } = useSearchMoviesQuery({ query: input });
  const { films, setFilms } = useCreateList();

  return (
    <div>
      <Label>Add Film</Label>
      <div className="relative flex items-center text-primary-10">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={"pl-12 pr-9"}
        />
        <FaSearch className="absolute text-xl left-4" />
        {isFetching && (
          <div className="right-2 absolute">
            <Loader />
          </div>
        )}

        {data?.results && data.results.length > 0 && (
          <div className="absolute z-10 left-0 right-0 bottom-[4.5rem] bg-primary-6 rounded-sm origin-top text-sm py-1.5 border border-on-primary-1">
            <div className="max-h-[15rem] overflow-scroll">
              <div>
                {data.results?.map((item, index) => (
                  <div
                    key={index}
                    className="py-1.5 px-4 text-on-primary-3 capitalize block cursor-pointer"
                    onClick={() => {
                      setFilms(Array.from(new Set([...films, item] as any)));
                      setInput("");
                    }}
                  >
                    {`${item.title} (${item.release_date})`}
                    {item.title != item.original_title && (
                      <span className="text-[0.6rem] ml-2 text-[#d8e0e8] capitalize inline-block">
                        {item.original_title}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Results />
    </div>
  );
}

function Results() {
  const { films, setFilms } = useCreateList();

  return (
    <div className="mt-4 space-y-4">
      {films.map((item, index) => (
        <div key={index} className="flex gap-4 items-center">
          <Poster
            id={""}
            imageUrl={TmdbMediumImageUrl.concat(item?.poster_path ?? "")}
            title=""
            className="w-[2rem]"
          />
          <h6 className="text-xs">{`${item.title} (${item.release_date})`}</h6>
          <button
            className="ml-auto block cursor-pointer"
            onClick={() => {
              setFilms(
                films.filter((currentItem) => item.id != currentItem.id)
              );
            }}
          >
            <FaTrash className="text-xl text-error" />
          </button>
        </div>
      ))}
    </div>
  );
}
