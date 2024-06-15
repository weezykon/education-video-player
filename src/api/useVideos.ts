import api from "core/client";
import { API_ROUTES, API_USER_ID } from "./constant";
import { useMutation, useQuery } from "react-query";
import { ICreateVideoInputArgs, VideosApiData, VideoApiData } from "./types";

export const useVideos = () => {
  const getVideos = async () => {
    const url = API_ROUTES.VIDEOS;
    const params = { user_id: API_USER_ID } ;
    const { data } = await api.get<VideosApiData>(url, {
      params
    });
    return data;
  };

  return useQuery(['videos'], getVideos);
}

export const useVideo = ({
  video_id,
}: {
  video_id: string;
}) => {
  const getVideo = async () => {
    const url = API_ROUTES.VIDEO;
    const params = { video_id } ;
    const { data } = await api.get<VideoApiData>(url, {
      params
    });
    return data;
  }

  return useQuery(['video', video_id], getVideo, {
    enabled: !!video_id,
  });
}

export const useAddVideo = () => {
  const addVideo = async (args: ICreateVideoInputArgs) => {
    const { data } = await api.post(API_ROUTES.VIDEOS, args);
    return data;
  };

  return useMutation(addVideo);
}