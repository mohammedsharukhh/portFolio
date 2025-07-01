import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Target } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const { currentTheme } = useTheme();
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-10 w-72 h-72 ${currentTheme.gradient} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse`} />
        <div className={`absolute top-40 right-10 w-72 h-72 ${currentTheme.gradientAlt} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000`} />
        <div className={`absolute -bottom-8 left-20 w-72 h-72 ${currentTheme.gradient} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="relative mx-auto w-48 h-48 mb-8">
            <div className={`absolute inset-0 rounded-full ${currentTheme.gradient} p-1`}>
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <img
                  src="/photo.jpeg"
                  alt="Profile"
                  className="w-44 h-44 rounded-full object-cover"
                />
              </div>
            </div>
            <div className={`absolute inset-0 rounded-full ${currentTheme.glow} opacity-30`} />
          </div>

          {/* Glitch Text Effect */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Hello, I'm{' '}
              </span>
              <span className={`relative inline-block ${currentTheme.primary}`}>
                Mohammed Sharuk M S
                <span className="absolute inset-0 opacity-50 animate-pulse">Mohammed Sharuk M S</span>
              </span>
            </h1>

            <div className="h-16 flex items-center justify-center">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-semibold ${currentTheme.primary}`}>
                {displayText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting seamless web experiences with cutting-edge technologies. 
            Passionate about creating innovative solutions that bridge the gap between 
            design and functionality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${currentTheme.gradient} text-black hover:scale-105 ${currentTheme.glow}`}
            >
              View My Work
            </button>
            <button className="px-8 py-3 rounded-lg font-semibold border border-white/20 text-white hover:bg-white/5 transition-all duration-300 flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: 'https://github.com/mohammedsharukhh', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/mohammedsharuk18', label: 'LinkedIn' },
              { icon: Mail, href: '#', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className={`p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 ${currentTheme.glow} group`}
                aria-label={label}
                target="_blank"
              >
                <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className={`w-6 h-6 ${currentTheme.primary}`} />
        </button>
      </div>
    </section>
  );
};

export default Hero;