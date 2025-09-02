import { useState, useEffect } from "react";
import { X, Calendar, Clock, User, ExternalLink, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

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

interface RegistrationModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal = ({ event, isOpen, onClose }: RegistrationModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleRegister = () => {
    if (event?.registrationLink) {
      window.open(event.registrationLink, '_blank');
    }
  };

  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with cosmic animation */}
      <div 
        className={cn(
          "absolute inset-0 bg-black/80 backdrop-blur-md transition-all duration-500",
          isAnimating ? "opacity-100" : "opacity-0"
        )}
        onClick={handleClose}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-red-900/20 animate-pulse" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Modal Card with expanding animation */}
      <div 
        className={cn(
          "relative w-full max-w-4xl mx-4 transform transition-all duration-700 ease-out",
          isAnimating 
            ? "scale-100 opacity-100 translate-y-0 rotate-0" 
            : "scale-0 opacity-0 translate-y-32 rotate-12"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-card/95 backdrop-blur-xl rounded-3xl border-2 border-primary/30 overflow-hidden shadow-2xl">
          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-xl" />
          
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 hover:rotate-90"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative z-10 flex flex-col lg:flex-row">
            {/* Hero Image Section */}
            <div className="lg:w-1/2 relative h-64 lg:h-auto">
              <img
                src={event.heroImage}
                alt={event.hero}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Hero Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                <span className="text-white font-semibold">{event.hero}</span>
              </div>

              {/* Event Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                  {event.title}
                </h2>
                <p className="text-gray-200 text-lg">
                  {event.description}
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-8 space-y-6">
              {/* Event Details Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl border border-primary/20">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-semibold">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                  <Clock className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-semibold">{event.time}</p>
                  </div>
                </div>
              </div>

              {/* Coordinator Info */}
              <div className="p-4 bg-accent/10 rounded-xl border border-accent/20">
                <div className="flex items-center gap-3 mb-2">
                  <User className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-lg">Event Coordinator</h3>
                </div>
                <p className="font-medium">{event.coordinator}</p>
                <a 
                  href={`mailto:${event.coordinatorEmail}`}
                  className="text-accent hover:text-accent/80 transition-colors text-sm"
                >
                  {event.coordinatorEmail}
                </a>
              </div>

              {/* Additional Details */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Venue</h4>
                  <p className="text-muted-foreground">{event.venue}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Duration</h4>
                  <p className="text-muted-foreground">{event.duration}</p>
                </div>

                {event.prerequisites.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Prerequisites</h4>
                    <ul className="space-y-1">
                      {event.prerequisites.map((prereq, index) => (
                        <li key={index} className="text-muted-foreground text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {prereq}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Registration Button */}
              <div className="pt-4">
                <button
                  onClick={handleRegister}
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-primary via-red-600 to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold py-4 px-8 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <div className="relative flex items-center justify-center gap-2">
                    <span className="text-lg">Register Now</span>
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
