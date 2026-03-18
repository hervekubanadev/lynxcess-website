import ScrollReveal from "./ScrollReveal";
import BlurredBackground from "./BlurredBackground";
import { ShoppingBag, DollarSign, TrendingUp, Shield } from "lucide-react";

const features = [
  { icon: ShoppingBag, title: "Digital Marketplace", desc: "An accessible online platform where informal traders can list and sell their products." },
  { icon: DollarSign, title: "Low-Cost Business Entry", desc: "Affordable registration and compliance tools to formalize businesses." },
  { icon: TrendingUp, title: "Stable Income", desc: "Consistent revenue streams through digital presence and wider customer reach." },
  { icon: Shield, title: "Income Protection", desc: "Secure digital transactions and business insurance integration." },
];

const SolutionSection = () => (
  <section id="solution" className="relative py-32 overflow-hidden">
    <BlurredBackground image="tech" opacity="opacity-15" />
    <div className="container mx-auto px-6 relative z-10">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-body font-medium tracking-widest uppercase glass-panel neon-text-green mb-4">
            💡 The Solution
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
            Introducing <span className="gradient-neon-text">E-Murika</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body font-light max-w-xl mx-auto">
            Our platform helps informal traders transition into sustainable digital businesses.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="glass-panel-neon p-8 text-center hover-lift h-full">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl glass-panel mb-6">
                <f.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground font-body font-light">{f.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
