import { useQuery } from "@tanstack/react-query";
import { GetListsResponse } from "../../response";
import { Endpoints } from "../../endpoints";
import { getRequest } from "../../../lib";

export async function getListsFn(): Promise<
  RecursivePartial<GetListsResponse>
> {
  return getRequest({
    url: Endpoints.list.getLists,
  });
}

export function useGetListsQuery() {
  return useQuery({
    queryFn: () => getListsFn(),
    queryKey: ["lists"],
  });
}
