import Navigation from "@/components/Navigation";
import CountdownTimer from "@/components/CountdownTimer";
import { Calendar, MapPin, Users, Download, ArrowRight } from "lucide-react";
import heroBg from "@/assets/BG_video.mp4";
import brochurePdf from "@/IOTRIIX'25.pdf";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import React, { useState } from "react";
import IOTRIXImg from "@/assets/IoTrix_Poster.jpeg"; // Import the image

const Index = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); // State for modal

  const handleDownloadBrochure = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement("a");
    link.href = brochurePdf; // Use imported PDF from assets
    link.download = "Iotrix-2025-Brochure.pdf"; // Name for downloaded file
    link.target = "_blank"; // Open in new tab as fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />

      {/* Modal for IOTRIX image */}
           {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <img
              src={IOTRIXImg}
              alt="IOTRIX"
              className="w-full h-full object-contain"
              style={{ maxWidth: "100vw", maxHeight: "100vh" }}
            />
            <button
              className="absolute top-6 right-8 text-white hover:text-red-500 text-4xl font-bold bg-black/40 rounded-full px-4 py-2"
              onClick={() => setShowModal(false)}
              aria-label="Close"
              style={{ zIndex: 10 }}
            >
              &times;
            </button>
          </div>
        </div>
)}
            
        

      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse-glow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          src={heroBg}
          autoPlay
          muted
          loop
          playsInline
          poster={heroBg} // if you already have an image for fallback
        />

        {/* Cosmic Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

        <div className="relative z-10 container mx-auto px-6 pt-28 pb-20">
          {/* Hero Content Container */}
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Title Section */}
            <div className="mb-16 font-heading flex flex-col items-center gap-6">
              <div className="relative animate-in slide-in-from-top-10 duration-700">
                <button
                  className="px-8 py-3 bg-white text-red-700 inline-block shadow-hero focus:outline-none"
                  style={{ borderRadius: "0.5rem" }}
                  onClick={() => setShowModal(true)}
                  aria-label="Show IOTRIX Image"
                >
                  <span
                    className="text-7xl md:text-8xl xl:text-9xl leading-none"
                    style={{ fontWeight: 900, letterSpacing: "2px" }}
                  >
                    IOTRIX
                  </span>
                </button>
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 via-white/0 to-red-500/20 blur-2xl -z-10 rounded"></div>
              </div>
              <h2 className="font-heading text-5xl md:text-6xl xl:text-7xl font-extrabold text-white tracking-wider leading-tight animate-in fade-in-0 duration-1000 delay-150">
                IOTRIX SYMPOSIUM 2025
              </h2>
            </div>

            {/* Description */}
            <div className="mb-16 animate-in fade-in-0 duration-1000 delay-400">
              <p className="text-2xl md:text-3xl xl:text-4xl text-gray-200 max-w-6xl mx-auto leading-relaxed font-light">
                Assemble with the greatest minds in technology and innovation.
                <br className="hidden md:block" />
                Join us for an epic journey of learning, networking, and heroic
                achievements.
              </p>
            </div>

            {/* Countdown Section */}
            <div className="mb-16 animate-in zoom-in-95 duration-1000 delay-600">
              <div className="flex items-center justify-center mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
                <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mx-8 whitespace-nowrap font-heading">
                  Event Starts In
                </h3>
                <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
              </div>

              <div className="relative max-w-4xl mx-auto">
                <CountdownTimer />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-in slide-in-from-bottom-6 duration-1000 delay-800">
              <button
                className="group relative overflow-hidden bg-gradient-to-r from-primary via-red-600 to-primary hover:from-red-600 hover:via-primary hover:to-red-600 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 flex items-center gap-4 min-w-[280px] text-xl"
                onClick={handleDownloadBrochure}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                <Download className="w-6 h-6 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Download Brochure</span>
              </button>

              <button
                className="group relative overflow-hidden bg-gradient-to-r from-secondary via-blue-600 to-secondary hover:from-blue-600 hover:via-secondary hover:to-blue-600 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/30 flex items-center gap-4 min-w-[280px] text-xl"
                onClick={() => navigate("/events")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                <span className="relative z-10">View Events</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Info Section */}
      <section className="relative py-24 bg-gradient-to-b from-background via-card/10 to-background">
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-secondary/3" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(var(--primary),0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(var(--secondary),0.05),transparent_50%)]" />

        <div className="relative z-10 container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000">
            <h2 className="text-6xl md:text-7xl xl:text-8xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-heading">
              Event Highlights
            </h2>
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-24"></div>
              <div className="w-3 h-3 bg-primary rounded-full mx-4"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent w-24"></div>
            </div>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
              Where Things Talk, and Ideas Spark.
            </p>
          </div>

          {/* Enhanced Info Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card 1 - Event Duration */}
            <div className="group relative text-center p-10 rounded-3xl bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border border-border/30 hover:border-primary/50 transition-all duration-700 hover:scale-105 animate-in fade-in-0 slide-in-from-left-8 duration-1000 delay-200">
              {/* Card Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

              <div className="relative z-10">
                {/* Icon Container */}
                <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <Calendar className="w-10 h-10 text-primary group-hover:animate-pulse" />
                </div>

                {/* Content */}
                <h3 className="text-4xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors duration-500 font-heading">
                  1 Day Event
                </h3>
                <p className="text-muted-foreground text-xl leading-relaxed">
                  September 17, 2025
                </p>
                <div className="mt-6 text-sm text-muted-foreground/80">
                  One intensive day of workshops, presentations, and networking
                </div>
              </div>
            </div>

            {/* Card 2 - Venue */}
            <div className="group relative text-center p-10 rounded-3xl bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border border-border/30 hover:border-secondary/50 transition-all duration-700 hover:scale-105 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-400">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-secondary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <MapPin className="w-10 h-10 text-secondary group-hover:animate-pulse" />
                </div>

                <h3 className="text-4xl font-bold mb-6 text-foreground group-hover:text-secondary transition-colors duration-500 font-heading">
                  College Campus
                </h3>
                <p className="text-muted-foreground text-xl leading-relaxed">
                  Main Auditorium & Tech Labs
                </p>
                <div className="mt-6 text-sm text-muted-foreground/80">
                  State-of-the-art facilities with modern technology
                  infrastructure
                </div>
              </div>
            </div>

            {/* Card 3 - Participants */}
            <div className="group relative text-center p-10 rounded-3xl bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl border border-border/30 hover:border-accent/50 transition-all duration-700 hover:scale-105 animate-in fade-in-0 slide-in-from-right-8 duration-1000 delay-600">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <Users className="w-10 h-10 text-accent group-hover:animate-pulse" />
                </div>

                <h3 className="text-4xl font-bold mb-6 text-foreground group-hover:text-accent transition-colors duration-500 font-heading">
                  5+Events
                </h3>
                <p className="text-muted-foreground text-xl leading-relaxed">
                  Students, Faculty & Industry Experts
                </p>
                <div className="mt-6 text-sm text-muted-foreground/80">
                  Connect with like-minded innovators and thought leaders
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
