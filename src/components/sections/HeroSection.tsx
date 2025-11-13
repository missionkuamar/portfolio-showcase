import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Terminal } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neo-black via-purple-900/20 to-neo-black">
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neo-cyan/30 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Terminal className="w-4 h-4 text-neo-cyan" />
            <span className="text-sm text-neo-cyan font-display">SYSTEM MISSION v3.0</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neo-cyan to-purple-500">
              Mission
            </span>
            <br />
            <span className="text-white">Kumar</span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Building <span className="text-neo-cyan font-semibold">intelligent interfaces</span> that{" "}
            <span className="text-purple-400 font-semibold">think, move, and inspire</span>
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="px-8 py-4 bg-neo-cyan text-neo-black rounded-lg font-display font-semibold hover:bg-neo-cyan/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Workspaces
            </motion.button>
            <motion.button
              className="px-8 py-4 border border-neo-cyan text-neo-cyan rounded-lg font-display font-semibold hover:bg-neo-cyan/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-neo-cyan" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;