import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, MapPin, Send } from 'lucide-react';

const ContactHub: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
            Contact <span className="text-neo-cyan">Hub</span>
          </h2>
          <p className="text-xl text-gray-400">
            Let's build something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-display font-semibold mb-8">Get In Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neo-cyan"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neo-cyan"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neo-cyan resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-neo-cyan text-neo-black rounded-lg font-display font-semibold hover:bg-neo-cyan/90 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-display font-semibold mb-6">Quick Connect</h3>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:mission@kumar.com"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-neo-cyan transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail className="w-6 h-6 text-neo-cyan" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-400">mission@kumar.com</div>
                  </div>
                </motion.a>

                <motion.a
                  href="#"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-neo-cyan transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <Calendar className="w-6 h-6 text-purple-400" />
                  <div>
                    <div className="font-semibold">Schedule Meeting</div>
                    <div className="text-gray-400">Book a 30-min call</div>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10"
                  whileHover={{ scale: 1.02 }}
                >
                  <MapPin className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-gray-400">Remote • Global</div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-neo-cyan/10 to-purple-500/10 rounded-2xl border border-neo-cyan/20">
              <h4 className="font-display font-semibold text-lg mb-3">Collaboration Ready</h4>
              <p className="text-gray-400 text-sm">
                Currently available for AI integration projects, full-stack development, 
                and innovative web experiences. Let's discuss how we can push boundaries together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHub;