import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const About: React.FC = () => {
  const { currentTheme } = useTheme();

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful, user-centric interfaces that enhance user experience.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and seamless interactions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver exceptional digital solutions.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className={`w-24 h-1 ${currentTheme.gradient} mx-auto rounded-full mb-8`} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className={`text-2xl font-bold mb-4 ${currentTheme.primary}`}>
                Passionate Developer & Designer
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                With over 1 years of experience in web development, I specialize in creating 
                modern, responsive applications using the latest technologies. My journey began 
                with a curiosity for how things work on the web, and it has evolved into a 
                passion for crafting exceptional digital experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe in the power of clean code, thoughtful design, and continuous learning. 
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className={`text-3xl font-bold ${currentTheme.primary} mb-2`}>50+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className={`text-3xl font-bold ${currentTheme.primary} mb-2`}>1+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-lg ${currentTheme.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;