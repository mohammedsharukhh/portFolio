import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Skills: React.FC = () => {
  const { currentTheme } = useTheme();

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Javascript', level: 95 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Angular', level: 80 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'Java', level: 82 },
        { name: 'MongoDB', level: 78 },
        { name: 'SQL', level: 75 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Figma', level: 85 },
        { name: 'Jest', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className={`w-24 h-1 ${currentTheme.gradient} mx-auto rounded-full mb-8`} />
          <p className="text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className={`text-xl font-bold mb-6 ${currentTheme.primary}`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${currentTheme.gradient} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'React', 'TypeScript', 'Node.js', 'JavaScript', 'M', 
              'MongoDB', 'Docker', 'AWS', 'Git', 'Figma'
            ].map((tech, index) => (
              <div
                key={tech}
                className={`bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10 hover:bg-white/10 transition-all duration-300 ${currentTheme.glow}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-gray-300 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;