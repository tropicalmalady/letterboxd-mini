import { CreateListResponse } from "../../response";
import { CreateListRequest } from "../../request";
import { Endpoints } from "../../endpoints";
import { postRequest } from "../../../lib";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ApiErrorMessage } from "../../../utils";

export async function createListFn(
  body: CreateListRequest
): Promise<RecursivePartial<CreateListResponse>> {
  return postRequest({
    url: Endpoints.list.createList,
    body,
  });
}

export function useCreateListMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createListFn,
    onSuccess(res) {
      toast.success(res.message);
      queryClient.invalidateQueries({ queryKey: ["list"] });
    },
    onError(err) {
      toast.error(ApiErrorMessage(err));
    },
  });
}
