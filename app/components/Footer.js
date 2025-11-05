"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      link: "https://github.com/angelkoradiya",
      icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
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
      setError('All fields are required.');
      setSuccess('');
      return;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setError('Please enter a valid email.');
      setSuccess('');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSuccess('Message sent successfully!');
        setError('');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Something went wrong. Please try again.');
      }
    } catch (error) {
      setError('Failed to send the message. Please check your connection.');
      setSuccess('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">Let's Connect! 📧</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="text-red-500">{error}</div>}
            {success && <div className="text-green-500">{success}</div>}
            
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        
        <div className="space-y-6 flex flex-col items-center">
          <h3 className="text-2xl font-bold text-gray-800">Stay Connected 🌐</h3>
          <div className="flex flex-col space-y-4 w-full max-w-md">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 transition-colors group pl-28"
              >             
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image src={social.icon} alt={social.name} width={32} height={32} className="group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">{social.name}</span>
                  <span className="text-sm text-gray-500">
                    {social.name === "Email" ? "koradiyaangel11@gmail.com" :
                     social.name === "GitHub" ? "@angelkoradiya" :
                     social.name === "LinkedIn" ? "@angel-koradiya" :
                     "@ANGELKORADIYA"}
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 text-center text-gray-600 w-full">
            <p>&copy; {new Date().getFullYear()} Angel Koradiya. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}