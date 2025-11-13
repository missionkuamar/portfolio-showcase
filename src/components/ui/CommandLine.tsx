import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ChevronRight, X } from 'lucide-react';

const CommandLine: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: 'Available commands: help, about, projects, contact, clear',
    about: 'Mission Kumar - AI Developer building intelligent interfaces',
    projects: 'Opening project lab...',
    contact: 'Redirecting to contact section...',
    clear: () => setOutput([]),
  };

  const handleCommand = (cmd: string) => {
    const lowerCmd = cmd.toLowerCase().trim();
    setOutput(prev => [...prev, `$ ${cmd}`]);

    if (lowerCmd in commands) {
      const result = commands[lowerCmd as keyof typeof commands];
      setOutput(prev => [...prev, typeof result === 'function' ? result() : result]);
    } else {
      setOutput(prev => [...prev, `Command not found: ${cmd}. Type 'help' for available commands.`]);
    }

    setCommand('');
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      <motion.button
        className="fixed bottom-6 left-6 z-50 p-4 bg-neo-cyan text-neo-black rounded-full shadow-lg"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <Terminal className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-2xl mx-6 bg-neo-black rounded-2xl border border-neo-cyan/30 overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="flex items-center justify-between p-4 border-b border-neo-cyan/30">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-neo-cyan" />
                  <span className="font-display font-semibold text-white">Mission Terminal</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/10 rounded transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 bg-black/50 h-96 overflow-y-auto">
                <div className="text-green-400 font-mono text-sm mb-4">
                  Welcome to Mission Kumar Terminal v3.0
                  <br />
                  Type 'help' to see available commands
                </div>
                {output.map((line, index) => (
                  <div key={index} className="font-mono text-sm text-white mb-1">
                    {line}
                  </div>
                ))}
                <div className="flex items-center gap-2 font-mono text-sm">
                  <ChevronRight className="w-4 h-4 text-neo-cyan" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleCommand(command)}
                    className="flex-1 bg-transparent outline-none text-white"
                    placeholder="Type a command..."
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandLine;