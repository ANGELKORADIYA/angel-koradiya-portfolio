"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from './ThemeProvider';
import { 
  FaGithub, 
  FaLinkedin, 
  FaXTwitter, 
  FaEnvelope, 
  FaArrowUp,
  FaPaperPlane,
  FaLocationDot
} from "react-icons/fa6";
import { siteConfig } from '@/lib/siteConfig';

export default function Footer() {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: "GitHub",
      link: "https://github.com/angelkoradiya",
      icon: <FaGithub className="w-5 h-5" />,
      color: "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/angel-koradiya",
      icon: <FaLinkedin className="w-5 h-5" />,
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600"
    },
    {
      name: "Twitter",
      link: "https://twitter.com/ANGELKORADIYA",
      icon: <FaXTwitter className="w-5 h-5" />,
      color: "hover:bg-sky-50 dark:hover:bg-sky-900/30 hover:text-sky-500"
    },
    {
      name: "Email",
      link: "mailto:koradiyaangel11@gmail.com",
      icon: <FaEnvelope className="w-5 h-5" />,
      color: "hover:bg-red-50 dark:hover:bg-red-900/30 hover:text-red-500"
    }
  ];

  const [modalType, setModalType] = useState(null);

  const policies = {
    privacy: {
      title: "Privacy Policy",
      content: (
        <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
          <p>At Angel Koradiya Portfolio, we value your privacy. This policy explains how we handle your data.</p>
          <h4 className="font-bold text-gray-900 dark:text-white">Data Collection</h4>
          <p>We only collect information you provide through our contact form (Name, Email, Message) to respond to your inquiries.</p>
          <h4 className="font-bold text-gray-900 dark:text-white">Cookies</h4>
          <p>We use essential cookies and local storage to remember your theme preferences (Dark/Light mode).</p>
          <h4 className="font-bold text-gray-900 dark:text-white">Security</h4>
          <p>Your messages are sent via secure API routes and are not shared with third parties for marketing purposes.</p>
        </div>
      )
    },
    terms: {
      title: "Terms of Service",
      content: (
        <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
          <p>By using this website, you agree to the following terms.</p>
          <h4 className="font-bold text-gray-900 dark:text-white">Content</h4>
          <p>The code and projects displayed here are for portfolio purposes. Please respect copyright and attribution for original works.</p>
          <h4 className="font-bold text-gray-900 dark:text-white">Usage</h4>
          <p>You may not use this site for any unlawful activities or to spam the contact system.</p>
          <h4 className="font-bold text-gray-900 dark:text-white">Disclaimer</h4>
          <p>The information provided on this site is for general purposes and may be updated at any time without notice.</p>
        </div>
      )
    }
  };

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
    <footer className="relative bg-gray-50 dark:bg-gray-950 pt-20 pb-10 transition-colors duration-300 border-t border-gray-200 dark:border-gray-800 overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 p-[2px]">
                <div className="w-full h-full bg-white dark:bg-gray-950 rounded-[14px] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <span className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                Angel Koradiya
              </span>
            </Link>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              {siteConfig.description} Dedicated to building high-quality, performant, and user-friendly web applications.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm">
              <FaLocationDot className="text-sky-500" />
              <span>Gujarat, India</span>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-3 lg:pl-8">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Projects', path: '/projects' },
                { name: 'Learning', path: '/learning' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href="/Angel%20Koradiya%20Resume.pdf" 
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-sm font-medium flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl shadow-gray-200/20 dark:shadow-none">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-lg flex items-center justify-center text-sm">
                  <FaEnvelope />
                </span>
                Let&apos;s Connect
              </h3>
              
              <ToastContainer
                position="bottom-right"
                autoClose={3000}
                theme={darkMode ? "dark" : "light"}
              />
              
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:border-sky-500 dark:focus:border-sky-500 rounded-xl outline-none transition-all dark:text-white text-sm"
                    required
                  />
                </div>
                
                <div className="space-y-1.5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:border-sky-500 dark:focus:border-sky-500 rounded-xl outline-none transition-all dark:text-white text-sm"
                    required
                  />
                </div>
                
                <div className="sm:col-span-2 space-y-1.5">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:border-sky-500 dark:focus:border-sky-500 rounded-xl outline-none transition-all dark:text-white text-sm resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="sm:col-span-2 bg-sky-600 hover:bg-sky-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2 group active:scale-[0.98] shadow-lg shadow-sky-500/20"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} <span className="text-gray-900 dark:text-white">Angel Koradiya</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setModalType('privacy')}
              className="text-sm text-gray-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setModalType('terms')}
              className="text-sm text-gray-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Policy Modal Overlay */}
      {modalType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-gray-950/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setModalType(null)}
          ></div>
          <div className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 p-8 animate-slide-in-up">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {policies[modalType].title}
              </h3>
              <button 
                onClick={() => setModalType(null)}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
              {policies[modalType].content}
            </div>
            <div className="mt-8">
              <button
                onClick={() => setModalType(null)}
                className="w-full py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-sky-600 dark:text-sky-400 shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-90 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
