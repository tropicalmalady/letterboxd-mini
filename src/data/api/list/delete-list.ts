import { DeleteListResponse } from "../../response";
import { DeleteListRequest } from "../../request";
import { Endpoints } from "../../endpoints";
import { deleteRequest } from "../../../lib";
import { useMutation } from "@tanstack/react-query";

export async function deleteListFn({
  listId,
  ...body
}: DeleteListRequest): Promise<RecursivePartial<DeleteListResponse>> {
  return deleteRequest({
    url: Endpoints.list.deleteList(listId),
    body,
  });
}

export function useDeleteListMutation() {
  return useMutation({
    mutationFn: deleteListFn,
  });
}
