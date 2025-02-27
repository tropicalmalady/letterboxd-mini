import React, { useState } from "react";
import { Input } from "react-aria-components";
import { FaSearch } from "react-icons/fa";
import { Loader } from "../../components";
import { Link } from "react-router-dom";
import { useSearchMoviesQuery } from "../../data/api";
import { Routes } from "../../utils";

export default function SearchMovie() {
  const [input, setInput] = useState<string>("");
  const { data, isFetching } = useSearchMoviesQuery({ query: input });

  return (
    <div className="flex items-center justify-center h-full md:mt-[-10rem]">
      <div className="relative flex items-center text-primary-10">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={
            "rounded-full py-4 pl-12 pr-9 w-[20rem] md:w-[30rem] bg-white/10 backdrop-blur-[16px] outline-0 border border-primary-10"
          }
        />
        <FaSearch className="absolute text-2xl left-4" />
        {isFetching && (
          <div className="right-2 absolute">
            <Loader />
          </div>
        )}

        {data?.results && data.results.length > 0 && (
          <div className="absolute z-10 left-0 right-0 top-[4.5rem] bg-primary-6 rounded-sm origin-top text-sm py-1.5 border border-on-primary-1">
            <div className="max-h-[15rem] overflow-scroll">
              <div>
                {data.results?.map((item, index) => (
                  <Link key={index} to={Routes.film(item.id?.toString() ?? "")}>
                    <p className="py-1.5 px-4 text-on-primary-3 capitalize">
                      {`${item.title} (${item.release_date || ""})`}
                      {item.title != item.original_title && (
                        <span className="text-[0.6rem] ml-2 text-[#d8e0e8] capitalize inline-block">
                          {item.original_title}
                        </span>
                      )}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
