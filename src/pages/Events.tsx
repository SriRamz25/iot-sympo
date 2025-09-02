import Navigation from "@/components/Navigation";
import EventCarousel from "@/components/EventCarousel";
import brochurePdf from "@/assets/Merged posters.pdf";

const Events = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-28 pb-16">
        <div className="page-enter container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-heading">
              EVENTS
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto font-heading leading-relaxed">
              Choose your adventure! Each event is designed to unlock your
              potential and equip you with superhero-level skills in technology
              and leadership.
            </p>
          </div>

          <EventCarousel />

          <div className="mt-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 font-heading">Ready to Assemble?</h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto font-heading leading-relaxed">
              Don't miss out on this epic symposium experience. Register now and
              secure your spot among the heroes of tomorrow.
            </p>
            <a
              href={brochurePdf}
              download="IOTRIX Symposium Brochure.pdf"
              className="btn-hero font-heading"
            >
              Download Brochure Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
