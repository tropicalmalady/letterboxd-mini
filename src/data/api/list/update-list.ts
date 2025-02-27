import { UpdateListResponse } from "../../response";
import { UpdateListRequest } from "../../request";
import { Endpoints } from "../../endpoints";
import { putRequest } from "../../../lib";
import { useMutation} from "@tanstack/react-query";

export async function updateListFn({
  listId,
  ...body
}: UpdateListRequest): Promise<RecursivePartial<UpdateListResponse>> {
  return putRequest({
    url: Endpoints.list.updateList(listId),
    body,
  });
}

export function useUpdateListMutation() {
  return useMutation({
    mutationFn: updateListFn,
  });
}
