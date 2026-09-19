import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

import Container from "../../../components/common/Container";
import Reveal from "../../../components/common/Reveal";
import SectionTitle from "../../../components/common/SectionTitle";
import OptimizedImage from "../../../components/common/OptimizedImage";

const TestimonialsSection = ({
  data,
}) => {
  if (!data) {
    return null;
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-pink-200/20 blur-[110px]" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-fuchsia-200/20 blur-[110px]" />

      <Container className="relative z-10">
        <SectionTitle
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {data.items?.map(
            (testimonial, index) => (
              <Reveal
                key={`${testimonial.name}-${index}`}
                delay={index * 0.06}
              >
                <article className="group relative h-full overflow-hidden rounded-[28px] border border-pink-100 bg-white p-6 shadow-[0_18px_60px_rgba(95,18,57,.05)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-[0_25px_75px_rgba(95,18,57,.10)] sm:p-7">

                  {/* Quote Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-fuchsia-100 text-pink-600">
                    <FaQuoteLeft size={18} />
                  </div>

                  {/* Stars */}
                  <div className="mt-5 flex gap-1 text-amber-400">
                    {Array.from({
                      length:
                        testimonial.rating || 5,
                    }).map((_, starIndex) => (
                      <FaStar
                        key={starIndex}
                        size={14}
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-[15px]">
                    “{testimonial.quote}”
                  </p>

                  {/* Client */}
                  <div className="mt-7 flex items-center gap-4 border-t border-pink-100 pt-5">

                    {testimonial.image && (
                      <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-pink-100 bg-pink-50">
                        <OptimizedImage
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="h-full w-full"
                        />
                      </div>
                    )}

                    <div>
                      <p className="font-bold text-slate-950">
                        {testimonial.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {testimonial.role}
                      </p>
                    </div>

                  </div>

                </article>
              </Reveal>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;