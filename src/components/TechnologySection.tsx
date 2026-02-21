import { motion } from "framer-motion";

const techStack = [
  { name: "Neural Engine v4", category: "Core AI", status: "Active", performance: "99.8%" },
  { name: "QuantumDB", category: "Storage", status: "Active", performance: "99.99%" },
  { name: "EdgeSync Protocol", category: "Networking", status: "Active", performance: "99.5%" },
  { name: "CryptoShield 256", category: "Security", status: "Active", performance: "100%" },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-neon-green mb-3">
            Under the Hood
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Technology</span> Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Purpose-built infrastructure engineered for scale, speed, and security.
          </p>
        </motion.div>

        <div className="space-y-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-hover rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {tech.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{tech.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <span className="text-neon-green font-medium">{tech.status}</span>
                <span className="text-muted-foreground">Uptime: <span className="text-foreground font-semibold">{tech.performance}</span></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
