"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaMobileAlt, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiFirebase, SiExpress, SiMongodb, SiFramer } from 'react-icons/si';
import { useTheme } from 'next-themes';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: 'C', icon: <FaCode /> },
  { name: 'C++', icon: <FaCode /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Framer Motion', icon: <SiFramer /> },
];

const SkillTag = ({ name, icon, isSelected, onClick }: Skill & { isSelected: boolean; onClick: () => void }) => {
  const { theme } = useTheme();
  
  const backgroundColor = theme === 'light' 
    ? (isSelected ? "#E5E7EB" : "#E5E7EB") // gray-200
    : (isSelected ? "#3f3f46" : "#3f3f3f"); // zinc-700 or a similar shade

  return (
    <motion.div
      className={`dark:bg-zinc-700 bg-gray-200 dark:text-zinc-200 text-gray-600 px-3 py-2 rounded-full flex items-center m-1 cursor-pointer`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        backgroundColor,
        transition: { duration: 0.3 }
      }}
      onClick={onClick}
    >
      <span className="mr-2">{icon}</span>
      {name}
    </motion.div>
  );
};


const SkillsSection = () => {
  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleSkillClick = (index: number) => {
    setSelectedSkills(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );

    if (selectedSkills.length === 1) {
      setIsShuffling(true);
      setTimeout(() => {
        setIsShuffling(false);
        setSelectedSkills([]);
      }, 1500);
    }
  };

  return (
    <motion.div
      className="mt-[8rem] max-w-4xl w-full mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.h2
        className="text-4xl font-bold mb-8 dark:text-zinc-200 text-gray-700 text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, staggerChildren: 0.1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isShuffling ? {
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              transition: { duration: 0.5 }
            } : { 
              opacity: 1, 
              y: 0, 
              x: 0,
              transition: { delay: index * 0.1, duration: 0.5 }
            }}
          >
            <SkillTag 
              {...skill} 
              isSelected={selectedSkills.includes(index)}
              onClick={() => handleSkillClick(index)}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillsSection;