import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./config";
import { QueryHelper } from "../../utils";

interface Request<T> {
  url: string;
  query?: T;
  config?: AxiosRequestConfig<T | null> | undefined;
}

interface MutationRequest<T> extends Request<T> {
  body: T | null;
}

export async function getRequest<U, T extends Object>({
  url,
  query,
  config,
}: Request<T>): Promise<U> {
  return axiosInstance
    .get(QueryHelper(url, query), config)
    .then((response) => response.data);
}

export async function postRequest<U, T extends Object>({
  url,
  query,
  body,
  config,
}: MutationRequest<T>): Promise<U> {
  return axiosInstance
    .post(QueryHelper(url, query), body, config)
    .then((response) => response.data);
}

export async function patchRequest<U, T extends Object>({
  url,
  query,
  body,
  config,
}: MutationRequest<T>): Promise<U> {
  return axiosInstance
    .patch(QueryHelper(url, query), body, config)
    .then((response) => response.data);
}

export async function putRequest<U, T extends Object>({
  url,
  query,
  body,
  config,
}: MutationRequest<T>): Promise<U> {
  return axiosInstance
    .put(QueryHelper(url, query), body, config)
    .then((response) => response.data);
}

export async function deleteRequest<U, T extends Object>({
  url,
  query,
  config,
}: MutationRequest<T>): Promise<U> {
  return axiosInstance
    .delete(QueryHelper(url, query), config)
    .then((response) => response.data);
}
