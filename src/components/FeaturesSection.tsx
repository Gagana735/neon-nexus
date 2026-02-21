import { motion } from "framer-motion";
import { Brain, Cpu, Database, Shield, Zap, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Neural Processing",
    description: "Advanced AI algorithms that learn and adapt to your data patterns in real-time.",
  },
  {
    icon: Database,
    title: "Smart Storage",
    description: "Intelligent data architecture that scales infinitely with zero performance loss.",
  },
  {
    icon: Zap,
    title: "Lightning Speed",
    description: "Sub-millisecond query responses powered by our proprietary indexing engine.",
  },
  {
    icon: Shield,
    title: "Quantum Security",
    description: "Military-grade encryption with quantum-resistant cryptographic protocols.",
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description: "Process data at the edge for minimal latency and maximum throughput.",
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description: "Transform raw data into actionable insights with AI-powered visualizations.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Capabilities
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built for the <span className="text-gradient">Future</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every component engineered for maximum performance, security, and intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass glass-hover rounded-xl p-8 transition-all duration-300 cursor-default group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
