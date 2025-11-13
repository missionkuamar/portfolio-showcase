import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'carbon-neo' as const, label: 'Carbon Neo', icon: Moon },
    { id: 'aurora-flow' as const, label: 'Aurora Flow', icon: Palette },
    { id: 'solar-pro' as const, label: 'Solar Pro', icon: Sun },
  ];

  return (
    <motion.div
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="flex gap-2 p-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
        {themes.map((themeOption) => {
          const Icon = themeOption.icon;
          return (
            <motion.button
              key={themeOption.id}
              className={`p-3 rounded-full transition-all ${
                theme === themeOption.id
                  ? 'bg-neo-cyan text-neo-black'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => setTheme(themeOption.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={themeOption.label}
            >
              <Icon className="w-4 h-4" />
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ThemeToggle;