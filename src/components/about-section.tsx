"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const timelineVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
    },
  }),
};

const AboutSection = () => {
  const [showTimeline, setShowTimeline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTimeline(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const timelineItems = [
    { year: "2010", text: "Started high school", side: "left" },
    { year: "2012", text: "Graduated high school with honors", side: "right" },
    { year: "2021", text: "Began college studies in Design", side: "left" },
    { year: "2022", text: "Won first place in college design competition", side: "right" },
    { year: "2024", text: "Graduated college with distinction", side: "left" },
  ];

  return (
    <motion.div
      className="md:mt-16 max-w-3xl w-full mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.h2
        className="text-4xl font-bold mb-8 text-zinc-200 text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        About Me
      </motion.h2>
      <div className="text-zinc-300 mb-12">
      <p className="mb-4">
       I&apos;m Himanshu Singh, a Full stack developer based in Dehradun India. With a passion for creating visually stunning and user-friendly websites, I strive to exceed client expectations and push the boundaries of what&apos;s possible.
       </p>
      </div>
      {showTimeline && (
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-zinc-600" />
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center mb-8 ${
                item.side === "left" ? "justify-end" : "justify-start"
              }`}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={timelineVariants}
            >
              <motion.div
                className={`w-5/12 p-4 rounded-lg bg-zinc-800 shadow-lg ${
                  item.side === "left" ? "mr-8 text-right" : "ml-8"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-lg font-semibold text-zinc-200 mb-2">{item.year}</h3>
                <p className="text-zinc-300">{item.text}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default AboutSection;