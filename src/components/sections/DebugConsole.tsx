import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Bug, Lightbulb } from 'lucide-react';

const DebugConsole: React.FC = () => {
  const [code, setCode] = useState('// Write your code here\nfunction helloMission() {\n  return "Hello World!";\n}');
  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      // Simple code execution simulation
      const result = 'Code executed successfully! Output: Hello World!';
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error}`);
    }
  };

  const getAISuggestion = () => {
    setOutput('AI Suggestion: Consider adding error handling and input validation to make this function more robust.');
  };

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-neo-black to-purple-900/20">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-display font-bold mb-4">
            Debug <span className="text-neo-cyan">Console</span>
          </h2>
          <p className="text-xl text-gray-400">
            Interactive coding environment with AI-powered suggestions
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-display font-semibold">Code Editor</h3>
              <div className="flex gap-2">
                <motion.button
                  className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm font-semibold"
                  onClick={runCode}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-4 h-4" />
                  Run
                </motion.button>
                <motion.button
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-lg text-sm font-semibold"
                  onClick={getAISuggestion}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Lightbulb className="w-4 h-4" />
                  AI Help
                </motion.button>
              </div>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-96 bg-black/50 border border-white/20 rounded-lg p-4 font-mono text-sm text-white focus:outline-none focus:border-neo-cyan resize-none"
            />
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Bug className="w-5 h-5 text-neo-cyan" />
              <h3 className="text-xl font-display font-semibold">Output & Suggestions</h3>
            </div>
            <div className="w-full h-96 bg-black/50 border border-white/20 rounded-lg p-4 font-mono text-sm text-white overflow-y-auto">
              {output || 'Run your code to see the output here...'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DebugConsole;