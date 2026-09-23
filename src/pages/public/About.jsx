import AboutHero from "../../components/about/AboutHero";
import JourneySection from "../../components/about/JourneySection";
import WhatIDoSection from "../../components/about/WhatIDoSection";
import CareerSection from "../../components/about/CareerSection";
import WorkProcess from "../../components/about/WorkProcess";

import PageTransition from "../../components/common/PageTransition";
import CommonCTA from "../../components/common/CommonCTA";

const About = () => {
  return (
    <PageTransition>
      <main>
        <AboutHero />
        <JourneySection />
        <WhatIDoSection />
        <CareerSection />
        <WorkProcess />
        <CommonCTA />
      </main>
    </PageTransition>
  );
};

export default About;