import YouTube from 'react-youtube';

interface YouTubeShortProps {
    videoId: string;
  }
  
  const YouTubeShort: React.FC<YouTubeShortProps> = ({ videoId }) => {
    const opts = {
      playerVars: {
        autoplay: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        iv_load_policy: 3,
        theme: 'light',
        color: 'white',
      },
    };
  
    const onReady = (event: { target: any }) => {
      event.target.playVideo();
    };
  
    return (
      <YouTube videoId={videoId} opts={opts} onReady={onReady} className='rounded youtube-widget' />
    );
  };
  
  export default YouTubeShort;