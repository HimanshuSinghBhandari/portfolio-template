"use client"
import { motion } from 'framer-motion';
import { FaCog, FaClock, FaLightbulb } from 'react-icons/fa';
import Link from 'next/link';

interface Project {
  icon: React.ReactNode;
  name: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  { icon: <FaCog className="text-zinc-300" />, name: "Web App Redesign", image: "https://picsum.photos/600/300?random=1", link: "/projects/web-app" },
  { icon: <FaClock className="text-zinc-300" />, name: "Brand Identity", image: "https://picsum.photos/600/300?random=2", link: "/projects/brand-identity" },
  { icon: <FaLightbulb className="text-zinc-300" />, name: "Mobile App UI", image: "https://picsum.photos/600/300?random=3", link: "/projects/mobile-app" },
];

const ProjectCard = ({ icon, name, image, link }: Project) => (
  <Link href={link}>
    <motion.div
      className="bg-zinc-700 rounded-lg overflow-hidden shadow-lg w-full max-w-4xl mx-auto mb-12 sm:max-w-sm md:max-w-2xl lg:max-w-4xl"
      whileHover={{ scale: 1.05, y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-zinc-300">{name}</h3>
        <div className="text-2xl text-zinc-300">{icon}</div>
      </div>
      <div className="px-4 pb-4">
        <motion.div
          className="overflow-hidden rounded-lg"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          <img src={image} alt={name} className="w-full h-64 object-cover" />
        </motion.div>
      </div>
    </motion.div>
  </Link>
);

const ProjectSection = () => {
  return (
    <motion.div
      className="mt-[8rem] max-w-6xl w-full mx-auto px-4 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-zinc-300">Projects</h2>
      <div className="flex flex-col items-center w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <motion.button
        className="mt-12 bg-gradient-to-r from-zinc-700 to-black text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(167, 139, 250)" }}
        whileTap={{ scale: 0.95 }}
      >
        View All Projects
      </motion.button>
    </motion.div>
  );
};

export default ProjectSection;