"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  const email = "your.email@example.com"; // Replace with your actual email

  return (
    <motion.div
      className="mt-16 max-w-3xl w-full mx-auto px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
     <FaEnvelope className="text-5xl text-zinc-300 mx-auto mb-6" />
      <motion.h2 
        className="text-4xl font-bold mb-8 text-zinc-200"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Contact Me
      </motion.h2>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        
        <p className="text-zinc-300 mb-6">
       Feel free to reach out if you&apos;d like to collaborate on a project or just want to connect!
        </p>

        <motion.a
          href={`mailto:${email}`}
          className="inline-block bg-zinc-700 text-zinc-200 px-6 py-3 rounded-full text-lg font-semibold"
          whileHover={{ scale: 1.05, backgroundColor: "#52525b" }}
          whileTap={{ scale: 0.95 }}
        >
          Send Email
        </motion.a>

        <p className="mt-8 text-zinc-400">
          ©2024 Your Name. Inspired by Ultra by @justinmfarrugia
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;