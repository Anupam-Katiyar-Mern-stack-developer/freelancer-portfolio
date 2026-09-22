import AboutHero from "../../components/about/AboutHero";
import JourneySection from "../../components/about/JourneySection";
import WhatIDoSection from "../../components/about/WhatIDoSection";
import CareerSection from "../../components/about/CareerSection";
import WorkProcess from "../../components/about/WorkProcess";
import AboutCTA from "../../components/about/AboutCTA";

import PageTransition from "../../components/common/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <main>
        <AboutHero />
        <JourneySection />
        <WhatIDoSection />
        <CareerSection />
        <WorkProcess />
        <AboutCTA />
      </main>
    </PageTransition>
  );
};

export default About;