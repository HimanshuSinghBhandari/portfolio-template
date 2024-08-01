"use client"
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaMobileAlt, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiFirebase, SiExpress, SiMongodb, SiFramer } from 'react-icons/si';
import Link from 'next/link';

// ... (previous interfaces and components remain the same)

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

const SkillTag = ({ name, icon }: Skill) => (
  <motion.div
    className="bg-zinc-700 text-zinc-200 px-3 py-2 rounded-full flex items-center m-1"
    whileHover={{ scale: 1.05, backgroundColor: "#52525b" }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="mr-2">{icon}</span>
    {name}
  </motion.div>
);

const SkillsSection = () => {
  return (
    <motion.div
      className="mt-[8rem] max-w-4xl w-full mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.h2 
        className="text-4xl font-bold mb-8 text-zinc-200 text-center"
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <SkillTag {...skill} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

 
export default SkillsSection;