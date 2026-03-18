import ScrollReveal from "./ScrollReveal";
import { Target } from "lucide-react";

const MissionSection = () => (
  <section id="mission" className="relative py-32 overflow-hidden">
    <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/5 blur-[100px]" />
    <div className="container mx-auto px-6 max-w-4xl">
      <ScrollReveal>
        <div className="glass-panel-neon p-10 md:p-16 neon-glow-cyan text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full glass-panel mb-8">
            <Target className="text-primary" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold gradient-neon-text mb-6">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
            To help informal traders in Rwanda transition into legal, sustainable digital businesses 
            that protect their income and support their development.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default MissionSection;
