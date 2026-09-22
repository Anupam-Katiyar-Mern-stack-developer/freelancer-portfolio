import { motion } from "motion/react";

import useSiteData from "../../hooks/useSiteData";
import SectionTitle from "../common/SectionTitle";

const JourneySection = () => {
    const { siteData } = useSiteData();

    const journey = siteData?.aboutPage?.journey;

    if (!journey) {
        return null;
    }

    return (
        <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">

                <SectionTitle
                    eyebrow={journey.eyebrow}
                    title={journey.heading}
                    highlight={journey.highlight}
                    align="left"
                />

                <div className="space-y-5">

                    {journey.paragraphs.map((paragraph, index) => (
                        <motion.p
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: index * 0.1,
                            }}
                            className="font-[Manrope] text-base leading-8 text-slate-500"
                        >
                            {paragraph}
                        </motion.p>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default JourneySection;