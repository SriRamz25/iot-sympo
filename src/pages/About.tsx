import Navigation from "@/components/Navigation";
import { useEffect, useState } from "react";
import img1 from "@/assets/banner1.jpg";
import img3 from "@/assets/banner 2.jpg";
import img4 from "@/assets/banner 3.jpg";
import img5 from "@/assets/banner 5.jpg";

// Head of the Department (standalone card)
const hod = { name: "Dr M Kanthimathi", role: "Head of the Department" };
// Symposium Coordinator (yellow box)
const symposiumCoordinator = {
  name: "Dr P Sathyaraj",
  role: "Symposium Coordinator",
};
// Staff Coordinators (no photo)
const staffCoordinators = [
  { name: "Dr G Valarmathy" },
  { name: "Ms M Piramu" },
  { name: "Ms I Delphia" },
  { name: "Ms M Ilamathi" },
  { name: "Dr K Pranitha" },
  { name: "Mr D Doss" },
  { name: "Dr S Bairavel" },
  { name: "Ms G Keerthana" },
  { name: "Ms R A C Uma Maheshwari" },
  { name: "Ms N T Velusudha" },
  { name: "Mr Naveen Devaraj" },
  { name: "Ms Rajalakshmi" },
  { name: "Ms Sahara Fathima" },
];

// Students for Event Organization
const eventOrganizers = [
  { name: "Raja Lakshmi (IV) Chairman " },
  { name: "Arasu MG (III) Vice Chairman" },
  { name: "Ramana Krishnan (III) Social media Manager " }
];

// Students for Poster Making
const posterMakers = [
  { name: "Yathesh R(III year)" },
  { name: "Pragadeeswaran S (II year)" },
  { name: "Sai Lingeshwaran K (II year" },
  { name: "Sanchidha M (II year)" },
  { name: "Madhavan S (II year)" },
  { name: "Bavadharani M  (II year)" },
  { name: "Krithika K (II year)" },
];

// Students for Promotion Making
const promotionMakers = [
  { name: "Sabarish R(III)" },
  { name: "Meenakshi Sundaram S(III)" },
  { name: "Siddesh(IV)" },
  { name: "Sriram VT(III)" },
];

// Students for Website Making
const websiteMakers = [
  { name: "Meenakshi Sundaram S(III)" },
  { name: "Sriram VT(III)" },
  { name: "Arun R(III)" },
  { name: "Harinath E(III)" },
  { name: "Meenakshi Sundaram V(III)" },
  { name: "Soorya K(II)" },
  { name: "Saravanan S.N (II)" },
  { name: "Shriraam Balaji R.S(II)" },
];

