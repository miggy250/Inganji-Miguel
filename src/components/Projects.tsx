import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack online shopping platform with payment integration, inventory management, and real-time order tracking.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    gradient: "from-primary/20 to-primary/5"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team chat, and analytics dashboard.",
    tech: ["TypeScript", "Next.js", "Supabase", "Tailwind"],
    gradient: "from-accent/20 to-accent/5"
  },
  {
    title: "Portfolio Generator",
    description: "SaaS application that helps users create stunning portfolios with drag-and-drop functionality and templates.",
    tech: ["React", "Firebase", "Framer Motion"],
    gradient: "from-primary/20 to-accent/5"
  }
];

const Projects = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building solutions that matter, one project at a time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className={`group overflow-hidden bg-gradient-to-br ${project.gradient} border-border hover:border-primary/50 transition-all duration-500`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 rounded-md bg-background/50 text-xs font-medium text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
