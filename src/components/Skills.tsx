
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const techSkills = [
    { name: "JavaScript/TypeScript", value: 90 },
    { name: "React.js", value: 88 },
    { name: "Node.js", value: 85 },
    { name: "Next.js", value: 82 },
    { name: "HTML/CSS", value: 95 },
    { name: "Tailwind CSS", value: 90 },
    { name: "MongoDB", value: 80 },
    { name: "PostgreSQL", value: 75 },
    { name: "GraphQL", value: 70 },
    { name: "Docker", value: 65 },
  ];

  const toolsList = [
    "Git & GitHub",
    "VS Code",
    "Figma",
    "AWS",
    "Firebase",
    "Vercel",
    "Jest",
    "Cypress",
    "Webpack",
    "Redux",
    "REST APIs",
    "CI/CD",
  ];

  return (
    <section id="skills" className="py-20 bg-gotham-dark relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(15,160,206,0.1)_0%,_rgba(26,31,44,0)_70%)]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-up">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto">
            I've worked with a wide range of technologies in the web development world.
            Here's an overview of my technical skills and tools I use.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div className="animate-left delay-100">
            <h3 className="text-xl font-bold mb-6 text-white border-b border-primary/30 pb-2">
              Technical Skills
            </h3>
            
            <div className="space-y-5">
              {techSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-white group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </span>
                    <span className="text-primary">{skill.value}%</span>
                  </div>
                  <Progress 
                    value={skill.value} 
                    className="h-2 bg-white/10 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent group-hover:[&>div]:accent-glow [&>div]:transition-shadow [&>div]:duration-300" 
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className="animate-right delay-200">
            <h3 className="text-xl font-bold mb-6 text-white border-b border-primary/30 pb-2">
              Tools & Technologies
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {toolsList.map((tool, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-white/10 rounded-lg text-white/90 hover:text-primary hover:border-primary/30 transition-colors duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-white border-b border-primary/30 pb-2">
                Experience & Education
              </h3>
              
              <div className="space-y-6">
                <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary/50">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary -translate-x-1/2 accent-glow"></div>
                  <h4 className="text-lg font-semibold text-white">Senior Frontend Developer</h4>
                  <p className="text-primary text-sm">2022 - Present</p>
                  <p className="text-white/70 mt-2">Leading frontend development for enterprise SaaS applications.</p>
                </div>
                
                <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary/50">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary -translate-x-1/2"></div>
                  <h4 className="text-lg font-semibold text-white">Full Stack Developer</h4>
                  <p className="text-primary text-sm">2019 - 2022</p>
                  <p className="text-white/70 mt-2">Developed full-stack web applications with React, Node.js, and MongoDB.</p>
                </div>
                
                <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary/50">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary -translate-x-1/2"></div>
                  <h4 className="text-lg font-semibold text-white">Computer Science Degree</h4>
                  <p className="text-primary text-sm">2015 - 2019</p>
                  <p className="text-white/70 mt-2">Bachelor's degree in Computer Science with focus on software engineering.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
