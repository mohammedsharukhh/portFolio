import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-3xl animate-pulse delay-2000" />
        </div>

        {/* Grid Pattern Overlay */}
        <div 
          className="fixed inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        <Header
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        <main className="relative">
          <Hero scrollToSection={scrollToSection} />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="bg-black/20 border-t border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center items-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-gray-400 text-sm">Available for freelance work</span>
              </div>
              <p className="text-gray-400 text-sm">
                © 2024 Alex DevPortfolio. Built with React & TypeScript. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

// SpaceStarsBackground component for animated, vibing starfield

const STAR_COUNT = 120;
const STAR_COLORS = ['#fff', '#a5b4fc', '#f472b6', '#facc15', '#38bdf8'];

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

const SpaceStarsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Generate stars
    stars.current = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: randomBetween(0.5, 2.2),
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      speed: randomBetween(0.05, 0.35),
      angle: Math.random() * Math.PI * 2,
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: randomBetween(0.005, 0.02),
    }));

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (const star of stars.current) {
        // Twinkle effect
        const twinkle = 0.5 + 0.5 * Math.sin(star.twinkle);
        ctx.globalAlpha = twinkle;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r * twinkle, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 8 * twinkle;
        ctx.fill();

        // Move star in a vibing, wavy, random direction
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.angle += Math.sin(Date.now() * 0.0002 + star.x) * 0.01; // subtle vibing
        star.twinkle += star.twinkleSpeed;

        // Wrap around edges
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      // Re-randomize positions
      stars.current.forEach(star => {
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
    />
  );
};

export default App;

// --- Place this at the end of App.tsx, and add <SpaceStarsBackground /> as the first child inside your ThemeProvider's div (before other backgrounds) ---

// Example usage in App component (add this line inside your main div, before other backgrounds):
// <SpaceStarsBackground />