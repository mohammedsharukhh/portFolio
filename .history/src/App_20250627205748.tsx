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

          {/* Extra Space Animation: Floating Planets & Space Shuttle */}
          <div className="absolute inset-0 pointer-events-none z-20">
            <svg className="w-full h-full absolute" style={{ minHeight: '100vh', minWidth: '100vw' }}>
              {/* Planet 1 */}
              <g>
          <circle
            cx="15%"
            cy="80%"
            r="32"
            fill="url(#planet1-gradient)"
            opacity="0.7"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -20; 0 0"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
          <defs>
            <radialGradient id="planet1-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f9d423" />
              <stop offset="100%" stopColor="#ff4e50" />
            </radialGradient>
          </defs>
              </g>
              {/* Planet 2 */}
              <g>
          <circle
            cx="85%"
            cy="20%"
            r="18"
            fill="url(#planet2-gradient)"
            opacity="0.6"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 15; 0 0"
              dur="6s"
              repeatCount="indefinite"
              begin="2s"
            />
          </circle>
          <defs>
            <radialGradient id="planet2-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#43cea2" />
              <stop offset="100%" stopColor="#185a9d" />
            </radialGradient>
          </defs>
              </g>
              {/* Planet 3 */}
              <g>
          <circle
            cx="60%"
            cy="70%"
            r="12"
            fill="url(#planet3-gradient)"
            opacity="0.5"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -10; 0 0"
              dur="7s"
              repeatCount="indefinite"
              begin="1s"
            />
          </circle>
          <defs>
            <radialGradient id="planet3-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a18cd1" />
              <stop offset="100%" stopColor="#fbc2eb" />
            </radialGradient>
          </defs>
              </g>
              {/* Space Shuttle */}
              <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            from="-100 600"
            to="1200 -100"
            dur="7s"
            repeatCount="indefinite"
            begin="0s"
          />
          {/* Shuttle body */}
          <rect
            x="0"
            y="0"
            width="38"
            height="12"
            rx="6"
            fill="#e0e0e0"
            stroke="#bdbdbd"
            strokeWidth="1"
          />
          {/* Shuttle nose */}
          <ellipse
            cx="38"
            cy="6"
            rx="6"
            ry="6"
            fill="#bdbdbd"
          />
          {/* Shuttle window */}
          <circle
            cx="30"
            cy="6"
            r="2"
            fill="#2196f3"
          />
          {/* Shuttle wings */}
          <polygon
            points="8,12 0,20 12,12"
            fill="#757575"
            opacity="0.7"
          />
          <polygon
            points="8,0 0,-8 12,0"
            fill="#757575"
            opacity="0.7"
          />
          {/* Shuttle flame */}
          <polygon
            points="0,4 -10,6 0,8"
            fill="orange"
            opacity="0.8"
          >
            <animate
              attributeName="points"
              values="0,4 -10,6 0,8; 0,4 -13,6 0,8; 0,4 -10,6 0,8"
              dur="0.5s"
              repeatCount="indefinite"
            />
          </polygon>
              </g>
              {/* Satellite */}
              <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            from="1200 100"
            to="-200 300"
            dur="12s"
            repeatCount="indefinite"
            begin="2s"
          />
          {/* Satellite body */}
          <rect
            x="0"
            y="0"
            width="16"
            height="8"
            rx="2"
            fill="#90caf9"
            stroke="#1976d2"
            strokeWidth="1"
          />
          {/* Solar panels */}
          <rect
            x="-10"
            y="1"
            width="8"
            height="6"
            fill="#1976d2"
            opacity="0.7"
          />
          <rect
            x="18"
            y="1"
            width="8"
            height="6"
            fill="#1976d2"
            opacity="0.7"
          />
          {/* Antenna */}
          <rect
            x="7"
            y="-6"
            width="2"
            height="6"
            fill="#1976d2"
          />
          <circle
            cx="8"
            cy="-7"
            r="1.5"
            fill="#fff"
            stroke="#1976d2"
            strokeWidth="0.5"
          />
              </g>
            </svg>
          </div>

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