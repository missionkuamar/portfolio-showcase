import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Image, MessageSquare } from 'lucide-react';

const AIStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'explain' | 'generate' | 'chat'>('explain');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleAIAction = async () => {
    // Mock AI response
    setOutput('AI is processing your request...');
    setTimeout(() => {
      setOutput('This is a mock AI response. In a real implementation, this would connect to OpenAI API.');
    }, 1000);
  };

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
            AI <span className="text-neo-cyan">Studio</span>
          </h2>
          <p className="text-xl text-gray-400">
            Interactive playground showcasing AI capabilities and integrations
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
          <div className="flex border-b border-white/10">
            {[
              { id: 'explain' as const, label: 'Code Explainer', icon: Code },
              { id: 'generate' as const, label: 'Image Generator', icon: Image },
              { id: 'chat' as const, label: 'AI Assistant', icon: MessageSquare },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`flex items-center gap-2 px-6 py-4 font-display font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'text-neo-cyan border-b-2 border-neo-cyan'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Input
                </label>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    activeTab === 'explain' 
                      ? 'Paste your code here...'
                      : activeTab === 'generate'
                      ? 'Describe the image you want to generate...'
                      : 'Ask me anything about Mission Kumar...'
                  }
                  className="w-full h-48 bg-black/50 border border-white/20 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-neo-cyan resize-none"
                />
                <motion.button
                  className="w-full mt-4 px-6 py-3 bg-neo-cyan text-neo-black rounded-lg font-display font-semibold hover:bg-neo-cyan/90 transition-colors"
                  onClick={handleAIAction}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Brain className="w-4 h-4 inline mr-2" />
                  Process with AI
                </motion.button>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  AI Response
                </label>
                <div className="w-full h-48 bg-black/50 border border-white/20 rounded-lg p-4 text-white overflow-y-auto">
                  {output || 'AI response will appear here...'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStudio;