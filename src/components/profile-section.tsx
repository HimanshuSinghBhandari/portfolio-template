"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';
import { MdEmail, MdContentCopy } from 'react-icons/md';
import { useTheme } from 'next-themes';

const ProfilePage = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  const socialLinks = [
    { icon: <FaTwitter />, name: 'X.com', url: 'https://x.com' },
    { icon: <SiThreads />, name: 'Threads', url: 'https://threads.net' },
    { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com' },
    { icon: <FaInstagram />, name: 'Instagram', url: 'https://instagram.com' },
    { icon: <FaYoutube />, name: 'YouTube', url: 'https://youtube.com' },
  ];

  const email = "dean.smith@example.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-10 bg-gray-100 dark:bg-zinc-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl w-full mx-4"
      >
        <motion.p 
          className="md:text-2xl text-xl font-semibold md:mb-4 mb-[2rem] text-gray-700 dark:text-zinc-300"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {currentTime}
        </motion.p>
        
        <motion.img
          src="https://picsum.photos/600/300?random=1"
          alt="Profile"
          className="rounded-full w-36 h-36 mx-auto md:mb-6 mb-[2rem]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
        
        <motion.h1 
          className="md:text-3xl text-2xl text-center font-bold md:mb-2 mb-[2rem] text-gray-800 dark:text-zinc-300"
        >
            Hi, I&apos;m Himanshu 👋
        </motion.h1>
        <p className="text-xl text-gray-700 dark:text-zinc-300 mb-4">Full Stack developer</p>
        
        <div className="flex items-center justify-center mb-6">
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-4 h-4 bg-green-500 rounded-full md:mb-0 mb-3 mr-3"
          />
          <p className="text-lg text-gray-700 dark:text-zinc-300 md:mb-0 mb-3">Available for new opportunities</p>
        </div>
        
        <div className="flex justify-center space-x-4 mb-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-600 dark:text-zinc-300 text-2xl hover:text-gray-800 dark:hover:text-zinc-100 md:mb-0 mb-3"
            >
              <span title={link.name}>{link.icon}</span>
            </motion.a>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <motion.a
            href={`mailto:${email}`}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center bg-gray-600 dark:bg-zinc-500 text-white px-6 py-3 rounded-full hover:bg-gray-700 dark:hover:bg-zinc-600 transition-colors text-lg md:m-0 m-4"
          >
            <MdEmail className="mr-2 text-xl" />
            Contact me
          </motion.a>
          <motion.button
            onClick={copyEmail}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center bg-transparent border border-gray-400 dark:border-zinc-400 text-gray-700 dark:text-white px-6 py-3 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-600 transition-colors text-lg backdrop-blur-md md:m-0 m-4"
          >
            <MdContentCopy className="mr-2 text-xl" />
            {copied ? 'Copied!' : 'Copy Email'}
          </motion.button>
        </div>
        
        <motion.p 
          className="text-lg text-gray-600 dark:text-zinc-300"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          NYC, USA • 40.7128° N, 74.0060° W
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ProfilePage;