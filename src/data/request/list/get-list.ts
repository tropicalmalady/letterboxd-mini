import { Movie } from "../../response";
import { PaginationRequest } from "../shared";

export interface GetListRequest extends PaginationRequest, Partial<Movie> {
  listId: string;
}
