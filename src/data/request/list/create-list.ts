import { Movie } from "../../response";

export interface CreateListRequest {
  title: string;
  notes?: string | null;
  films: Movie[];
}
