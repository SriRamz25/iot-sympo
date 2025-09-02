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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50">
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-8 px-3 bg-white text-red-700 flex items-center justify-center shadow-hero" style={{fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '1px'}}>
                <span className="text-3xl leading-none font-black">IOTRIX</span>
              </div>
            </Link>

            <div className="flex gap-2 sm:gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative px-3 py-2 font-semibold text-white/90 transition-all duration-300",
                    "hover:text-white",
                    location.pathname === item.path
                      ? "text-white"
                      : "text-white/80"
                  )}
                >
                  {item.name}
                  <span className={cn(
                    "pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[2px] w-0 bg-white/80 transition-all duration-300",
                    location.pathname === item.path ? "w-4/5 shadow-[0_0_12px_2px_rgba(255,255,255,0.5)]" : "group-hover:w-4/5"
                  )} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
