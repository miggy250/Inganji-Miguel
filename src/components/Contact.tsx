import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you need a developer, a teammate, or just want to chat about tech—I'm all ears.
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-card/50 border-primary/20 shadow-[0_0_50px_hsl(var(--primary)/0.1)]">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
                  <p className="text-muted-foreground">
                    Open to freelance opportunities, collaborations, and interesting projects.
                    Let's build something amazing together!
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:miguelinganji@gmail.com"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium">miguelinganji@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="tel:0795166720"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="font-medium">0795166720</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Connect Online</h3>
                  <p className="text-muted-foreground mb-6">
                    Find me on social platforms and let's stay connected
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    className="w-full justify-start bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50"
                    variant="outline"
                    asChild
                  >
                    <a href="https://github.com/miggy250" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-3" />
                      GitHub Profile
                    </a>
                  </Button>

                  <Button
                    className="w-full justify-start bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50"
                    variant="outline"
                  >
                    <Linkedin className="w-5 h-5 mr-3" />
                    LinkedIn Profile
                  </Button>
                </div>

                <div className="pt-6">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all"
                    size="lg"
                    asChild
                  >
                    <a href="/resume.pdf" download="Inganji_Miguel_Resume.pdf">
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center text-muted-foreground">
            <p>© 2025 Inganji Miguel. Built with passion & precision.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
