import HeroSection from "../features/home/components/HeroSection";
import TechStackSection from "../features/home/components/TechStackSection";
import FeaturedProjectsSection from "../features/home/components/FeaturedProjectsSection";
import AboutPreviewSection from "../features/home/components/AboutPreviewSection";
import ServicesSection from "../features/home/components/ServicesSection";
import WhyWorkWithMeSection from "../features/home/components/WhyWorkWithMeSection";
import ProcessSection from "../features/home/components/ProcessSection";
import CaseStudiesSection from "../features/home/components/CaseStudiesSection";
import TestimonialsSection from "../features/home/components/TestimonialsSection";
import BlogPreviewSection from "../features/home/components/BlogPreviewSection";
import ContactCTASection from "../features/home/components/ContactCTASection";

import useHomePage from "../features/home/hooks/useHomePage";

const Home = () => {
  const {
    data,
  } = useHomePage();

  return (
    <>
      <HeroSection
        data={data.hero}
      />

      <TechStackSection
        data={data.technologies}
      />

      <FeaturedProjectsSection
        data={data.projects}
      />

      <AboutPreviewSection
        data={data.about}
      />

      <ServicesSection
        data={data.services}
      />

    <WhyWorkWithMeSection data={data.benefits} />

      <ProcessSection
        data={data.process}
      />

      <CaseStudiesSection
        data={data.caseStudies}
      />

      <TestimonialsSection
        data={data.testimonials}
      />

      <BlogPreviewSection
        data={data.blogs}
      />

      <ContactCTASection
        data={data.cta}
      />
    </>
  );
};

export default Home;