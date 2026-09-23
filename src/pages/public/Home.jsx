import HeroSection from "../../components/portfolio/HeroSection";
import AboutSection from "../../components/portfolio/AboutSection";
import SkillsSection from "../../components/portfolio/SkillsSection";
import ProjectsSection from "../../components/portfolio/ProjectsSection";
// import CaseStudiesSection from "../../components/portfolio/CaseStudiesSection";
import ReviewsSection from "../../components/portfolio/ReviewsSection";
import ServicesSection from "../../components/portfolio/ServicesSection";
import CommonCTA from "../../components/common/CommonCTA";
import FAQSection from "../../components/portfolio/FAQSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <FAQSection />
      {/* <CaseStudiesSection /> */}
      <ReviewsSection />
      {/* <ContactSection /> */}
      <CommonCTA />
    </main>
  );
};

export default Home;