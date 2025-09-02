import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import RegistrationModal from "./RegistrationModal";

// Import hero images
import doctorStrangeImg from "@/assets/Doctor-Strange.jpg";
import taskMasterImg from "@/assets/Task-Master.jpg";
import ironManImg from "@/assets/iron-man.jpg";
import captainAmericaImg from "@/assets/captain-america.jpg";
import thorImg from "@/assets/thor.jpg";
import taskmasterImg from "@/assets/captain-america.jpg"; // Temporary placeholder - add taskmaster.jpg later
import spiderManImg from "@/assets/spider-man.jpg";
interface Event {
  id: number;
  title: string;
  description: string;
  hero: string;
  heroImage: string;
  date: string;
  time: string;
  coordinator: string;
  coordinatorEmail: string;
  registrationLink: string;
  venue: string;
  duration: string;
  prerequisites: string[];
}

const events: Event[] = [
  {
    id: 1,
    title: "Pic-Linc",
    description: "Showcase your technological prowess",
    hero: "I love you 3000!",
    heroImage: ironManImg,
    date: "17-09-2025",
    time: "10:00 AM",
    coordinator: "Prasanna Vijay, Srinidhi V",
    coordinatorEmail: "9962733233",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSecuiTeJDVTvfSrTxJkBsKH0_phY5rKf2xcdGvaxamX7sSXRQ/viewform",
    venue: "Sri Sairam Engineering College",
    duration: "3 hours",
    prerequisites: ["Confirmation Mail", "College ID Card", "EZ Buzzer App"],
  },
  {
    id: 2,
    title: "Hactrix",
    description: "Learn leadership skills and team management strategies",
    hero: "I can do this all the day",
    heroImage: captainAmericaImg,
    date: "17-09-2025",
    time: "10:00 AM",
    coordinator: "Ram Saravanan, Sai Lingeshwaran",
    coordinatorEmail: "7708636302",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSecuiTeJDVTvfSrTxJkBsKH0_phY5rKf2xcdGvaxamX7sSXRQ/viewform",
    venue: "Sri Sairam Engineering College",
    duration: "3 hours",
    prerequisites: ["Laptop", "AI Tools Allowed"],
  },
  {
    id: 3,
    title: "SenScript",
    description: "Master the art of powerful and impactful presentations",
    hero: "Bring me thanos",
    heroImage: thorImg,
    date: "Day 2",
    time: "9:00 AM",
    coordinator: "Vishal B, Amirthavarshini SA",
    coordinatorEmail: "7810065192",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSf7SAPldxlt3AUS_eiVg9QmIzPfciYspEOBzN0zlD3TVisd2g/viewform",
    venue: "Presentation Theater - Main Stage",
    duration: "2 hours",
    prerequisites: ["Project PPT", "Laptop"],
  },
  {
    id: 4,
    title: "Task Master",
    description:
      "Master task management, productivity, and strategic execution skills",
    hero: "Games are for kids, and I am a professional",
    heroImage: taskMasterImg,
    date: "Day 2",
    time: "1:00 PM",
    coordinator: "Venkata Krishnan, Jagedharshini RK",
    coordinatorEmail: "7904633231",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdQG6LIn2S-FD2OW7ORCYQ2KOFhTuhY5j8WikpxeJvJ-uIW6g/viewform",
    venue: "Sri Sairam Engineering College",
    duration: "3 hours",
    prerequisites: ["College ID Card"],
  },
  {
    id: 5,
    title: "Brute Code",
    description: "Learn agile methodologies and rapid development techniques",
    hero: "With Great Power Comes Great Responsibility",
    heroImage: spiderManImg,
    date: "Day 3",
    time: "11:00 AM",
    coordinator: "Jayasurya R, Sai Prashanth MVS",
    coordinatorEmail: "8825549362",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdQG6LIn2S-FD2OW7ORCYQ2KOFhTuhY5j8WikpxeJvJ-uIW6g/viewform",
    venue: "Sri Sairam Engineering College",
    duration: "4 hours",
    prerequisites: ["ID Card"],
  },
  {
    id: 6,
    title: "Pixel UX",
    description:
      "Master mystical arts of UI/UX design and user experience magic",
    hero: "I love you in every universe",
    heroImage: doctorStrangeImg,
    date: "Day 3",
    time: "3:00 PM",
    coordinator: "Hrishikesh R, Swathi V",
    coordinatorEmail: "9489257933",
    registrationLink:
      "https://docs.google.com/forms/u/3/d/e/1FAIpQLSc0fSvj9fBWdBCFE3ZmQud7zEoZrIiEgVZsy7IXPgvAHTHJbg/viewform",
    venue: "Sri Sairam Engineering College",
    duration: "3 hours",
    prerequisites: ["Laptop", "Ethernet Cable", "ID Card"],
  },
];

const EventCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const openModal = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const getCardPosition = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0) return "center";
    return "side";
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <button
          onClick={prevSlide}
          className="absolute left-4 z-20 p-3 rounded-full bg-card/80 backdrop-blur-lg border border-border/50 hover:bg-primary/20 transition-all duration-300 shadow-glow"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="overflow-hidden w-full px-8">
          <div
            className="carousel-container"
            style={{
              transform: `translateX(calc(-${
                currentIndex * 470
              }px + 50% - 235px))`,
            }}
          >
            {events.map((event, index) => (
              <div
                key={event.id}
                className={cn(
                  "carousel-card event-card marvel-glow",
                  getCardPosition(index)
                )}
              >
                <div className="relative h-96 bg-gradient-to-b from-card to-card/80 p-6 flex flex-col">
                  {/* <div className="absolute top-4 right-4 text-xs bg-primary/20 px-3 py-1 rounded-full">
                    {event.date} • {event.time}
                  </div>
                   */}
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

                  <button
                    className="mt-auto btn-secondary w-full hover:scale-105 transition-all duration-300 py-3"
                    onClick={() => openModal(event)}
                  >
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-4 z-20 p-3 rounded-full bg-card/80 backdrop-blur-lg border border-border/50 hover:bg-primary/20 transition-all duration-300 shadow-glow"
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

      {/* Registration Modal */}
      <RegistrationModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default EventCarousel;
