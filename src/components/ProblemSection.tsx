import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";
import { AlertTriangle, TrendingDown, Users } from "lucide-react";

const stats = [
  { icon: TrendingDown, value: 17.5, suffix: "%", label: "Youth Unemployment" },
  { icon: Users, value: 90, suffix: "%", label: "Informal Sector Workers" },
];

const ProblemSection = () => (
  <section id="problem" className="relative py-32 overflow-hidden">
    <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-secondary/5 blur-[120px]" />
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-body font-medium tracking-widest uppercase glass-panel text-destructive mb-4">
            <AlertTriangle size={14} /> The Problem
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            A Crisis <span className="gradient-neon-text">Hiding in Plain Sight</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal delay={0.2}>
          <div className="space-y-6">
            <p className="text-muted-foreground font-body leading-relaxed text-lg">
              In Kigali, thousands of informal traders line the streets daily — selling goods to survive. 
              They face constant government crackdowns, confiscation of goods, and have no path to formalize their businesses.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Previous solutions have failed because they don't address the root cause: 
              the lack of affordable, accessible digital tools for business formalization.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((s, i) => (
                <div key={i} className="glass-panel-neon p-6 text-center hover-lift">
                  <s.icon className="text-primary mx-auto mb-3" size={24} />
                  <div className="text-3xl md:text-4xl font-display font-bold neon-text-cyan">
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 font-body">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="glass-panel-neon p-8 space-y-4">
            <h3 className="font-display font-semibold text-lg text-foreground">Why Street Vending Persists</h3>
            {[
              "Limited formal employment opportunities for youth",
              "High cost of business registration and compliance",
              "Lack of digital literacy and accessible tools",
              "Government crackdowns without viable alternatives",
              "No sustainable transition pathway exists",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground font-body">{item}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default ProblemSection;
