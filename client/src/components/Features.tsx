import React from "react";
import { Zap, Shield, Brain, Globe, BarChart3, Cpu } from "lucide-react";

const Features = () => {
  const features = [
    { icon: Zap, title: "Lightning Fast", description: "Experience blazing-fast performance with our optimized infrastructure." },
    { icon: Shield, title: "Ultra Secure", description: "Enterprise-grade security with end-to-end encryption." },
    { icon: Brain, title: "AI-Powered", description: "Leverage artificial intelligence to automate workflows." },
    { icon: Globe, title: "Global Reach", description: "Worldwide CDN network ensures optimal performance." },
    { icon: BarChart3, title: "Smart Analytics", description: "Advanced analytics provide actionable business intelligence." },
    { icon: Cpu, title: "Scalable", description: "Seamlessly scale from startup to enterprise." }
  ];

  return (
    <section id="features" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title neon-text mb-4">Features</h2>
        <p className="section-subtitle mx-auto">Discover the power of next-generation technology</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="feature-card">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center neon-glow mb-4">
                <Icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;