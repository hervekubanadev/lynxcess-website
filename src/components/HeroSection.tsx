import { motion } from "framer-motion";
import { useTypingEffect } from "./useTypingEffect";
import { ArrowDown, ExternalLink } from "lucide-react";

const HeroSection = () => {
  const { displayed, done } = useTypingEffect("From Street Survival… To Digital Success", 45, 300);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating glass elements */}
      <motion.div
        className="absolute top-32 left-[10%] w-20 h-20 glass-panel rounded-2xl opacity-30"
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-48 right-[15%] w-14 h-14 glass-panel rounded-full opacity-20"
        animate={{ y: [10, -15, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-[20%] w-24 h-16 glass-panel rounded-xl opacity-20"
        animate={{ y: [-8, 12, -8], rotate: [0, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-[100px]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 text-xs font-body font-medium tracking-widest uppercase glass-panel-neon text-primary mb-8">
            E-Lab Innovation Team
          </span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight min-h-[1.2em]">
          <span className="gradient-neon-text">{displayed}</span>
          {!done && <span className="animate-pulse text-primary">|</span>}
        </h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          Empowering informal traders in Rwanda through technology
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
        >
          <a
            href="#mission"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg gradient-neon text-primary-foreground font-display font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity neon-glow-cyan"
          >
            Explore Our Story <ArrowDown size={16} />
          </a>
          <a
            href="#prototype"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg glass-panel-neon text-primary font-display font-semibold text-sm tracking-wide hover-lift"
          >
            View Prototype <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-muted-foreground" size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
