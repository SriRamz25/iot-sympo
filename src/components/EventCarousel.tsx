import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Import hero images
import ironManImg from "@/assets/iron-man.jpg";
import captainAmericaImg from "@/assets/captain-america.jpg";
import thorImg from "@/assets/thor.jpg";
import blackWidowImg from "@/assets/black-widow.jpg";
import spiderManImg from "@/assets/spider-man.jpg";
import hulkImg from "@/assets/hulk.jpg";

interface Event {
  id: number;
  title: string;
  description: string;
  hero: string;
  heroImage: string;
  date: string;
  time: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Tech Innovation Challenge",
    description: "Showcase your technological prowess and innovative solutions",
    hero: "Iron Man",
    heroImage: ironManImg,
    date: "Day 1",
    time: "10:00 AM"
  },
  {
    id: 2,
    title: "Leadership Summit",
    description: "Learn leadership skills and team management strategies",
    hero: "Captain America",
    heroImage: captainAmericaImg,
    date: "Day 1",
    time: "2:00 PM"
  },
  {
    id: 3,
    title: "Power Presentation",
    description: "Master the art of powerful and impactful presentations",
    hero: "Thor",
    heroImage: thorImg,
    date: "Day 2",
    time: "9:00 AM"
  },
  {
    id: 4,
    title: "Strategic Planning",
    description: "Develop strategic thinking and tactical planning skills",
    hero: "Black Widow",
    heroImage: blackWidowImg,
    date: "Day 2",
    time: "1:00 PM"
  },
  {
    id: 5,
    title: "Agile Development",
    description: "Learn agile methodologies and rapid development techniques",
    hero: "Spider-Man",
    heroImage: spiderManImg,
    date: "Day 3",
    time: "11:00 AM"
  },
  {
    id: 6,
    title: "Breakthrough Session",
    description: "Break through barriers and overcome challenges",
    hero: "Hulk",
    heroImage: hulkImg,
    date: "Day 3",
    time: "3:00 PM"
  }
];

const EventCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const getCardPosition = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0) return "center";
    return "side";
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <div className="flex items-center justify-center min-h-[600px]">
        <button
          onClick={prevSlide}
          className="absolute left-4 z-20 p-3 rounded-full bg-card/80 backdrop-blur-lg border border-border/50 hover:bg-primary/20 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="overflow-hidden w-full">
          <div 
            className="carousel-container"
            style={{
              transform: `translateX(calc(-${currentIndex * 420}px + 50% - 200px))`,
            }}
          >
            {events.map((event, index) => (
              <div
                key={event.id}
                className={cn(
                  "carousel-card event-card",
                  getCardPosition(index)
                )}
              >
                <div className="relative h-96 bg-gradient-to-b from-card to-card/80 p-6">
                  <div className="absolute top-4 right-4 text-xs bg-primary/20 px-3 py-1 rounded-full">
                    {event.date} • {event.time}
                  </div>
                  
                  <div className="relative h-48 mb-4 overflow-hidden rounded-xl">
                    <img
                      src={event.heroImage}
                      alt={event.hero}
                      className="event-card-hero w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white font-bold text-lg">
                      {event.hero}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                  
                  <button className="mt-4 btn-secondary w-full">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-4 z-20 p-3 rounded-full bg-card/80 backdrop-blur-lg border border-border/50 hover:bg-primary/20 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;