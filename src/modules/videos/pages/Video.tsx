import React from 'react'
import { Layout } from 'ui/templates/layout'
import '@vidstack/react/player/styles/base.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { useVideo } from 'api/useVideos';
import { useParams } from 'react-router-dom';
import { Heading, Paragraph } from 'ui';
import { COLORS } from 'constants/colors';

const Video = () => {
  const params = useParams();
  const video_id = params.id as string;

  const {
    data,
    isLoading,
    error,
    refetch,
  } = useVideo({
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

    return (
      <div className='w-full flex flex-col space-y-3'>
        <MediaPlayer autoplay={true} controls={true} volume={1} title="Sprite Fight" src={data?.video?.video_url}>
          <MediaProvider />
        </MediaPlayer>
        <div className='flex flex-col space-y-4'>
          <Heading
            variant='h2'
            size='h9'
            weight="normal"
            color={COLORS.GRAY[900]}
          >
            {data?.video?.title}
          </Heading>
          <Paragraph size="b5" color={COLORS.GRAY[400]}>
            {data?.video?.description}
          </Paragraph>
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