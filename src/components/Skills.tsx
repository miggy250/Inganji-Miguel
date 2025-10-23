import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, Wrench } from "lucide-react";

const skillsData = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5/CSS3"]
  },
  {
    icon: Database,
    title: "Backend Development",
    skills: ["Node.js", "Python", "PostgreSQL", "REST APIs", "GraphQL"]
  },
  {
    icon: Globe,
    title: "Full Stack",
    skills: ["Git/GitHub", "CI/CD", "Docker", "AWS", "Vercel"]
  },
  {
    icon: Wrench,
    title: "Tools & Methods",
    skills: ["Agile", "Testing", "UI/UX Design", "Problem Solving", "Team Collaboration"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Technical <span className="text-primary">Arsenal</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.map((category, index) => (
              <Card 
                key={category.title}
                className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li 
                        key={skill}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
