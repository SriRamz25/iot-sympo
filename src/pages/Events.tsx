import Navigation from "@/components/Navigation";
import EventCarousel from "@/components/EventCarousel";

const Events = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="page-enter container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              EVENTS
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose your adventure! Each event is designed to unlock your potential 
              and equip you with superhero-level skills in technology and leadership.
            </p>
          </div>

          <EventCarousel />

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Assemble?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't miss out on this epic symposium experience. Register now and 
              secure your spot among the heroes of tomorrow.
            </p>
            <button className="btn-hero">
              Download Brochure Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;