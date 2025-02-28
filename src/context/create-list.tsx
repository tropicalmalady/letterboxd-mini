import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { Movie } from "../data/response";

export interface UseCreateList {
  title: string | null;
  setTitle(val: string): void;
  notes: string | null;
  setNotes(val: string | null): void;
  films: Movie[];
  setFilms(val: Movie[]): void;
  reset(): void;
}

export const CreateListContext = createContext<UseCreateList | null>(null);

export function CreateListProvider({ children }: PropsWithChildren) {
  const [title, setTitle] = useState<string | null>(null);
  const [notes, setNotes] = useState<string | null>(null);
  const [films, setFilms] = useState<Movie[]>([]);

  return (
    <CreateListContext.Provider
      value={{
        title,
        setTitle,
        notes,
        setNotes,
        films,
        setFilms,
        reset() {
          setTitle(null);
          setNotes(null);
          setFilms([]);
        },
      }}
    >
      {children}
    </CreateListContext.Provider>
  );
}

export function useCreateList() {
  const state = useContext(CreateListContext);
  if (!state) {
    throw new Error("useCreateList should be used within <CreateListProvider>");
  }
  return state;
}
