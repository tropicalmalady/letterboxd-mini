import { BaseResponse, UserResponse } from "../shared";

export interface SignInResponse extends BaseResponse {
  user: UserResponse;
  accessToken: string;
}
