import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-container pt-24">
        <div className="text-center mb-16">
          <h1 className="section-title neon-text mb-4">About Us</h1>
          <p className="section-subtitle mx-auto">
            We are a team of innovators and creators, passionate about building the future of the web.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 neon-text">BinGi Development</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
            One of our flagship initiatives is the development of BinGi, a cutting-edge platform that aims to reshape the landscape of digital finance. BinGi offers seamless currency exchanges, secure transactions, and a user-friendly interface powered by the latest web and blockchain technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card p-6 text-center hover:neon-glow transition-all duration-300">
              <span className="text-5xl mb-4 block">🏆</span>
              <h3 className="text-xl font-semibold mb-2">Big Project</h3>
              <p className="text-muted-foreground">
                As we continue building and scaling BinGi, NEONECY is proud to be at the forefront of innovation.
              </p>
            </div>
            <div className="cyber-card p-6 text-center hover:neon-glow transition-all duration-300">
              <span className="text-5xl mb-4 block">👆</span>
              <h3 className="text-xl font-semibold mb-2">Best Project in Last Year</h3>
              <p className="text-muted-foreground">
                As we continue building and scaling BinGi, NEONECY is proud to be at the forefront of innovation.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 cyber-card p-8 hover:neon-glow transition-all duration-300">
          <h2 className="text-3xl font-bold text-center mb-8 neon-text">Neonecy Introduction</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
            At NEONECY, we are a multidisciplinary digital agency that combines creativity, technology, and strategy to build meaningful digital experiences. Based in Bangladesh and serving clients globally, we specialize in delivering high-impact web development, digital marketing, UI/UX design, SEO, and branding solutions. Our team is passionate about helping businesses grow in the digital era with innovative, scalable, and results-driven strategies.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 neon-text">Our Mission</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
            Our mission is to empower brands through powerful digital transformation. We aim to simplify technology for our clients and create impactful digital solutions that drive engagement, growth, and long-term success. Whether it's crafting custom websites, running data-driven ad campaigns, or enhancing online presence, we are committed to turning ideas into measurable results.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 neon-text">What Makes NEONECY Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="cyber-card p-6 hover:neon-glow transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Client-Centric Approach</h3>
              <p className="text-muted-foreground">
                We start every project by understanding your unique business needs. No one-size-fits-all solutions.
              </p>
            </div>
            <div className="cyber-card p-6 hover:neon-glow transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Full Digital Services</h3>
              <p className="text-muted-foreground">
                From web development and UI/UX design to SEO, branding, and marketing — everything under one roof.
              </p>
            </div>
            <div className="cyber-card p-6 hover:neon-glow transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Agile & Transparent Process</h3>
              <p className="text-muted-foreground">
                Our agile workflow keeps you in the loop at every step with clear progress tracking and quick iterations.
              </p>
            </div>
            <div className="cyber-card p-6 hover:neon-glow transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Innovation with Purpose</h3>
              <p className="text-muted-foreground">
                We embrace new technologies and creative thinking, but always in service of meaningful results.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
