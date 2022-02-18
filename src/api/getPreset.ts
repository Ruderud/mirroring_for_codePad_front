import { AxiosRequestConfig } from "axios";
import { Preset } from "../components/LaunchPad/utils/types";
import { axiosInstance } from "./axiosInstance";

export interface PresetParams {
  userId?: string;
  presetId?: string;
}

export interface Response extends Preset {
  thumbnailURL: string;
}

export async function getPreset(params: PresetParams) {
  console.log(params);
  const config: AxiosRequestConfig = {
    //token input
  };
  const response = await axiosInstance(config).get(
    `/presets/${params.userId}/${params.presetId}`
  );

  // const response = await axiosInstance(config).get(`/launchPad`);

  return response.data;
}
