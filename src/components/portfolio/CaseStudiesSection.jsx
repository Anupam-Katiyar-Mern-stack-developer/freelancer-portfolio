import { motion } from "motion/react";

import useSiteData from "../../hooks/useSiteData";

import SectionTitle from "../common/SectionTitle";
import CaseStudyCard from "../caseStudy/CaseStudyCard";

const CaseStudiesSection = () => {
  const { siteData } = useSiteData();

  const caseStudies = siteData?.caseStudies;

  if (!caseStudies) {
    return null;
  }

  return (
    <section
      id="case-studies"
      className="
        relative
        overflow-hidden
        bg-[#F8FAFC]
        px-5
        py-20

        sm:px-8
        sm:py-24

        lg:px-10
        lg:py-32
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-200/30
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-violet-200/30
          blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        <SectionTitle
          eyebrow={caseStudies.eyebrow}
          title={caseStudies.heading}
          highlight={caseStudies.highlight}
          description={caseStudies.description}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="mt-14 space-y-7"
        >
          {caseStudies.items?.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.slug}
              caseStudy={caseStudy}
              index={index}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;