import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { GetListResponse } from "../../response";
import { GetListRequest } from "../../request";
import { Endpoints } from "../../endpoints";
import { useParams } from "react-router-dom";
import { getRequest } from "../../../lib";

export async function getListFn({
  listId,
  ...query
}: GetListRequest): Promise<RecursivePartial<GetListResponse>> {
  return getRequest({
    url: Endpoints.list.getList(listId),
    query,
  });
}

export function useGetListQuery() {
  const { id } = useParams<{ id: string }>();
  return useQuery({
    placeholderData: keepPreviousData,
    queryFn: () =>
      getListFn({
        listId: id ?? "",
      }),
    queryKey: ["list", id],
  });
}
