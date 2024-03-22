'use client';
import YouTube from 'react-youtube';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const YoutubeSlider: React.FC = () => {
  const slides = ["OM6dzXJZysg", "lkYFu8UMk-o", "A8vzUH6-irA", "H3bXEKwhSVI", "LamMpnFEUrc"]
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: slides.length }).map((_, index) => (
          <CarouselItem key={index}>
            <YouTube videoId={slides[index]} className="w-full h-full" opts={{ width: '100%', height: '100%' }} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
};

export default YoutubeSlider;