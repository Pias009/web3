import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center neon-glow">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <span className="neon-text text-xl font-bold tracking-wider">NEONENCY</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/news" className="nav-link">News</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/about" className="nav-link">About</Link>
            <a href="#features" className="nav-link">Features</a>
            <Button className="button-primary">Get Started</Button>
          </div>

          <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/20 p-4 space-y-4">
          <Link to="/" className="block py-2 text-foreground hover:text-primary">Home</Link>
          <Link to="/news" className="block py-2 text-foreground hover:text-primary">News</Link>
          <Link to="/projects" className="block py-2 text-foreground hover:text-primary">Projects</Link>
          <Link to="/about" className="block py-2 text-foreground hover:text-primary">About</Link>
          <Button className="button-primary w-full">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;