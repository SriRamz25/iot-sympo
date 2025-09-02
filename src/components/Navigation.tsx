import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            MARVEL SYMPOSIUM
          </Link>
          
          <div className="flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative px-4 py-2 font-semibold transition-all duration-300",
                  "hover:text-primary hover:scale-105",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;