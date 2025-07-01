import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './hooks/useTheme';
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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden relative">
        {/* Animated Space Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <svg
            className="w-full h-full absolute"
            style={{ minHeight: '100vh', minWidth: '100vw' }}
          >
            {/* Twinkling stars */}
            {[...Array(120)].map((_, i) => {
              const x = Math.random() * 100;
              const y = Math.random() * 100;
              const r = Math.random() * 1.2 + 0.3;
              const opacity = Math.random() * 0.5 + 0.5;
              const duration = Math.random() * 2 + 1;
              return (
                <circle
                  key={i}
                  cx={`${x}%`}
                  cy={`${y}%`}
                  r={r}
                  fill="white"
                  opacity={opacity}
                >
                  <animate
                    attributeName="opacity"
                    values={`${opacity};0.2;${opacity}`}
                    dur={`${duration}s`}
                    repeatCount="indefinite"
                    begin={`${Math.random()}s`}
                  />
                </circle>
              );
            })}
            {/* Shooting star */}
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                from="-200 -100"
                to="1200 800"
                dur="3s"
                repeatCount="indefinite"
                begin="0s"
              />
              <rect
                x="0"
                y="0"
                width="80"
                height="2"
                fill="white"
                opacity="0.3"
                rx="1"
              >
                <animate
                  attributeName="opacity"
                  values="0.3;1;0"
                  keyTimes="0;0.1;1"
                  dur="3s"
                  repeatCount="indefinite"
                  begin="0s"
                />
              </rect>
            </g>
          </svg>
        </div>

        {/* Grid Pattern Overlay */}
        <div 
          className="fixed inset-0 opacity-5 pointer-events-none z-10"
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

        <main className="relative z-20">
          {/* Add a subtle overlay for depth */}
          <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          <Hero scrollToSection={scrollToSection} />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="bg-black/20 border-t border-white/10 py-8 z-20 relative">
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

export default App;