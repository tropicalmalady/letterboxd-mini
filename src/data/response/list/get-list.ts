import { Movie } from "../shared";

export interface GetListResponse {
  title: string;
  notes?: string;
  films: Movie[];
  totalPages: number;
  currentPage: number;
  totalItems: number;
}
