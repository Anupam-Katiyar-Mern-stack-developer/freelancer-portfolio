import {
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router";

import Container from "../../../components/common/Container";
import SectionTitle from "../../../components/common/SectionTitle";
import OptimizedImage from "../../../components/common/OptimizedImage";
import Reveal from "../../../components/common/Reveal";

const FeaturedProjectsSection = ({
  data,
}) => {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {data.items.map(
            (project, index) => (
              <Reveal
                key={project.id}
                delay={index * 0.05}
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="group block overflow-hidden rounded-[30px] border border-pink-100 bg-white p-3 shadow-[0_18px_60px_rgba(95,18,57,.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_75px_rgba(95,18,57,.12)]"
                >
                  <div className="relative overflow-hidden rounded-[24px]">
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      width={900}
                      height={560}
                      className="aspect-[16/10] w-full transition-transform duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#2b0718]/45 via-transparent to-transparent opacity-70" />

                    <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-pink-800 backdrop-blur-xl">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                          {project.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pink-50 text-pink-700 transition-all duration-300 group-hover:bg-pink-600 group-hover:text-white">
                        <FaArrowRight size={11} />
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map(
                        (item) => (
                          <span
                            key={item}
                            className="rounded-lg border border-pink-100 bg-pink-50/70 px-2.5 py-1 text-[11px] font-semibold text-pink-800"
                          >
                            {item}
                          </span>
                        )
                      )}
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

export default FeaturedProjectsSection;