import { SignInResponse } from "../../response";
import { SignInRequest } from "../../request";
import { Endpoints } from "../../endpoints";
import { postRequest } from "../../../lib";
import { useMutation } from "@tanstack/react-query";

export async function signInFn(
  body: SignInRequest
): Promise<SignInResponse> {
  return postRequest({
    url: Endpoints.auth.signIn,
    body,
  });
}

export function useSignInMutation() {
  return useMutation({
    mutationFn: signInFn,
  });
}
