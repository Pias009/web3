import React from "react";
import { Button } from "@/components/ui/button";
import neonAvatar from "@/assets/neon-avatar.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        <div className="w-32 h-32 mx-auto mb-6 relative">
         
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text">NEONENCY</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          Next-generation SaaS platform powered by NEONENCY technology and inspired innovation.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 px-4 py-2 cyber-border rounded-full">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-accent font-medium">AI-Powered</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 cyber-border rounded-full">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            <span className="text-secondary font-medium">Future-Ready</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 cyber-border rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-medium">Innovation-First</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="button-primary text-lg px-8 py-3">Get Started Today</Button>
          <Button className="button-secondary text-lg px-8 py-3">Explore Products</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;