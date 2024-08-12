"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from 'react'
import ProfilePage from "@/components/profile-section";
import AboutSection from "@/components/about-section";
import WorkExperience from "@/components/work-experience";
import ProjectSection from "@/components/project-section";
import SkillsSection from "@/components/skill-section";
import ContactSection from "@/components/contact-section";
import ThemeToggle from "@/components/theme-toggle";
import CustomScrollbar from "@/components/CustomScrollbar";
export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
     <> 
     <CustomScrollbar/>
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-zinc-800 text-white' : 'bg-gray-100 text-black'}`}>
        <ThemeToggle />
        <ProfilePage />
        <AboutSection />
        <SkillsSection/>
        <WorkExperience/>
        <ProjectSection/>
        <ContactSection/>
      </div>
      </>
  );
}
