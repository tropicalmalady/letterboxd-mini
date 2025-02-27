import { MovieDetails } from "../shared";

export interface GetMovieResponse {
  result: {
    release_date: string;
    trailer: string;
    directorName: string;
  } & MovieDetails;
}
