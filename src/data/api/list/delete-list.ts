import { DeleteListResponse } from "../../response";
import { DeleteListRequest } from "../../request";
import { Endpoints } from "../../endpoints";
import { postRequest } from "../../../lib";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ApiErrorMessage } from "../../../utils";

export async function deleteListFn({
  listId,
  ...body
}: DeleteListRequest): Promise<RecursivePartial<DeleteListResponse>> {
  return postRequest({
    url: Endpoints.list.deleteList(listId),
    body,
  });
}

export function useDeleteListMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteListFn,
    onSuccess(res) {
      toast.success(res.message);
      queryClient.invalidateQueries({ queryKey: ["list", "lists"] });
    },
    onError(err) {
      toast.error(ApiErrorMessage(err));
    },
  });
}
