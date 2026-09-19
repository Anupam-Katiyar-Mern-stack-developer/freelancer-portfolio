import Container from "../components/common/Container";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import OptimizedImage from "../components/common/OptimizedImage";
import SectionTitle from "../components/common/SectionTitle";

import { aboutData } from "../features/about/data/about.data";

const About = () => {
  return (
    <>
      <PageHero {...aboutData.hero} />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal variant="slideLeft">
              <div className="overflow-hidden rounded-[32px] border border-pink-100 bg-white p-3 shadow-[0_25px_80px_rgba(95,18,57,.08)]">
                <OptimizedImage
                  src={aboutData.story.image}
                  alt="Anupam Full Stack Developer"
                  width={700}
                  height={780}
                  className="aspect-[4/4.5] w-full rounded-[25px]"
                />
              </div>
            </Reveal>

            <Reveal variant="slideRight">
              <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">
                {aboutData.story.title}
              </h2>

              <div className="mt-6 space-y-5">
                {aboutData.story.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-8 text-slate-600 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <SectionTitle
            eyebrow="My Approach"
            title="The principles behind my work."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutData.values.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.05}
              >
                <article className="h-full rounded-[26px] border border-pink-100 bg-white p-6 shadow-[0_15px_50px_rgba(95,18,57,.05)]">
                  <h3 className="text-lg font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;