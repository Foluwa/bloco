import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import yt_short_1 from '../../public/images/yt_short_1.png';
import yt_short_2 from '../../public/images/yt_short_2.png';


const YoutubeSlider: React.FC = () => {
  const slides = [yt_short_1, yt_short_2]
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: slides.length }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={slides[index]}
                    alt=""
                    className="rounded-sm animate-fade-in block scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                    fill={true}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
};

export default YoutubeSlider;