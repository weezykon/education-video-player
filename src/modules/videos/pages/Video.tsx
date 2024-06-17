import React from 'react'
import { Layout } from 'ui/templates/layout'
import '@vidstack/react/player/styles/base.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { useVideo } from 'api/useVideos';
import { useParams } from 'react-router-dom';
import { Button, Heading, Paragraph } from 'ui';
import { COLORS } from 'constants/colors';
import { Controller, useForm } from "react-hook-form";
import { ICommentVideoInput } from '../types';
import axios from 'axios';
import { API_USER_ID, MAXIMUM_NOTE_LENGTH } from 'api/constant';
import { useAddVideoComment, useVideoComments } from 'api/useComments';

const Video = () => {
  const params = useParams();
  const createComment = useAddVideoComment();
  const video_id = params.id as string;
  const { register, handleSubmit, reset, control } = useForm<ICommentVideoInput>()

  const {
    data,
    isLoading,
  } = useVideo({
    video_id
  });

  const {
    data: videoCommentsData,
    isLoading: videoCommentsIsLoading,
    refetch,
  } = useVideoComments({
    video_id
  });

  const getVideoContent = () => {
    if (isLoading) {
      return (
        <div className='w-full flex flex-col space-y-3'>
          <div className="w-full h-[500px] bg-slate-300 animate-pulse"></div>
          <div className='w-full flex flex-col space-y-4'>
            <div className="w-3/4 h-6 bg-slate-300 rounded-md animate-pulse"></div>
            <div className="w-8/12 h-12 bg-slate-300 rounded-md animate-pulse"></div>
          </div>
        </div>
      );
    }

    if (!data?.video) {
      return <div>No video found</div>;
    }

    const submitComment = async (input: ICommentVideoInput) => {
      try {
        console.log({
          input
        })
        const addCommentData = await createComment.mutateAsync({
          content: input?.comment,
          user_id: API_USER_ID,
          video_id: data?.video?.id
        })

        if (addCommentData?.success) {
          reset()
          refetch()
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // add error toast
        }
      }
    };

    return (
      <div className='w-full flex flex-col space-y-3 mb-12'>
        <MediaPlayer autoplay={true} controls={true} volume={1} title={data?.video?.title} src={data?.video?.video_url}>
          <MediaProvider />
        </MediaPlayer>
        <div className='w-full flex flex-col lg:flex-row gap-4'>
          <div className='w-full flex flex-col space-y-6'>
            <div className='w-full flex flex-col space-y-2'>
              <Heading
                variant='h2'
                size='h9'
                weight="semiBold"
                color={COLORS.GRAY[900]}
              >
                {data?.video?.title}
              </Heading>
              <Paragraph size="b5" color={COLORS.GRAY[400]}>
                {data?.video?.description}
              </Paragraph>
            </div>

            {/* comments */}
            <div className='w-full flex flex-col'>
              <Heading
                variant='h3'
                size='h11'
                weight="semiBold"
                color={COLORS.GRAY[900]}
              >
                Comments {videoCommentsData?.comments?.length}
              </Heading>
              <div className='w-full flex flex-col space-y-2'>
                {videoCommentsData?.comments?.map((comment) => (
                  <blockquote className="p-4 my-4 border-s-4 border-gray-800 bg-gray-50 dark:border-gray-800 dark:bg-gray-400">
                    <Paragraph size="b4" color={COLORS.WHITE}>
                      {comment?.content}
                    </Paragraph>
                    <Paragraph size="b7" color={COLORS.GRAY[900]} className='uppercase'>
                      {comment?.user_id?.replace("_", " ")}
                    </Paragraph>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
          <div className='w-full lg:w-[30%] px-4'>
            <form onSubmit={handleSubmit(submitComment)} className='w-full flex flex-col space-y-4'>
              <div className='w-full flex flex-col space-y-2'>
                <label htmlFor="comment" className='text-sm font-medium text-gray-900 block'>Comment</label>
                <Controller
                  control={control}
                  name="comment"
                  render={({
                    field: { onChange, onBlur, name, ref, value },
                    formState: { errors },
                  }) => {
                    const maxLength = MAXIMUM_NOTE_LENGTH;

                    return (
                      <textarea
                        className={`w-full appearance-none border border-grey-20 px-4 py-3 font-normal text-b6 xl:text-b4 text-grey-900 rounded-lg focus:outline-none focus:border-grey-20 focus:shadow-grey-100 focus:shadow-purple-50 placeholder:text-grey-400 h-[116px] overflow-y-scroll resize-none`}
                        {...(register && register('comment', { required: true }))}
                      ></textarea>
                    );
                  }}
                />
              </div>
              <Button
                variant='primary'
                className=''
                disabled={createComment.isLoading}
                loading={createComment.isLoading}
                size='lg'
                rounded='lg'
              >
                Add comment
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      {getVideoContent()}
    </Layout>
  )
}

export default Video