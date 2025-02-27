import React, { useEffect } from "react";
import { useGetListQuery } from "../../../data/api";
import { List, Loader } from "../../../components";
import { TmdbMediumImageUrl } from "../../../utils";
import Options from "./options";
import { useCreateList } from "../../../context";

export function ListDetail() {
  const { data, isPending, isSuccess, isError } = useGetListQuery();
  const { setFilms, setNotes, setTitle } = useCreateList();

  useEffect(() => {
    if (isSuccess) {
      setTitle(data.title ?? "");
      setNotes(data.notes ?? "");
      setFilms(data.films as any);
    }
  }, [isSuccess]);

  if (isPending) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h6>Something went wrong</h6>
      </div>
    );
  }

  return (
    <section>
      <div className="pb-30">
        <div className="mt-30 md:mt-40">
          <Options />
          <h4 className="text-3xl text-on-primary-5">{data?.title}</h4>
          <p className="my-4">{data?.notes}</p>
        </div>
        <div>
          <List
            films={
              data?.films?.map((item) => ({
                id: item.id ?? "",
                imageUrl: TmdbMediumImageUrl.concat(item.poster_path ?? ""),
                title: item.title ?? "",
              })) ?? []
            }
          />
        </div>
      </div>
    </section>
  );
}
