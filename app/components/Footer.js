"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from './ThemeProvider';

export default function Footer() {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      link: "https://github.com/angelkoradiya",
      icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      darkIcon: "https://cdn-icons-png.flaticon.com/512/25/25231.png", // GitHub icon is mostly dark-friendly
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/angel-koradiya",
      icon: "https://cdn-icons-png.flaticon.com/512/61/61109.png",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/ANGELKORADIYA",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    },
    {
      name: "Email",
      link: "mailto:koradiyaangel11@gmail.com",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error('All fields are required.');
      return;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      toast.error('Please enter a valid email.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to send the message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-950 py-16 transition-colors duration-300 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-10 bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 rounded-xl flex items-center justify-center text-lg">📧</span>
              Let&apos;s Connect!
            </h3>
            
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              theme={darkMode ? "dark" : "light"}
            />
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-sky-500 rounded-2xl outline-none transition-all dark:text-white dark:placeholder-gray-500"
                  required
                />
              </div>
              
              <div className="group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-sky-500 rounded-2xl outline-none transition-all dark:text-white dark:placeholder-gray-500"
                  required
                />
              </div>
              
              <div className="group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-5 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-sky-500 rounded-2xl outline-none transition-all dark:text-white dark:placeholder-gray-500 resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-sky-600 text-white font-bold py-4 px-6 rounded-2xl hover:bg-sky-700 transition-all disabled:bg-sky-400 shadow-lg shadow-sky-500/20 active:scale-[0.98]"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          {/* Social Links & Info */}
          <div className="flex flex-col justify-between py-4">
            <div className="space-y-8">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                <span className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center text-lg">🌐</span>
                Stay Connected
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all group hover:shadow-lg hover:shadow-sky-500/5"
                  >             
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl group-hover:scale-110 transition-transform">
                      <Image 
                        src={social.icon} 
                        alt={social.name} 
                        width={24} 
                        height={24} 
                        className={darkMode && social.name === "GitHub" ? "invert" : ""}
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-bold text-gray-900 dark:text-white text-sm">{social.name}</span>
                      <span className="text-xs text-gray-500 truncate">
                        {social.name === "Email" ? "koradiyaangel11@gmail.com" :
                         social.name === "GitHub" ? "@angelkoradiya" :
                         social.name === "LinkedIn" ? "@angel-koradiya" :
                         "@ANGELKORADIYA"}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} <span className="text-gray-900 dark:text-white">Angel Koradiya</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

  );
}
