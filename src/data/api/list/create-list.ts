import { CreateListResponse } from "../../response";
import { CreateListRequest } from "../../request";
import { Endpoints } from "../../endpoints";
import { postRequest } from "../../../lib";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ApiErrorMessage, Routes } from "../../../utils";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createListFn,
    onSuccess(res) {
      toast.success("list Created Succesfully");
      queryClient.invalidateQueries({ queryKey: ["list", "lists"] });
      navigate(Routes.list(res._id ?? ""));
    },
    onError(err) {
      toast.error(ApiErrorMessage(err));
    },
  });
}
