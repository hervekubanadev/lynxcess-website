import ScrollReveal from "./ScrollReveal";
import { Play } from "lucide-react";

const challenges = [
  { num: 1, title: "Ideation", desc: "Brainstorming solutions for informal trade challenges in Rwanda.", color: "from-primary to-secondary" },
  { num: 2, title: "Research", desc: "Deep-diving into the lives of Kigali's street vendors and traders.", color: "from-secondary to-primary" },
  { num: 3, title: "Concept Development", desc: "Shaping E-Murika's core features and value proposition.", color: "from-primary to-neon-green" },
  { num: 4, title: "Prototyping", desc: "Building and testing the first interactive prototype.", color: "from-neon-green to-primary" },
  { num: 5, title: "Presentation", desc: "Pitching our solution to judges and stakeholders.", color: "from-secondary to-neon-green" },
];

const ChallengesSection = () => (
  <section id="challenges" className="relative py-32 overflow-hidden">
    <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-primary/5 blur-[120px]" />
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-body font-medium tracking-widest uppercase glass-panel text-secondary mb-4">
            🏆 Our Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Our <span className="gradient-neon-text">E-Lab Challenges</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {challenges.map((c, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="glass-panel-neon hover-lift group cursor-pointer overflow-hidden">
              <div className={`h-40 bg-gradient-to-br ${c.color} opacity-20 flex items-center justify-center relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="text-foreground ml-0.5" size={20} />
                  </div>
                </div>
                <span className="absolute top-4 left-4 text-6xl font-display font-bold text-foreground/10">
                  {c.num}
                </span>
              </div>
              <div className="p-6">
                <span className="text-xs font-display font-semibold text-primary tracking-wider">
                  CHALLENGE {c.num}
                </span>
                <h3 className="font-display font-bold text-lg text-foreground mt-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground font-body mt-2">{c.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ChallengesSection;
