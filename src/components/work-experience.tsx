"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    duration: "1 year 2 months | Feb 2023 - April 2024",
    description: "Worked on various web development projects for clients, focusing on responsive design and modern JavaScript frameworks."
  },
  {
    title: "Full Stack Intern",
    company: "Tech Company",
    duration: "3 months | April 2024 - July 2024",
    description: "Gained hands-on experience in full-stack development, working with both front-end and back-end technologies in a professional setting."
  }
];

const ExperienceItem = ({ title, company, duration, description, index }: Experience & { index: number }) => {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={itemRef}
      className="mb-16 flex flex-col items-center"
      style={{ opacity }}
    >
      <motion.div 
        className="bg-zinc-800 rounded-lg p-6 shadow-lg max-w-md w-full"
        style={{ y }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.h3
          className="text-2xl font-bold text-zinc-200"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {title}
        </motion.h3>
        <p className="text-zinc-400 mt-1">{company} | {duration}</p>
        <motion.p
          className="text-zinc-300 mt-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const WorkExperience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <motion.div
      ref={containerRef}
      className="mt-[8rem] max-w-4xl w-full mx-auto px-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.h2
        className="text-4xl text-center font-bold mb-16 text-zinc-200"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Work Experience
      </motion.h2>
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-zinc-600 hidden md:block"
        style={{ scaleY: scrollYProgress }}
      />
      <div className="relative">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;