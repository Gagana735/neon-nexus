import { motion } from "framer-motion";
import { useState } from "react";

const navLinks = ["Features", "Technology", "Solutions", "Contact"];

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-bold text-gradient">
          SASS<span className="text-foreground">AI</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {link}
              <span
                className="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300"
                style={{ width: hoveredIndex === i ? "100%" : "0%" }}
              />
            </a>
          ))}
        </div>

        <button className="hidden md:block px-5 py-2 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:shadow-[0_0_25px_-3px_hsl(185,100%,50%)] transition-all duration-300">
          Get Started
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
