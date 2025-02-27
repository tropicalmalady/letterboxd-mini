import { UpdateListResponse } from "../../response";
import { UpdateListRequest } from "../../request";
import { Endpoints } from "../../endpoints";
import { postRequest } from "../../../lib";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ApiErrorMessage } from "../../../utils";

export async function updateListFn({
  listId,
  ...body
}: UpdateListRequest): Promise<RecursivePartial<UpdateListResponse>> {
  return postRequest({
    url: Endpoints.list.updateList(listId),
    body,
  });
}

export function useUpdateListMutation() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: updateListFn,
    onSuccess(res) {
      toast.success(res.message);
      queryClient.invalidateQueries({ queryKey: ["list"] });
    },
    onError(err) {
      toast.error(ApiErrorMessage(err));
    },
  });
}
