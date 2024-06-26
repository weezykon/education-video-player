import { useAddVideo, useVideos } from 'api/useVideos'
import { COLORS } from 'constants/colors'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Heading, Paragraph } from 'ui'
import { Layout } from 'ui/templates/layout'
import { ICreateVideoInput } from '../types'
import axios from 'axios'
import { API_USER_ID } from 'api/constant'
import { limitString } from '../utils'
import { PAGE_ROUTES } from 'constants/routes'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ICreateVideoInput>()
  const createVideo = useAddVideo();
  const {
    data,
    isLoading,
    error,
    refetch,
  } = useVideos();

  const onSubmit = async (input: ICreateVideoInput) => {
    try {
        const createVideoData = await createVideo.mutateAsync({
          ...input,
          user_id: API_USER_ID
        })

      if (createVideoData?.success) {
        reset()
        refetch()
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // add error toast
      }
    }
  };

  const openVideo = (id: string) => {
    navigate(PAGE_ROUTES.VIDEO?.replace(":id", id), {
      replace: true,
    });
  }

  const getVideosContent = () => {
    if (isLoading) {
      return Array.from({ length: 5 }).map((_, index) => (
        <div className='w-full flex space-x-4' key={index}>
          <div className='w-[150px] h-fit'>
            <div className="w-full h-[100px] bg-slate-300 rounded-md animate-pulse"></div>
          </div>
          <div className='w-full flex flex-col space-y-4'>
            <div className="w-3/4 h-6 bg-slate-300 rounded-md animate-pulse"></div>
            <div className="w-8/12 h-12 bg-slate-300 rounded-md animate-pulse"></div>
          </div>
        </div>
      ));
    }

    if (Array?.isArray(data?.videos) && data?.videos?.length) {
      return data?.videos?.map((video) => (
        <div className='w-full flex space-x-4 cursor-pointer' onClick={() => openVideo(video?.id)} key={video?.id}>
          <div className='w-[150px] h-fit'>
            <img src="https://res.cloudinary.com/dqqrgidob/image/upload/v1718360553/spy8ltfuihrmnhltbmqv.png"
              alt="thumbnail"
              className="w-full object-cover rounded-md"
              loading="lazy"
            />
          </div>
          <div className='flex flex-col space-y-2'>
            <Heading
              variant='h2'
              size='h9'
              weight="normal"
              color={COLORS.GRAY[900]}
            >
              {video?.title}
            </Heading>
            <Paragraph size="b5" color={COLORS.GRAY[400]}>
              {limitString(video?.description, 20, true)}
            </Paragraph>

            <Paragraph size="b7" color={COLORS.GRAY[400]}>
              comments: {video?.num_comments}
            </Paragraph>
          </div>
        </div>
      ));
    }

    // return no data
    return (
      <div className='w-full h-[200px] flex items-center justify-center'>
        <Heading
          variant='h2'
          size='h9'
          weight="normal"
          color={COLORS.GRAY[900]}
        >
          No data found
        </Heading>
      </div>
    )
  }

  return (
    <Layout>
      <div className='w-full flex flex-col lg:flex-row gap-4'>
        <div className='w-full flex flex-col p-6 space-y-4 max-w-[500px] bg-gray-200/30 rounded-tl-2xl rounded-tr-2xl h-[calc(100vh_-_80px)] xl:h-[calc(100vh_-_100px)] scroll-smooth overflow-y-scroll'>
          {getVideosContent()}
        </div>

        {/* Add Video */}
        <div className='w-full flex-col space-y-3 p-4'>
          <Heading
            variant='h2'
            size='h9'
            weight="normal"
            color={COLORS.GRAY[900]}
          >
            Add Video
          </Heading>

          <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col space-y-4'>
            <div className='w-full flex flex-col space-y-2'>
              <label
                className="block text-b6 xl:text-b5 font-normal text-black dark:text-grey-700 subpixel-antialiased"
                htmlFor="title"
              >
                Title
              </label>
              <input className={`w-full flex items-center appearance-none border ${errors.title ? 'border-red-400' : 'border-gray-20'} px-4 py-3 font-normal text-b6 xl:text-b4 text-gray-900 rounded-lg focus:outline-none focus:border-gray-20 focus:shadow-gray-100 placeholder:text-gray-400`} {...register("title", { required: "Title is required" })} />
              {errors.title ? (
                <span className='text-red-400 text-b6'>{errors?.title?.message}</span>
              ) : null}

            </div>
            <div className='w-full flex flex-col space-y-2'>
              <label
                className="block text-b6 xl:text-b5 font-normal text-black dark:text-grey-700 subpixel-antialiased"
                htmlFor="description"
              >
                Description
              </label>
              <input className={`w-full flex items-center appearance-none border ${errors.description ? 'border-red-400' : 'border-gray-20'}  px-4 py-3 font-normal text-b6 xl:text-b4 text-gray-900 rounded-lg focus:outline-none focus:border-gray-20 focus:shadow-gray-100 placeholder:text-gray-400`} {...register("description", { required: "Description is required" })} />
              {errors.description?.message ? (
                <span className='text-red-400 text-b6'>{errors?.description?.message}</span>
              ) : null}
            </div>
            {/* TODO: convert input to file uploader */}
            <div className='w-full flex flex-col space-y-2'>
              <label
                className="block text-b6 xl:text-b5 font-normal text-black dark:text-grey-700 subpixel-antialiased"
                htmlFor="video_url"
              >
                Video Url
              </label>
              <input className={`w-full flex items-center appearance-none border ${errors.video_url ? 'border-red-400' : 'border-gray-20'}  px-4 py-3 font-normal text-b6 xl:text-b4 text-gray-900 rounded-lg focus:outline-none focus:border-gray-20 focus:shadow-gray-100 placeholder:text-gray-400`} {...register("video_url", { required: "Video url is required" })} />
              {errors.video_url ? (
                <span className='text-red-400 text-b6'>{errors?.video_url?.message}</span>
              ) : null}
            </div>

            <Button
              variant='primary'
              className=''
              disabled={createVideo.isLoading}
              loading={createVideo.isLoading}
              size='lg'
              rounded='lg'
            >
              Submit Video
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Home