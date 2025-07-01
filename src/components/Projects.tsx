import React from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe, Database } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Projects: React.FC = () => {
  const { currentTheme } = useTheme();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'Full Stack',
      icon: Globe,
      github: '#',
      live: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced analytics.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Firebase', 'TypeScript', 'Tailwind'],
      category: 'Frontend',
      icon: Smartphone,
      github: '#',
      live: '#',
    },
    {
      title: 'AI Chat Interface',
      description: 'An intelligent chat interface powered by AI with natural language processing, context awareness, and multi-language support.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'FastAPI', 'OpenAI', 'React'],
      category: 'AI/ML',
      icon: Code,
      github: '#',
      live: '#',
    },
    {
      title: 'Crypto Trading Dashboard',
      description: 'Real-time cryptocurrency trading dashboard with live charts, portfolio tracking, and automated trading strategies.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'Chart.js', 'WebSocket', 'Python'],
      category: 'Web App',
      icon: Database,
      github: '#',
      live: '#',
    },
    {
      title: 'Social Media Analytics',
      description: 'Comprehensive social media analytics platform with sentiment analysis, engagement tracking, and automated reporting.',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      category: 'Analytics',
      icon: Globe,
      github: '#',
      live: '#',
    },
    {
      title: 'IoT Monitoring System',
      description: 'IoT device monitoring system with real-time data visualization, alerts, and predictive maintenance capabilities.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'MQTT', 'InfluxDB', 'Grafana'],
      category: 'IoT',
      icon: Database,
      github: '#',
      live: '#',
    },
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'AI/ML', 'Web App', 'Analytics', 'IoT'];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className={`w-24 h-1 ${currentTheme.gradient} mx-auto rounded-full mb-8`} />
          <p className="text-gray-300 max-w-2xl mx-auto">
            A showcase of my latest work, featuring cutting-edge technologies and innovative solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full border border-white/20 text-sm font-medium transition-all duration-300 hover:bg-white/5 ${currentTheme.glow} backdrop-blur-sm`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className={`p-2 rounded-lg ${currentTheme.gradient}`}>
                    <project.icon className="w-4 h-4 text-black" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${currentTheme.gradient} text-black`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/5 rounded border border-white/10 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 ${currentTheme.glow} group`}
                  >
                    <Github className="w-4 h-4 text-gray-300 group-hover:text-white" />
                    <span className="text-sm text-gray-300 group-hover:text-white">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${currentTheme.gradient} text-black hover:scale-105 transition-all duration-300 ${currentTheme.glow} group`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Live</span>
                  </a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 ${currentTheme.gradient} transition-opacity duration-500 pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className={`px-8 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-all duration-300 ${currentTheme.glow}`}>
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;