import { Movie } from "../../response";

export interface CreateListRequest {
  title: string;
  notes: string;
  films: Movie[];
}