const About = () => {
  const images = [img1, img3, img4, img5];
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Slowed down for a smoother feel
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="relative flex items-center justify-start min-h-[600px] w-full overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="About background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === bgIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-start justify-center h-full">
          <div className="max-w-2xl">
            <h1 className="font-heading text-5xl md:text-7xl xl:text-8xl mb-6 text-primary text-left">
              ABOUT US
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-left text-gray-300 animate-fade-in-up animation-delay-300 leading-relaxed">
              The IOTRIX Symposium 2025 is not just an event—it's an epic
              gathering of minds, a convergence of innovation, and a launchpad for
              the next generation of tech heroes. Our mission is to empower
              students and professionals with the skills, knowledge, and network
              they need to become leaders in the digital age.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-black py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 text-center animate-fade-in-up">
            <h2 className="font-heading text-5xl md:text-6xl cosmic-glow">
              Our Leadership
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              Meet the visionary minds guiding the IOTRIX Symposium 2025.
            </p>
          </div>

          {/* HOD and Coordinator */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12 animate-fade-in-up animation-delay-300">
            {/* HOD Card */}
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-red-500/50 rounded-2xl p-8 text-center shadow-lg shadow-red-500/20 transition-all duration-300 hover:scale-105 hover:shadow-red-500/40">
              <h3 className="text-3xl font-bold text-white font-heading">
                {hod.name}
              </h3>
              <p className="text-red-400 text-xl mt-2">{hod.role}</p>
            </div>

            {/* Coordinator Card */}
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-yellow-400/50 rounded-2xl p-8 text-center shadow-lg shadow-yellow-400/20 transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/40">
              <h3 className="text-3xl font-bold text-white font-heading">
                {symposiumCoordinator.name}
              </h3>
              <p className="text-yellow-300 text-xl mt-2">
                {symposiumCoordinator.role}
              </p>
            </div>
          </div>

          {/* Staff Coordinators */}
          <div className="mt-24 animate-fade-in-up animation-delay-600">
            <div className="mx-auto max-w-2xl lg:mx-0 text-center">
              <h2 className="font-heading text-5xl md:text-6xl cosmic-glow">
                Staff Coordinators
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-300">
                The dedicated team making this event possible.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8"
            >
              {staffCoordinators.map((person, idx) => (
                <li
                  key={idx}
                  className="rounded-2xl bg-gray-900/80 backdrop-blur-sm px-6 py-8 text-center border border-primary/50 transition-all duration-300 hover:bg-primary/20 hover:border-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold leading-7 tracking-tight text-white">
                    {person.name}
                  </h3>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Organizers */}
          <div className="mt-24 animate-fade-in-up animation-delay-700">
            <div className="mx-auto max-w-2xl lg:mx-0 text-center">
                             <h2 className="font-heading text-5xl md:text-6xl cosmic-glow">
                 Student Event Organizers
               </h2>
               <p className="mt-6 text-xl leading-8 text-gray-300">
                 Honoring the students who organized the event.
               </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8"
            >
              {eventOrganizers.map((person, idx) => (
                <li
                  key={idx}
                  className="rounded-2xl bg-gray-900/80 backdrop-blur-sm px-6 py-8 text-center border border-accent/50 transition-all duration-300 hover:bg-accent/20 hover:border-accent hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold leading-7 tracking-tight text-white">
                    {person.name}
                  </h3>
                </li>
              ))}
            </ul>
          </div>

          {/* Poster Makers */}
          <div className="mt-24 animate-fade-in-up animation-delay-800">
            <div className="mx-auto max-w-2xl lg:mx-0 text-center">
                             <h2 className="font-heading text-5xl md:text-6xl cosmic-glow">
                 Poster Making Team
               </h2>
               <p className="mt-6 text-xl leading-8 text-gray-300">
                 Honoring the students who designed our posters.
               </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
            >
              {posterMakers.map((person, idx) => (
                <li
                  key={idx}
                  className="rounded-2xl bg-gray-900/80 backdrop-blur-sm px-6 py-8 text-center border border-secondary/50 transition-all duration-300 hover:bg-secondary/20 hover:border-secondary hover:scale-105 hover:shadow-lg hover:shadow-secondary/20"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold leading-7 tracking-tight text-white">
                    {person.name}
                  </h3>
                </li>
              ))}
            </ul>
          </div>

          {/* Promotion Makers */}
          <div className="mt-24 animate-fade-in-up animation-delay-900">
            <div className="mx-auto max-w-2xl lg:mx-0 text-center">
                             <h2 className="font-heading text-5xl md:text-6xl cosmic-glow">
                 Promotion Team
               </h2>
               <p className="mt-6 text-xl leading-8 text-gray-300">
                 Honoring the students who promoted the event.
               </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8"
            >
              {promotionMakers.map((person, idx) => (
                <li
                  key={idx}
                  className="rounded-2xl bg-gray-900/80 backdrop-blur-sm px-6 py-8 text-center border border-yellow-400/50 transition-all duration-300 hover:bg-yellow-400/20 hover:border-yellow-400 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold leading-7 tracking-tight text-white">
                    {person.name}
                  </h3>
                </li>
              ))}
            </ul>
          </div>

          {/* Website Makers */}
          <div className="mt-24 animate-fade-in-up animation-delay-1000">
            <div className="mx-auto max-w-2xl lg:mx-0 text-center">
                             <h2 className="font-heading text-5xl md:text-6xl cosmic-glow">
                 Website Team
               </h2>
               <p className="mt-6 text-xl leading-8 text-gray-300">
                 Honoring the students who built this website.
               </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
            >
              {websiteMakers.map((person, idx) => (
                <li
                  key={idx}
                  className="rounded-2xl bg-gray-900/80 backdrop-blur-sm px-6 py-8 text-center border border-primary/50 transition-all duration-300 hover:bg-primary/20 hover:border-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold leading-7 tracking-tight text-white">
                    {person.name}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
