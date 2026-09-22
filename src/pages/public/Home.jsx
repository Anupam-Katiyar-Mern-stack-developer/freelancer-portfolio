import HeroSection from "../../components/portfolio/HeroSection";
import AboutSection from "../../components/portfolio/AboutSection";
import SkillsSection from "../../components/portfolio/SkillsSection";
import ProjectsSection from "../../components/portfolio/ProjectsSection";
import CaseStudiesSection from "../../components/portfolio/CaseStudiesSection";
import ReviewsSection from "../../components/portfolio/ReviewsSection";
import ContactSection from "../../components/portfolio/ContactSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CaseStudiesSection />
      <ReviewsSection />
      <ContactSection />
    </main>
  );
};

export default Home;