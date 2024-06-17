import { useMutation, useQuery } from "react-query";
import { API_ROUTES } from "./constant";
import { IAddVideoCommentInputArgs, VideoCommentsData } from "./types";
import api from "core/client";

export const useAddVideoComment = () => {
  const addVideoComment = async (args: IAddVideoCommentInputArgs) => {
    const { data } = await api.post(API_ROUTES.COMMENT, args);
    return data;
  };

  return useMutation(addVideoComment);
}

export const useVideoComments = ({
  video_id,
}: {
  video_id: string;
}) => {
  const getVideoComments = async () => {
    const url = API_ROUTES.COMMENT;
    const params = { video_id } ;
    const { data } = await api.get<VideoCommentsData>(url, {
      params
    });

    return data;
  }

  return useQuery(['comments', video_id], getVideoComments, {
    enabled: !!video_id,
  });
}