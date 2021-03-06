import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "../axiosInstance";

export interface getCommentListParams {
  presetId: string;
  pageNum: number;
  limitNum: number;
}

export async function getCommentListAPI(params: getCommentListParams) {
  const config: AxiosRequestConfig = {};

  const response = await axiosInstance(config).get(
    `/presets/${params.presetId}/comments?page=${params.pageNum}&limit=${params.limitNum}`
  );
  return response.data;
}

export interface postCommentParams {
  presetId: string;
  text: string;
}

export async function postCommentListAPI(params: postCommentParams) {
  const config: AxiosRequestConfig = {};

  const data = {
    text: params.text,
  };

  const response = await axiosInstance(config).post(
    `/presets/${params.presetId}/comments`,
    data
  );

  return response.data;
}

export interface putCommentParams {
  presetId: string;
  commentId: string;
  text: string;
}

export async function putCommnetListAPI(params: putCommentParams) {
  const config: AxiosRequestConfig = {};
  const data = {
    commentId: params.commentId,
    text: params.text,
  };
  const response = await axiosInstance(config).put(
    `/presets/${params.presetId}/comments`,
    data
  );

  return response.data;
}

export interface deleteCommentParams {
  presetId: string;
  commentId: string;
}

export async function deleteCommnetListAPI(params: deleteCommentParams) {
  const config: AxiosRequestConfig = {};

  const data = {
    data: {
      commentId: params.commentId,
    },
  };

  const response = await axiosInstance(config).delete(
    `/presets/${params.presetId}/comments`,
    data
  );

  return response.data;
}
