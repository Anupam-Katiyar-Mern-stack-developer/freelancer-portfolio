import PageTransition from "../../components/common/PageTransition";
import PageBanner from "../../components/common/PageBanner";
import AllSkillsSection from "../../components/skill/AllSkillsSection";
import CapabilitiesSection from "../../components/skill/CapabilitiesSection";
import LearningSection from "../../components/skill/LearningSection";

import CommonCTA from "../../components/common/CommonCTA";

const Skills = () => {
    return (
        <PageTransition>
            <main>
                <PageBanner
                    title="My Skills"
                    description="Explore the technologies and tools I use to build modern web applications."
                />

                <AllSkillsSection />

                <CapabilitiesSection />

                <LearningSection />

                <CommonCTA />
            </main>
        </PageTransition>
    );
};

export default Skills;