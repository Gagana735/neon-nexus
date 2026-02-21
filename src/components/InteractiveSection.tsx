import { motion } from "framer-motion";
import { useState } from "react";

const InteractiveSection = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section id="solutions" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-3">
            Experience It
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Intelligence at Your <span className="text-gradient">Fingertips</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            One click to unlock the power of AI-driven data analytics. See the transformation happen in real time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-12 relative overflow-hidden"
        >
          {/* Animated background glow */}
          <div
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              background: isActive
                ? "radial-gradient(circle at center, hsla(185,100%,50%,0.08) 0%, transparent 70%)"
                : "transparent",
              opacity: isActive ? 1 : 0,
            }}
          />

          <div className="relative z-10">
            <div className="mb-8">
              <motion.div
                animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
                className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 transition-all duration-700"
                style={{
                  background: isActive
                    ? "linear-gradient(135deg, hsl(185,100%,50%), hsl(320,100%,60%))"
                    : "hsla(185,100%,50%,0.1)",
                  boxShadow: isActive
                    ? "0 0 60px -10px hsla(185,100%,50%,0.5)"
                    : "none",
                }}
              >
                <span className="text-3xl">{isActive ? "⚡" : "🧠"}</span>
              </motion.div>

              <p className="text-foreground font-display text-xl font-semibold mb-2">
                {isActive ? "AI Engine Active" : "AI Engine Standby"}
              </p>
              <p className="text-muted-foreground text-sm">
                {isActive
                  ? "Processing 2.4M data points per second..."
                  : "Ready to process your data pipeline"}
              </p>
            </div>

            <button
              onClick={() => setIsActive(!isActive)}
              className="relative px-8 py-3.5 rounded-xl font-display font-semibold text-sm tracking-wide transition-all duration-500 overflow-hidden group"
              style={{
                background: isActive
                  ? "linear-gradient(135deg, hsl(320,100%,60%), hsl(260,100%,65%))"
                  : "linear-gradient(135deg, hsl(185,100%,50%), hsl(260,100%,65%))",
                color: isActive ? "white" : "hsl(230,25%,5%)",
                boxShadow: isActive
                  ? "0 0 35px -5px hsla(320,100%,60%,0.5)"
                  : "0 0 35px -5px hsla(185,100%,50%,0.4)",
              }}
            >
              <span className="relative z-10">
                {isActive ? "Deactivate Engine" : "Activate AI Engine"}
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveSection;
