import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

import Container from "../../../components/common/Container";
import Reveal from "../../../components/common/Reveal";
import SectionTitle from "../../../components/common/SectionTitle";
import OptimizedImage from "../../../components/common/OptimizedImage";

const CaseStudiesSection = ({
  data,
}) => {
  if (!data) {
    return null;
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-pink-200/20 blur-[110px]" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-fuchsia-200/20 blur-[110px]" />

      <Container className="relative z-10">
        <SectionTitle
          eyebrow={data.eyebrow}
          title={data.title}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {data.items?.map(
            (study, index) => (
              <Reveal
                key={study.slug}
                delay={index * 0.06}
              >
                <Link
                  to={`/case-studies/${study.slug}`}
                  className="group block overflow-hidden rounded-[28px] border border-pink-100 bg-white p-3 shadow-[0_18px_60px_rgba(95,18,57,.05)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-[0_25px_75px_rgba(95,18,57,.10)]"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-[22px]">
                    <OptimizedImage
                      src={study.image}
                      alt={study.title}
                      width={800}
                      height={500}
                      className="aspect-[16/9] w-full transition-transform duration-700 group-hover:scale-[1.05]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#2c0718]/55 via-transparent to-transparent" />

                    <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-pink-800 backdrop-blur-xl">
                      {study.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-pink-600">
                      Case Study
                    </span>

                    <h3 className="mt-3 text-xl font-black leading-8 tracking-tight text-slate-950 sm:text-2xl">
                      {study.title}
                    </h3>

                    {study.description && (
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {study.description}
                      </p>
                    )}

                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-pink-700">
                      Read Case Study

                      <FaArrowRight
                        size={10}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              </Reveal>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default CaseStudiesSection;