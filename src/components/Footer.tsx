const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#" className="font-display text-lg font-bold text-gradient">
            SASS<span className="text-foreground">AI</span>
          </a>
          <p className="text-muted-foreground text-sm mt-1">
            Where Data Meets Intelligence
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Docs</a>
          <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
        </div>

        <p className="text-muted-foreground text-xs">
          © 2026 SassAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
