import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-animated-gradient">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid" />

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, hsla(185,100%,50%,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-6">
            Next-Gen Data Platform
          </p>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8">
            Where Data Meets
            <br />
            <span className="text-gradient">Intelligence</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Powered by Sass — a futuristic AI platform that transforms raw data
            into actionable intelligence at the speed of thought.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#features"
            className="px-8 py-4 rounded-xl font-display font-semibold text-sm tracking-wide text-primary-foreground transition-all duration-300 animate-pulse-glow"
            style={{
              background:
                "linear-gradient(135deg, hsl(185,100%,50%), hsl(260,100%,65%))",
            }}
          >
            Explore Platform
          </a>
          <a
            href="#solutions"
            className="px-8 py-4 rounded-xl font-display font-semibold text-sm tracking-wide text-foreground border border-border hover:border-primary/50 transition-all duration-300"
          >
            Watch Demo →
          </a>
        </motion.div>

        {/* Floating decorative orbs */}
        <motion.div
          className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "hsl(185,100%,50%)" }}
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ background: "hsl(320,100%,60%)" }}
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
