import api from "core/client";
import { API_ROUTES, API_USER_ID } from "./constant";
import { useMutation, useQuery } from "react-query";
import { ICreateVideoInputArgs, VideosApiDats } from "./types";

export const useVideos = () => {
  const getVideos = async () => {
    const url = API_ROUTES.VIDEOS;
    const params = { user_id: API_USER_ID } ;
    const { data } = await api.get<VideosApiDats>(url, {
      params
    });
    return data;
  };

  return useQuery(['videos'], getVideos);
}

export const useAddVideo = () => {
  const addVideo = async (args: ICreateVideoInputArgs) => {
    const { data } = await api.post(API_ROUTES.VIDEOS, args);
    return data;
  };

  return useMutation(addVideo);
}