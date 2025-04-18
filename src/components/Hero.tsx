import { ArrowDown, Github, Linkedin, Twitter, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gotham-darkest">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(155,135,245,0.15)_0%,_rgba(26,31,44,0)_70%)]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_top_right,_rgba(15,160,206,0.15)_0%,_rgba(26,31,44,0)_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom,_rgba(21,24,36,0.7)_0%,_rgba(26,31,44,0)_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Profile Picture */}
          <Avatar className="w-32 h-32 mb-6 border-4 border-primary/30 hover:scale-105 transition-transform duration-300 hover:rotate-3 animate-up delay-100">
            <AvatarImage 
              src="/placeholder.svg" 
              alt="Your Profile Picture" 
              className="object-cover"
            />
            <AvatarFallback className="bg-primary/10 text-primary">
              JD
            </AvatarFallback>
          </Avatar>
          
          <div className="inline-block mb-4 px-4 py-1 border border-primary/30 rounded-full bg-primary/5 text-primary animate-in delay-100">
            <span className="text-sm font-medium">Full Stack Developer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white text-shadow animate-up delay-200">
            <span className="block">John Doe</span>
            <span className="text-primary text-glow">Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-8 animate-up delay-300">
            I build exceptional digital experiences with 
            <span className="text-primary"> modern technologies</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-up delay-400">
            <Button 
              size="lg" 
              className="bg-primary text-white hover:bg-primary/80 hover:accent-glow transition-all"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="border-secondary text-white hover:bg-secondary/10"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <FileDown className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6 animate-up delay-500">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-primary transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white/50 hover:text-primary"
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
