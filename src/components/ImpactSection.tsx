import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";
import { motion } from "framer-motion";

const milestones = [
  { year: "2025", goal: "Launch E-Murika beta with 100 vendors", value: 100 },
  { year: "2026", goal: "Scale to 1,000 digital businesses", value: 1000 },
  { year: "2027", goal: "Expand to 5 districts in Kigali", value: 5 },
  { year: "2028", goal: "Partner with government programs", value: 10 },
  { year: "2030", goal: "10,000 empowered entrepreneurs", value: 10000 },
];

const ImpactSection = () => (
  <section className="relative py-32 overflow-hidden">
    <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-accent/3 blur-[120px]" />
    <div className="container mx-auto px-6 max-w-4xl">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-body font-medium tracking-widest uppercase glass-panel neon-text-green mb-4">
            📊 Vision 2030
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Impact <span className="gradient-neon-text">Roadmap</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="relative">
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />
        <motion.div
          className="absolute left-6 md:left-8 top-0 w-px bg-accent origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          style={{ height: "100%" }}
        />

        {milestones.map((m, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <div className="relative flex items-start gap-8 mb-10 ml-6 md:ml-8">
              <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-accent neon-glow-green z-10" />
              <div className="ml-8 glass-panel-neon p-6 hover-lift flex-1">
                <span className="text-xs font-display font-bold neon-text-green tracking-wider">{m.year}</span>
                <p className="text-foreground font-body mt-2">{m.goal}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
