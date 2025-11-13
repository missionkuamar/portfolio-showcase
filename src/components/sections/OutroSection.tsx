import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2, Sparkles } from 'lucide-react';

const OutroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neo-black via-purple-900/20 to-neo-black">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neo-cyan/30 mb-8"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4 text-neo-cyan" />
            <span className="text-sm text-neo-cyan font-display">MISSION COMPLETE</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neo-cyan to-purple-500">
              System Mission v3.0
            </span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Code2 className="w-6 h-6 inline mr-2 text-neo-cyan" />
            Empowered by AI, crafted by Mission Kumar
            <Heart className="w-6 h-6 inline ml-2 text-red-400" />
          </motion.p>

          <motion.div
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p>© 2024 Mission Kumar. All systems operational.</p>
            <p className="mt-2">Building the future, one line of code at a time.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OutroSection;