'use client';

import Image from "next/image";
import yt_short_1 from '../../public/images/yt_short_1.png';
import yt_short_2 from '../../public/images/yt_short_2.png';

const YoutubeSlider: React.FC = () => {
  const images = [yt_short_1, yt_short_2]
  return (

    <div className="flex flex-row">
      {images.map((image) => (
        <Image
          src={image.src}
          alt="Image"
          width={500}
          height={300}
          className="p-2 w-1/2 rounded-3xl hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
        />
      ))}
    </div>
  );
};


export default YoutubeSlider;

/*
const YoutubeSlider: React.FC = () => {
  const slides = ["OM6dzXJZysg", "lkYFu8UMk-o", "A8vzUH6-irA", "H3bXEKwhSVI", "LamMpnFEUrc", "lsJvSJpjaNE"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="w-72 flex overflow-x-scroll scroll-smooth rounded">
      <button onClick={handlePrev} className="hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 disabled:opacity-50">
        <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>
      <div className="flex w-full space-x-4">
        {slides.slice(currentIndex, currentIndex + 3).map((slide) => (
          <YouTubeShort key={slide} videoId={slide} />
        ))}
      </div>
      <button onClick={handleNext} className="p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 disabled:opacity-50">
        <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 001.414 0l4-4a1 1 0 000-1.414l-4-4a1 1 0 00-1.414 1.414L10.586 10l-3.293 3.293a1 1 0 000 1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};*/