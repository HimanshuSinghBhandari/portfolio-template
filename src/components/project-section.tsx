"use client"
import { motion, useTransform, useScroll } from 'framer-motion';
import { FaCog, FaClock, FaLightbulb, FaMagic, FaGlobe, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';
import ThemeToggle from './theme-toggle';

interface Project {
  icon: React.ReactNode;
  name: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  websiteLink?: string;
  sourceLink?: string;
}

const projects: Project[] = [
  {
    icon: <FaCog className="text-zinc-300" />,
    name: "Web App Redesign",
    description: "Redesigned and improved user experience for a complex web application.",
    image: "https://picsum.photos/600/300?random=1",
    link: "/projects/web-app",
    tags: ["React", "TypeScript", "TailwindCSS"],
    websiteLink: "https://example.com",
    sourceLink: "https://github.com/example/web-app"
  },
  {
    icon: <FaClock className="text-zinc-300" />,
    name: "Brand Identity",
    description: "Created a cohesive brand identity for a startup company.",
    image: "https://picsum.photos/600/300?random=2",
    link: "/projects/brand-identity",
    tags: ["Figma", "Illustrator", "Photoshop"],
    websiteLink: "https://example.com/brand"
  },
  {
    icon: <FaLightbulb className="text-zinc-300" />,
    name: "Mobile App UI",
    description: "Designed and prototyped a mobile app interface for iOS and Android.",
    image: "https://picsum.photos/600/300?random=3",
    link: "/projects/mobile-app",
    tags: ["React Native", "Expo", "Firebase"],
    websiteLink: "https://example.com/app",
    sourceLink: "https://github.com/example/mobile-app"
  },
  {
    icon: <FaMagic className="text-zinc-300" />,
    name: "Magic UI",
    description: "Designed, developed and sold animated UI components for developers.",
    image: "https://picsum.photos/600/300?random=4",
    link: "/projects/magic-ui",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI"],
    websiteLink: "https://magicui.design",
    sourceLink: "https://github.com/example/magic-ui"
  }
];

const ProjectCard = ({ icon, name, description, image, link, tags, websiteLink, sourceLink }: Project) => (
  <motion.div
    className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-600 rounded-lg overflow-hidden shadow-lg w-full sm:w-[calc(50%-0.5rem)] mb-8"
    whileHover={{ scale: 1.02, y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Link href={link}>
      <div className="p-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-zinc-300">{name}</h3>
        <div className="text-xl text-gray-600 dark:text-zinc-300">{icon}</div>
      </div>
      <div className="px-4 pb-4">
        <motion.div
          className="overflow-hidden rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={image} alt={name} className="w-full h-40 object-cover" width={600} height={300} />
        </motion.div>
        <p className="mt-3 text-sm text-gray-600 dark:text-zinc-400">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 px-2 py-1 rounded-xl text-xs"
              whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb" }}
              transition={{ duration: 0.2 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          {websiteLink && (
            <motion.a
              href={websiteLink}
              className="bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-zinc-300 px-3 py-1 rounded-lg text-sm flex items-center gap-1"
              whileHover={{ scale: 1.05, backgroundColor: "#d1d5db" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGlobe /> Website
            </motion.a>
          )}
          {sourceLink && (
            <motion.a
              href={sourceLink}
              className="bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-zinc-300 px-3 py-1 rounded-lg text-sm flex items-center gap-1"
              whileHover={{ scale: 1.05, backgroundColor: "#d1d5db" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> Source
            </motion.a>
          )}
        </div>
      </div>
    </Link>
  </motion.div>
);

const ProjectSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <motion.div
      ref={ref}
      className="mt-[8rem] max-w-5xl w-full mx-auto px-4 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <ThemeToggle />
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-zinc-300">My Projects</h2>
      <motion.div
        className="relative"
        style={{ opacity, y }}
      >
        <p className="text-4xl text-gray-900 dark:text-zinc-200 font-semibold mb-2 text-center">
          Check out my <span className="relative">
            latest work
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-gray-900 dark:bg-zinc-200"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </span>
        </p>
      </motion.div>
      <div className="flex flex-wrap justify-between w-full mt-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectSection;