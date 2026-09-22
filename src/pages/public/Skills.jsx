import PageTransition from "../../components/common/PageTransition";

import SkillsHero from "../../components/skill/SkillsHero";
import AllSkillsSection from "../../components/skill/AllSkillsSection";
import CapabilitiesSection from "../../components/skill/CapabilitiesSection";
import LearningSection from "../../components/skill/LearningSection";
import SkillsCTA from "../../components/skill/SkillsCTA";

const Skills = () => {
    return (
        <PageTransition>
            <main>
                <SkillsHero />

                <AllSkillsSection />

                <CapabilitiesSection />

                <LearningSection />

                <SkillsCTA />
            </main>
        </PageTransition>
    );
};

export default Skills;