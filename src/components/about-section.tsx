"use client";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from 'next/image';
import { useTheme } from "next-themes";

interface TimelineItem {
  year: string;
  text: string;
  details: string;
  side: "left" | "right";
  image: string;
}

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const timelineItems: TimelineItem[] = [
    {
      year: "2010",
      text: "Started high school",
      details: "Enrolled in XYZ High School with a focus on science and mathematics.",
      side: "left",
      image: "https://picsum.photos/100/100?random=1"
    },
    {
      year: "2012",
      text: "Graduated high school with honors",
      details: "Achieved top grades and received multiple academic awards.",
      side: "right",
      image: "https://picsum.photos/100/100?random=2"
    },
    {
      year: "2021",
      text: "Began college studies in Design",
      details: "Enrolled in ABC University's prestigious Design program.",
      side: "left",
      image: "https://picsum.photos/100/100?random=3"
    },
    {
      year: "2022",
      text: "Won first place in college design competition",
      details: "Created an innovative UI/UX design that impressed industry professionals.",
      side: "right",
      image: "https://picsum.photos/100/100?random=4"
    },
    {
      year: "2024",
      text: "Graduated college with distinction",
      details: "Completed degree with a perfect GPA and received multiple job offers.",
      side: "left",
      image: "https://picsum.photos/100/100?random=5"
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(prevIndex => prevIndex === index ? null : index);
  };

  const BlurryText = ({ text }: { text: string }) => {
    const words = text.split(' ');
    return (
      <>
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ filter: "blur(4px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </>
    );
  };

  return (
    <motion.div
      ref={containerRef}
      className="md:mt-16 max-w-3xl w-full mx-auto px-4 relative dark:bg-zinc-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.h2
        className="text-4xl font-bold mb-8 text-gray-900 dark:text-zinc-200 text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        About Me
      </motion.h2>
      <div className="text-gray-700 dark:text-zinc-300 mb-12">
        <p className="mb-4">
          I&apos;m Himanshu Singh, a Full stack developer based in Dehradun India. With a passion for creating visually stunning and user-friendly websites, I strive to exceed client expectations and push the boundaries of what&apos;s possible.
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 dark:bg-zinc-600 h-full hidden md:block" />
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            className={`flex items-center mb-8 ${
              item.side === "left" ? "md:justify-start" : "md:justify-end"
            } justify-center`}
            style={{ opacity }}
          >
            {/* Mobile layout */}
            <div className="md:hidden w-full">
              <motion.div
                className="p-4 rounded-lg bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 shadow-lg cursor-pointer"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => toggleExpand(index)}
              >
                <div className="flex items-center">
                  <Image
                    src={item.image}
                    alt={`Profile for ${item.year}`}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-zinc-200 mb-2">{item.year}</h3>
                    <p className="text-gray-800 dark:text-zinc-300">{item.text}</p>
                  </div>
                  <FaChevronDown className="text-gray-500 dark:text-zinc-300 ml-auto" />
                </div>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-gray-600 dark:text-zinc-400"
                    >
                      <BlurryText text={item.details} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
            
            {/* Desktop layout */}
            <div
              className={`hidden md:flex items-center w-full ${
                item.side === "left" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`w-5/12 p-3 rounded-lg bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-600 shadow-lg flex ${
                  item.side === "left" ? "mr-8 text-left" : "ml-8 text-right"
                }`}
              >
                {item.side === "left" && (
                  <Image
                    src={item.image}
                    alt={`Profile for ${item.year}`}
                    width={50}
                    height={50}
                    className="rounded-full mr-3 flex-shrink-0 object-cover"
                  />
                )}
                <div className="flex-grow">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-zinc-200 mb-0.5">{item.year}</h3>
                  <p className="text-xs text-gray-700 dark:text-zinc-300">{item.text}</p>
                  <div
                    className={`mt-1 cursor-pointer flex items-center text-xs ${
                      item.side === "left" ? "" : "justify-end"
                    }`}
                    onClick={() => toggleExpand(index)}
                  >
                    <span className="text-gray-600 dark:text-zinc-400">
                      {expandedIndex === index ? "Hide details" : "Show details"}
                    </span>
                    <FaChevronDown className="text-gray-500 dark:text-zinc-300 ml-1" />
                  </div>
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-1 text-xs text-gray-600 dark:text-zinc-400"
                      >
                        <BlurryText text={item.details} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {item.side === "right" && (
                  <Image
                    src={item.image}
                    alt={`Profile for ${item.year}`}
                    width={50}
                    height={50}
                    className="rounded-full ml-3 flex-shrink-0 object-cover"
                  />
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutSection;