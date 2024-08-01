import ProfilePage from "@/components/profile-section";
import AboutSection from "@/components/about-section";
import WorkExperience from "@/components/work-experience";
import ProjectSection from "@/components/project-section";
import SkillsSection from "@/components/skill-section";
import ContactSection from "@/components/contact-section";
export default function Home() {
  return (
    <div className="bg-zinc-800 min-h-screen">
        <ProfilePage />
        <AboutSection />
        <SkillsSection/>
        <WorkExperience/>
        <ProjectSection/>
        <ContactSection/>
      </div>
  );
}
