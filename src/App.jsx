import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Terminal, ChevronDown } from 'lucide-react';
import './App.css';

const features = [
  {
    icon: <Zap size={40} />,
    title: 'Blazing Fast',
    desc: 'Optimized for speed with modern web technologies.',
  },
  {
    icon: <Terminal size={40} />,
    title: 'Modern Stack',
    desc: 'Built with React, Vite, and cutting-edge libraries.',
  },
  {
    icon: <Shield size={40} />,
    title: 'Secure',
    desc: 'Best practices in security and data protection.',
  },
  {
    icon: <Globe size={40} />,
    title: 'Global Reach',
    desc: 'Deployed on edge networks for low latency.',
  },
];

function App() {
  return (
    <div className="app-container">
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="logo">LUSK.CO</div>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header id="hero" className="hero-section">
        <div className="hero-bg-grid"></div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title">
            <span className="glitch" data-text="CODY LUSK">CODY LUSK</span>
          </h1>
          <p className="hero-subtitle">Personal Webserver // Full Stack Developer</p>
          <motion.div
            className="hero-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#features" className="primary-btn">Explore System</a>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </header>

      <main>
        <section id="features" className="features-section">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            System Modules
          </motion.h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <p>&copy; {new Date().getFullYear()} Cody Lusk. All Systems Operational.</p>
        <div className="social-links">
          <a href="/" aria-label="GitHub">GitHub</a>
          <a href="/" aria-label="Twitter">Twitter</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
