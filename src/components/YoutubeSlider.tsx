import Image from 'next/image';
import yt_short_1 from '../../public/images/yt_short_1.png';
import yt_short_2 from '../../public/images/yt_short_2.png';

// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

 const YoutubeSlider = () => {
  return (
    <div>
      <Image
        src={yt_short_1.src}
        alt=""
        // className="animate-fade-in block h-72 scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
        className="animate-fade-in"
        layout="fill"
      />
    </div>
  )
}
export default YoutubeSlider;