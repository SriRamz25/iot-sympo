import Navigation from "@/components/Navigation";
import { Shield, Zap, Globe, Target, Code, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Innovation Shield",
      description: "Protecting and fostering innovative ideas for the future of technology."
    },
    {
      icon: Zap,
      title: "Lightning Learning",
      description: "Fast-paced, high-impact sessions designed for maximum knowledge transfer."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with industry leaders and peers from around the world."
    },
    {
      icon: Target,
      title: "Precision Focus",
      description: "Targeted workshops and sessions tailored to your career goals."
    },
    {
      icon: Code,
      title: "Tech Mastery",
      description: "Master cutting-edge technologies and development practices."
    },
    {
      icon: Users,
      title: "Team Assembly",
      description: "Build lasting professional relationships and collaborative networks."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="page-enter container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              ABOUT
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The Marvel Symposium 2024 is not just an event—it's an epic gathering of minds, 
              a convergence of innovation, and a launchpad for the next generation of tech heroes. 
              Our mission is to empower students and professionals with the skills, knowledge, 
              and network they need to become leaders in the digital age.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-bold mb-8 text-primary">Our Mission</h2>
            <div className="bg-card/50 backdrop-blur-lg rounded-2xl p-8 border border-border/30 max-w-4xl mx-auto marvel-glow">
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create an immersive, transformative experience that bridges the gap between 
                academic learning and industry expertise. We believe that every participant has 
                the potential to be a hero in their field, and our symposium provides the tools, 
                mentorship, and inspiration needed to unlock that potential.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-card/50 backdrop-blur-lg rounded-2xl p-6 border border-border/30 marvel-glow hover:scale-105 transition-all duration-500"
              >
                <div className="mb-4 p-3 rounded-xl bg-primary/10 w-fit">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-cosmic rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-8">Symposium Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-lg opacity-90">Participants</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">6</div>
                <div className="text-lg opacity-90">Epic Events</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">20+</div>
                <div className="text-lg opacity-90">Industry Experts</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">3</div>
                <div className="text-lg opacity-90">Amazing Days</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join the Assembly?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't just attend an event—become part of a movement. Join us in shaping 
              the future of technology and innovation.
            </p>
            <button className="btn-hero">
              Get Your Ticket Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;