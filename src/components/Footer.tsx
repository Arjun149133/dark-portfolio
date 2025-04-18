import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gotham-darkest py-10 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <Link
            to="/"
            className="text-xl font-bold text-primary text-glow mb-4"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            DEV<span className="text-white">KNIGHT</span>
          </Link>

          <div className="flex space-x-6 mb-6">
            <a
              href="#hero"
              className="text-white/70 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#hero")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white/70 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </a>
            <a
              href="#skills"
              className="text-white/70 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#skills")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-white/70 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white/70 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </a>
          </div>

          <div className="h-px w-full max-w-xl bg-white/10 mb-6"></div>

          <p className="text-white/60 text-center text-sm">
            &copy; {currentYear} All Rights Reserved | Made with{" "}
            <Heart className="inline-block h-4 w-4 text-red-500 mx-1" /> by
            <span className="text-primary ml-1">Arjun Yadav</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
