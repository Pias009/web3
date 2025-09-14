import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "NeuralSync Platform",
      description: "Advanced AI-powered synchronization system for enterprise-level data management and processing.",
      technologies: ["AI", "Machine Learning", "Cloud Computing", "APIs"],
      status: "Active",
      category: "Enterprise"
    },
    {
      id: 2,
      title: "CyberShield Defense",
      description: "Next-generation cybersecurity framework with quantum-resistant encryption protocols.",
      technologies: ["Cybersecurity", "Quantum Computing", "Encryption", "Blockchain"],
      status: "In Development", 
      category: "Security"
    },
    {
      id: 3,
      title: "QuantumFlow Analytics", 
      description: "Real-time data analytics platform leveraging quantum computing for unprecedented processing speeds.",
      technologies: ["Quantum Computing", "Analytics", "Big Data", "ML"],
      status: "Research",
      category: "Analytics"
    },
    {
      id: 4,
      title: "MetaVerse Gateway",
      description: "Immersive virtual reality platform connecting digital and physical worlds seamlessly.",
      technologies: ["VR", "AR", "3D Graphics", "WebXR"],
      status: "Active",
      category: "Metaverse"
    },
    {
      id: 5,
      title: "BioTech Integration",
      description: "Bridging biotechnology and digital systems for healthcare innovation.",
      technologies: ["Biotech", "IoT", "Health Tech", "AI"],
      status: "Planning",
      category: "Healthcare"
    },
    {
      id: 6,
      title: "EcoSmart Grid",
      description: "Sustainable energy management system using AI-driven optimization algorithms.",
      technologies: ["IoT", "AI", "Energy", "Sustainability"],
      status: "Active",
      category: "Green Tech"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Development":
        return "bg-primary/20 text-primary border-primary/30";
      case "Research":
        return "bg-secondary/20 text-secondary border-secondary/30";
      case "Planning":
        return "bg-accent/20 text-accent border-accent/30";
      default:
        return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-container pt-24">
        <div className="text-center mb-16">
          <h1 className="section-title neon-text mb-4">Our Projects</h1>
          <p className="section-subtitle mx-auto">
            Discover our cutting-edge projects shaping the future of technology and innovation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="cyber-card hover:neon-glow transition-all duration-300 h-full">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs px-3 py-1 bg-accent/20 text-accent rounded-full border border-accent/30">
                    {project.category}
                  </span>
                  <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <CardTitle className="text-xl text-foreground hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="text-xs bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <button className="mt-4 text-primary hover:text-accent transition-colors font-medium">
                    Learn More →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;