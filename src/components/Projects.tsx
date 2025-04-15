
import { useState } from "react";
import { ExternalLink, Github, MousePointerClick } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with product management, cart, and payment integration.",
      image: "https://placehold.co/600x400/1A1F2C/9b87f5?text=E-Commerce+App",
      category: "fullstack",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description: "Collaborative task management system with real-time updates and team workspace.",
      image: "https://placehold.co/600x400/1A1F2C/0FA0CE?text=Task+Dashboard",
      category: "frontend",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Real Estate Listing App",
      description: "Property listing platform with search, filtering, and mapping features.",
      image: "https://placehold.co/600x400/1A1F2C/7E69AB?text=Real+Estate+App",
      category: "fullstack",
      tags: ["React", "Express", "PostgreSQL", "Google Maps API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Health & Fitness Tracker",
      description: "Mobile app for tracking workouts, nutrition, and health metrics with analytics.",
      image: "https://placehold.co/600x400/1A1F2C/9b87f5?text=Fitness+Tracker",
      category: "mobile",
      tags: ["React Native", "TypeScript", "Node.js", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "AI Content Generator",
      description: "Web application that uses AI to generate content for blogs, social media, and marketing.",
      image: "https://placehold.co/600x400/1A1F2C/0FA0CE?text=AI+Generator",
      category: "frontend",
      tags: ["React", "OpenAI API", "CSS Modules", "Vercel"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Developer Portfolio",
      description: "A customizable portfolio template for developers to showcase their work.",
      image: "https://placehold.co/600x400/1A1F2C/7E69AB?text=Dev+Portfolio",
      category: "frontend",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filters = [
    { name: "All", value: "all" },
    { name: "Frontend", value: "frontend" },
    { name: "Fullstack", value: "fullstack" },
    { name: "Mobile", value: "mobile" }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gotham-darker relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(155,135,245,0.1)_0%,_rgba(26,31,44,0)_70%)]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-up">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto">
            Here's a selection of projects I've worked on. Each project represents different skills 
            and technologies in my full-stack development journey.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {filters.map(filter => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.value)}
                className={`
                  ${activeFilter === filter.value 
                    ? "bg-primary text-white hover:bg-primary/80" 
                    : "border-primary/30 text-white hover:bg-primary/10 hover:text-primary"
                  }
                `}
              >
                {filter.name}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="bg-card/50 backdrop-blur-sm border border-white/5 overflow-hidden group hover:border-primary/30 transition-all duration-300 animate-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-primary hover:bg-primary/80" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="border-white/20 hover:bg-white/10" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <MousePointerClick className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline"
                      className="bg-primary/5 text-primary border-primary/30 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* More Projects */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              More Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
