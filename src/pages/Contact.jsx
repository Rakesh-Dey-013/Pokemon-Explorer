import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-zinc-800/50 rounded-xl border border-zinc-700/50 p-8"
      >
        <h1 className="text-3xl font-bold text-white mb-6">Contact Us</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            Have questions, suggestions, or feedback about Pokémon Explorer? 
            We'd love to hear from you! Reach out to us through any of the 
            following channels.
          </p>
          
          <div className="space-y-6">
            <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700/50">
              <h2 className="text-xl font-semibold text-white mb-4">Get in Touch</h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700/50">
              <h2 className="text-xl font-semibold text-white mb-4">Connect With Us</h2>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername/pokemon-explorer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl" />
                </a>
                
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-xl" />
                </a>
                
                <a
                  href="https://discord.gg/yourinvite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
                  aria-label="Discord"
                >
                  <FaDiscord className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;