import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import lynxcessLogo from "@/assets/lynxcess-logo.png";

const PrototypeSection = () => (
  <section id="prototype" className="relative py-32 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
    <div className="container mx-auto px-6 text-center">
      <ScrollReveal>
        <div className="relative inline-block mb-12">
          <motion.div
            className="relative"
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <img
              src={lynxcessLogo}
              alt="LYNXCESS Logo"
              className="w-40 h-40 md:w-56 md:h-56 object-contain mx-auto"
              style={{ filter: "drop-shadow(0 0 40px hsl(191 100% 50% / 0.3))" }}
            />
          </motion.div>
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full border border-primary/20 animate-glow-pulse scale-125" />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <h2 className="text-3xl md:text-5xl font-display font-bold gradient-neon-text mb-4">
          E-Murika Prototype
        </h2>
        <p className="text-muted-foreground font-body text-lg mb-2">Reimagining informal trade</p>
        <p className="neon-text-green font-display font-semibold tracking-wider text-sm">
          Digital. Accessible. Sustainable.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <div className="grid sm:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {["Vendor Dashboard", "Product Listings", "Analytics & Growth"].map((title, i) => (
            <div key={i} className="glass-panel-neon p-8 hover-lift">
              <div className="w-full h-32 rounded-lg bg-muted/50 mb-4 flex items-center justify-center">
                <span className="text-xs text-muted-foreground font-body">Preview Coming Soon</span>
              </div>
              <h3 className="font-display font-semibold text-sm text-foreground">{title}</h3>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default PrototypeSection;
