import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Bus,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import busRoutesPdf from "@/assets/BUS ROUTE LANE STICKER.pdf";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 font-sans relative overflow-hidden cosmic-glow-border-top">
      <div className="container mx-auto px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Us */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-heading font-bold text-white shimmer-text">
              Contact Us
            </h3>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-400" />
              <a
                href="mailto:iotrix.sairam@gmail.com"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                iotrix.sairam@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-400" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-blue-400 mt-1" />
              <span>Sri Sairam Engineering College, Chennai, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-heading font-bold text-white shimmer-text">
              Quick Links
            </h3>
            <Link
              to="/events"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Events
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              About Us
            </Link>
          </div>

          {/* Bus Route Details */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-heading font-bold text-white shimmer-text">
              Bus Route Details
            </h3>
            <div className="flex items-center space-x-3">
              <Bus className="h-5 w-5 text-blue-400" />
              <a
                href={busRoutesPdf}
                download="Bus Routes.pdf"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                View Bus Routes & Timings
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Detailed information on transportation for the event day.
            </p>
          </div>

          {/* Follow Us On */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-heading font-bold text-white shimmer-text">
              Follow Us On
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:scale-125"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:scale-125"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:scale-125"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:scale-125"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} IOTRIX Symposium. All Rights
            Reserved.
          </p>
          <p className="mt-2">Designed by IOT Bois</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
