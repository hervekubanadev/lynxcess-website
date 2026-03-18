import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import BlurredBackground from "./BlurredBackground";
import { X, Mail, Globe } from "lucide-react";

interface Member {
  name: string;
  role: string;
  email: string;
  nationality: string;
  bio: string;
}

const members: Member[] = [
  {
    name: "Herve Kubana Friend",
    role: "CEO & Designer",
    email: "h.kubana@alustudent.com",
    nationality: "Rwandan",
    bio: "As the CEO and lead designer of E-Murika, I conceptualized the platform to transition informal traders into digital businesses. I led the design process, prototyping, and guided the team through our E-Lab journey to create a sustainable solution for Kigali's street vendors.",
  },
  {
    name: "Hubert Migabo",
    role: "Prototyping Lead & UX Engineer",
    email: "h.migabo@alustudent.com",
    nationality: "Rwandan",
    bio: "I led the prototyping process, translating our vision into interactive designs. My focus was on creating an intuitive user experience that informal traders could navigate with ease.",
  },
  {
    name: "Harriet Kubwimana",
    role: "Fund Protection & Financial Manager",
    email: "h.kubwimana@alustudent.com",
    nationality: "Rwandan",
    bio: "I managed the financial strategy and fund protection mechanisms, ensuring our platform provides secure and transparent transactions for all users.",
  },
  {
    name: "Isimbi Nina Henriette",
    role: "Prototyping Assistant & Quality Tester",
    email: "i.henriette@alustudent.com",
    nationality: "Rwandan",
    bio: "I supported the prototyping team and led quality testing, ensuring every feature met our standards for usability and reliability.",
  },
  {
    name: "Gaju Isimbi Gloria",
    role: "Advisor & Presentation Designer",
    email: "g.gloria@alustudent.com",
    nationality: "Rwandan",
    bio: "As advisor and presentation designer, I shaped our storytelling and pitch materials, helping communicate our vision to stakeholders and judges.",
  },
];

const initials = (name: string) =>
  name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

const TeamSection = () => {
  const [selected, setSelected] = useState<Member | null>(null);

  return (
    <section id="team" className="relative py-32 overflow-hidden">
      <BlurredBackground image="team" opacity="opacity-15" />
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-body font-medium tracking-widest uppercase glass-panel text-primary mb-4">
              👥 The People
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
              Meet the <span className="gradient-neon-text">LYNXCESS Team</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {members.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <button
                onClick={() => setSelected(m)}
                className="w-full text-left glass-panel-neon p-8 hover-lift cursor-pointer group"
              >
                <div className="w-16 h-16 rounded-2xl gradient-neon flex items-center justify-center text-primary-foreground font-display font-bold text-lg mb-4 group-hover:neon-glow-cyan transition-shadow">
                  {initials(m.name)}
                </div>
                <h3 className="font-display font-bold text-foreground">{m.name}</h3>
                <p className="text-sm text-primary font-body mt-1 font-medium">{m.role}</p>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={() => setSelected(null)} />
            <motion.div
              className="relative glass-panel-neon neon-glow-cyan p-8 md:p-10 max-w-lg w-full rounded-3xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-20 h-20 rounded-2xl gradient-neon flex items-center justify-center text-primary-foreground font-display font-bold text-2xl mb-6">
                {initials(selected.name)}
              </div>

              <h3 className="text-2xl font-display font-extrabold text-foreground tracking-tight">{selected.name}</h3>
              <p className="text-primary font-display font-semibold mt-1">{selected.role}</p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-4 text-sm text-muted-foreground font-body">
                <span className="flex items-center gap-1.5"><Mail size={14} /> {selected.email}</span>
                <span className="flex items-center gap-1.5"><Globe size={14} /> {selected.nationality}</span>
              </div>

              <p className="mt-6 text-muted-foreground font-body leading-relaxed text-sm font-light">
                {selected.bio}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;
