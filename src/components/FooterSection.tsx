import ScrollReveal from "./ScrollReveal";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

const FooterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <footer id="contact" className="relative py-24 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold gradient-neon-text mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground font-body">
              Interested in E-Murika or want to collaborate? Reach out to us.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="glass-panel-neon p-8 max-w-md mx-auto neon-glow-cyan">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="text-primary" size={20} />
              <span className="text-sm text-muted-foreground font-body">h.kubana@alustudent.com</span>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-lg bg-muted/50 border border-border text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button className="px-5 py-2.5 rounded-lg gradient-neon text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                <Send size={14} /> Send
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-16 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground font-body">
            © 2026 LYNXCESS. Built with passion at ALU E-Lab.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
