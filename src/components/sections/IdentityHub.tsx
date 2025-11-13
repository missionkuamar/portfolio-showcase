import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, Code2 } from 'lucide-react';

const IdentityHub: React.FC = () => {
  const timeline = [
    { year: '2024', event: 'Lead AI Engineer at TechCorp', icon: <Code2 /> },
    { year: '2023', event: 'Senior Fullstack Developer', icon: <Award /> },
    { year: '2022', event: 'Frontend Architect', icon: <MapPin /> },
    { year: '2021', event: 'Tech Lead - Startup', icon: <Calendar /> },
  ];

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-display font-bold mb-4">
            Identity <span className="text-neo-cyan">Hub</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The journey of a human + AI hybrid developer building the future of interactive experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-display font-semibold mb-8">Career Timeline</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-3 rounded-full bg-neo-cyan/20 text-neo-cyan">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-display text-neo-cyan font-semibold">{item.year}</div>
                    <div className="text-gray-300">{item.event}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-neo-cyan/10 to-purple-500/10 p-8 rounded-2xl border border-neo-cyan/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-6">Currently Working On</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="font-semibold text-neo-cyan">AI-Powered Design System</div>
                <div className="text-sm text-gray-400 mt-2">Building intelligent components that adapt to user behavior</div>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="font-semibold text-purple-400">Real-time Collaboration Platform</div>
                <div className="text-sm text-gray-400 mt-2">Next-gen tools for remote team development</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IdentityHub;