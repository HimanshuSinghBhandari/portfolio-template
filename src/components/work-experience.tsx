"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import { useTheme } from 'next-themes';

interface Experience {
  company: string;
  logo: string;
  position: string;
  duration: string;
  details: string;
}

const experiences: Experience[] = [
  {
    company: "Tech Innovators",
    logo: "https://picsum.photos/100/100?random=1",
    position: "Senior Frontend Developer",
    duration: "Jan 2022 - Present",
    details: "Led the development of the company's flagship web application. Implemented new features and optimized performance, resulting in a 40% increase in user engagement."
  },
  {
    company: "Digital Solutions Inc.",
    logo: "https://picsum.photos/100/100?random=2",
    position: "Full Stack Developer",
    duration: "Mar 2020 - Dec 2021",
    details: "Developed and maintained multiple client websites. Collaborated with the design team to implement responsive and accessible user interfaces."
  },
  {
    company: "StartUp Nexus",
    logo: "https://picsum.photos/100/100?random=3",
    position: "Junior Developer",
    duration: "Jun 2019 - Feb 2020",
    details: "Assisted in the development of a mobile app for local businesses. Gained experience in React Native and backend integration."
  },
  {
    company: "CodeCraft Academy",
    logo: "https://picsum.photos/100/100?random=4",
    position: "Intern",
    duration: "Jan 2019 - May 2019",
    details: "Participated in various coding projects and workshops. Learned best practices in software development and version control."
  },
  {
    company: "Freelance",
    logo: "https://picsum.photos/100/100?random=5",
    position: "Web Developer",
    duration: "Sep 2018 - Dec 2018",
    details: "Worked on several freelance projects, creating custom websites for small businesses and individuals."
  }
];

const ExperienceItem = ({ company, logo, position, duration, details }: Experience) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const [detailLines, setDetailLines] = useState<string[]>([]);
  useEffect(() => {
    setDetailLines(details.split('. '));
  }, [details]);

  return (
    <motion.div
      className={`mb-4 rounded-lg p-4 cursor-pointer ${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-100'}`}
      whileHover={{ scale: 1.02 }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center mb-2 sm:mb-0">
          <Image
            src={logo}
            alt={`${company} logo`}
            width={50}
            height={50}
            className="rounded-full mr-4"
          />
          <div>
            <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-zinc-200' : 'text-gray-800'}`}>{company}</h3>
            <p className={`${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>{position}</p>
          </div>
        </div>
        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto mt-2 sm:mt-0">
          <span className={`${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'} mr-2`}>{duration}</span>
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaChevronRight className={`${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`} />
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`${theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'} mt-4`}
          >
            {detailLines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ filter: "blur(4px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {line}.
              </motion.p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const WorkExperience = () => {
  return (
    <motion.div
      className="mt-[8rem] max-w-4xl w-full mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl text-center font-bold mb-12 text-gray-800 dark:text-zinc-200">Work Experience</h2>
      <div>
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
