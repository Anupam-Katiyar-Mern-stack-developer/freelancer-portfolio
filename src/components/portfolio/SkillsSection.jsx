import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";

import useSiteData from "../../hooks/useSiteData";

import SectionTitle from "../common/SectionTitle";
import SkillCard from "../skill/SkillCard";

const SkillsSection = () => {
  const { siteData } = useSiteData();

  const skills = siteData?.skills;

  if (!skills?.items?.length) {
    return null;
  }

  const previewSkills = skills.items.slice(0, 4);

  return (
    <section
      id="skills"
      className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          eyebrow={skills.eyebrow}
          title={skills.heading}
          highlight={skills.highlight}
          description={skills.description}
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {previewSkills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/skills"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-2xl
              bg-slate-950
              px-6
              py-3.5
              font-[Manrope]
              text-sm
              font-bold
              text-white
              transition
              duration-300

              hover:-translate-y-1
              hover:bg-blue-600
            "
          >
            Explore Skills

            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;