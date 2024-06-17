export interface ICreateVideoInputArgs {
  user_id: string
  description: string
  video_url: string
  title: string
}

export interface IAddVideoCommentInputArgs {
  user_id: string
  content: string
  video_id: string
}

export interface IVideoDetails {
  created_at: string; // Date string in ISO format
  description: string; // Description of the video
  id: string; // Unique identifier for the video
  num_comments: number; // Number of comments on the video
  title: string; // Title of the video
  user_id: string; // User ID of the person who uploaded the video
  video_url: string; // URL of the video
}

export type VideosApiData = {
  videos: IVideoDetails[]
}

export type VideoApiData = {
  video: IVideoDetails
}

export interface IVideoCommentDetails {
  created_at: string; // Date string in ISO format
  id: string; // Unique identifier for the video
  content: string; // Title of the video
  user_id: string; // User ID of the person who uploaded the video
  video_url: string; // URL of the video
}

export type VideoCommentsData = {
  comments: IVideoCommentDetails[]
}