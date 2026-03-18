import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import lynxcessLogo from "@/assets/lynxcess-logo.png";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 600);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated background rings */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-primary/10"
              initial={{ width: 0, height: 0, opacity: 0.5 }}
              animate={{
                width: [0, 600 * i],
                height: [0, 600 * i],
                opacity: [0.3, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.4,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Logo */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.img
              src={lynxcessLogo}
              alt="LYNXCESS Logo"
              className="w-48 h-48 md:w-64 md:h-64 object-contain animate-glow-pulse"
              style={{ filter: "drop-shadow(0 0 30px hsl(191 100% 50% / 0.4))" }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="mt-8 text-center z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold tracking-wider neon-text-cyan">
              LYNXCESS
            </h1>
            <motion.p
              className="mt-2 text-muted-foreground font-body text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              Innovating Rwanda's Future
            </motion.p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-16 w-48 h-0.5 rounded-full overflow-hidden bg-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full gradient-neon rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
