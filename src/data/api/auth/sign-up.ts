import { SignUpResponse } from "../../response";
import { SignUpRequest } from "../../request";
import { Endpoints } from "../../endpoints";
import { postRequest } from "../../../lib";
import { useMutation } from "@tanstack/react-query";

export async function signUpFn(
  body: SignUpRequest
): Promise<RecursivePartial<SignUpResponse>> {
  return postRequest({
    url: Endpoints.auth.signUp,
    body,
  });
}

export function useSignUpMutation() {
  return useMutation({
    mutationFn: signUpFn,
  });
}
