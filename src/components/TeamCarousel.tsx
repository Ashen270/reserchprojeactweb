
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface TeamCarouselProps {
  teamMembers: TeamMember[];
}

const TeamCarousel = ({ teamMembers }: TeamCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!api) return;

    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        api.scrollNext();
      }, 3000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [api, isAutoPlaying]);

  const handleCarouselClick = () => {
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  return (
    <Carousel
      setApi={setApi}
      className="w-full max-w-5xl mx-auto"
      opts={{
        align: "start",
        loop: true,
      }}
      onClick={handleCarouselClick}
    >
      <CarouselContent>
        {teamMembers.map((member, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                <CardContent className="pt-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default TeamCarousel;
