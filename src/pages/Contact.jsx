import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/mldwykjg", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        alert("✅ Thank you! Your message has been sent.");
        e.target.reset(); // Clear input fields
      } else {
        alert("⚠️ Something went wrong. Please try again later.");
      }
    } catch (error) {
      alert("❌ Error submitting form. Please check your connection.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-zinc-800/50 rounded-xl border border-zinc-700/50 p-8"
      >
        <h1 className="text-3xl font-bold text-white mb-6">Contact Us</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="4"
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={sending}
            className={`px-6 py-2 text-white font-medium rounded-lg transition-colors ${sending ? "bg-gray-500" : "bg-red-500 hover:bg-red-600"
              }`}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>


        <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700/50 mt-7 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white mb-4">Connect With Us</h2>

          <div className="flex space-x-4">
            <a
              href="https://github.com/Rakesh-Dey-013/Pokemon-Explorer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>

            <a
              href="https://x.com/RD_Gaming796974"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="text-xl" />
            </a>

            <a
              href="https://discord.com/users/rakesh_007_13_41681"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
              aria-label="Discord"
            >
              <FaDiscord className="text-xl" />
            </a>
          </div>
          </div>
      </motion.div>
    </div>
  );
};

export default Contact;
