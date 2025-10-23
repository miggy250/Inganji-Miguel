import { Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Passion for <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Excellence isn't a destination, it's a mindset I bring to every line of code I write.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Software Developer</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I turn complex problems into elegant solutions. With expertise in modern web technologies,
                    I build scalable applications that make a difference. My code is clean, efficient, and built to last.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["React", "TypeScript", "Node.js", "Python", "PostgreSQL"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
