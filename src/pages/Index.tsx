import Navigation from "@/components/Navigation";
import CountdownTimer from "@/components/CountdownTimer";
import { Calendar, MapPin, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroBg})`
        }}
      >
        <div className="page-enter container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            MARVEL
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            SYMPOSIUM 2024
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Assemble with the greatest minds in technology and innovation. 
            Join us for an epic journey of learning, networking, and heroic achievements.
          </p>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-white">Event Starts In</h3>
            <CountdownTimer />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-hero">
              Register Now
            </button>
            <button className="btn-secondary">
              View Events
            </button>
          </div>
        </div>
      </div>

      {/* Quick Info Section */}
      <div className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-lg border border-border/30 marvel-glow">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">3 Days Event</h3>
              <p className="text-muted-foreground">December 29-31, 2024</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-lg border border-border/30 marvel-glow">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-bold mb-2">College Campus</h3>
              <p className="text-muted-foreground">Main Auditorium & Tech Labs</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-lg border border-border/30 marvel-glow">
              <Users className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-bold mb-2">500+ Participants</h3>
              <p className="text-muted-foreground">Students, Faculty & Industry Experts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
