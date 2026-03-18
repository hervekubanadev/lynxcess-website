import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { HelpCircle } from "lucide-react";

const whys = [
  { q: "Why street vending?", a: "Because there are no affordable alternatives for earning income." },
  { q: "Why unemployment?", a: "Because formal jobs require skills and connections most youth lack." },
  { q: "Why no businesses?", a: "Because registration costs and processes are too complex and expensive." },
  { q: "Why solutions failed?", a: "Because they didn't address affordability and digital accessibility." },
  { q: "Why no lasting solution?", a: "Because no platform combines marketplace access with business formalization." },
];

const FiveWhysSection = () => (
  <section className="relative py-32 overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary/5 blur-[150px]" />
    <div className="container mx-auto px-6 max-w-3xl">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-body font-medium tracking-widest uppercase glass-panel text-secondary mb-4">
            <HelpCircle size={14} /> Root Cause Analysis
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            The <span className="gradient-neon-text">5 Whys</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />
        <motion.div
          className="absolute left-6 md:left-1/2 top-0 w-px gradient-neon origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ height: "100%" }}
        />

        {whys.map((w, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <div className={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}>
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full gradient-neon neon-glow-cyan z-10" />

              {/* Card */}
              <div className={`ml-14 md:ml-0 ${i % 2 === 0 ? "md:mr-auto md:pr-12 md:w-1/2 md:text-right" : "md:ml-auto md:pl-12 md:w-1/2"}`}>
                <div className="glass-panel-neon p-6 hover-lift">
                  <span className="text-xs font-display font-semibold text-primary tracking-wider">WHY {i + 1}</span>
                  <h3 className="font-display font-bold text-lg mt-2 text-foreground">{w.q}</h3>
                  <p className="text-sm text-muted-foreground font-body mt-2">{w.a}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FiveWhysSection;
