import { Movie } from "../shared";

export interface GetListsResponse {
  data: {
    _id: string;
    title: string;
    notes?: string;
    films: Movie[];
  }[];
}
