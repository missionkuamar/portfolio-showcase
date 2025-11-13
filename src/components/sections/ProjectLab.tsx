import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Zap, Cpu } from 'lucide-react';
import { Project } from '../../types';

const ProjectLab: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'web' | 'mobile'>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'AI Code Assistant',
      description: 'Intelligent code completion with context-aware suggestions',
      technologies: ['React', 'TypeScript', 'OpenAI', 'LangChain'],
      githubUrl: '#',
      liveUrl: '#',
      image: '/api/placeholder/400/250',
      category: 'ai',
      complexity: 4,
      lighthouseScore: 95
    },
    {
      id: '2',
      title: '3D Portfolio Platform',
      description: 'Immersive web experience with Three.js and animations',
      technologies: ['Three.js', 'React', 'Framer Motion'],
      githubUrl: '#',
      liveUrl: '#',
      image: '/api/placeholder/400/250',
      category: 'web',
      complexity: 3,
      lighthouseScore: 98
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-purple-900/20 to-neo-black">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-display font-bold mb-4">
            Project <span className="text-neo-cyan">Lab</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Cutting-edge projects showcasing technical innovation and AI integration
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            {['all', 'ai', 'web', 'mobile'].map((category) => (
              <motion.button
                key={category}
                className={`px-6 py-3 rounded-full font-display font-semibold transition-all ${
                  filter === category
                    ? 'bg-neo-cyan text-neo-black'
                    : 'border border-neo-cyan/30 text-neo-cyan hover:bg-neo-cyan/10'
                }`}
                onClick={() => setFilter(category as any)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.toUpperCase()}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.category === 'ai' && (
                      <div className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-semibold">
                        <Cpu className="w-3 h-3 inline mr-1" />
                        AI
                      </div>
                    )}
                    <div className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                      <Zap className="w-3 h-3 inline mr-1" />
                      {project.lighthouseScore}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-neo-cyan/20 text-neo-cyan rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        className="flex items-center gap-2 text-neo-cyan hover:text-neo-cyan/80 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectLab;