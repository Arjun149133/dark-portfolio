import { Code, Server, Smartphone, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gotham-darker relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(155,135,245,0.1)_0%,_rgba(20,24,36,0)_70%)]"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-up">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-left delay-100">
            <h3 className="text-2xl font-bold mb-6 text-white">
              I'm a <span className="text-primary">Full Stack Developer</span>{" "}
              passionate about building digital solutions
            </h3>

            <p className="text-white/80 mb-6">
              With over 1.5 years of experience in web development, I specialize
              in creating responsive and performant web applications. I have a
              strong foundation in both frontend and backend technologies,
              allowing me to build complete solutions from concept to
              deployment.
            </p>

            <p className="text-white/80 mb-6">
              I'm constantly exploring new technologies and methodologies to
              stay at the forefront of the industry. My goal is to create
              digital experiences that are not only functional but also
              intuitive and engaging for users.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm">
                Problem Solver
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm">
                Team Player
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm">
                Detail-Oriented
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm">
                Fast Learner
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-right delay-200">
            <Card className="bg-card/50 backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all group">
              <CardContent className="p-6">
                <div className="mb-4 text-primary group-hover:text-accent transition-colors">
                  <Code size={36} />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">Frontend</h4>
                <p className="text-white/70 text-sm">
                  Creating responsive and intuitive user interfaces using modern
                  frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all group">
              <CardContent className="p-6">
                <div className="mb-4 text-primary group-hover:text-accent transition-colors">
                  <Server size={36} />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">Backend</h4>
                <p className="text-white/70 text-sm">
                  Building robust APIs and server architectures to power
                  applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all group">
              <CardContent className="p-6">
                <div className="mb-4 text-primary group-hover:text-accent transition-colors">
                  <Smartphone size={36} />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">Mobile</h4>
                <p className="text-white/70 text-sm">
                  Developing cross-platform mobile applications with React
                  Native.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all group">
              <CardContent className="p-6">
                <div className="mb-4 text-primary group-hover:text-accent transition-colors">
                  <Globe size={36} />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">DevOps</h4>
                <p className="text-white/70 text-sm">
                  Implementing CI/CD pipelines and managing cloud
                  infrastructure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
