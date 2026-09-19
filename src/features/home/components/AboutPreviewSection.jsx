import {
  FaArrowRight,
  FaCheck,
  FaCode,
} from "react-icons/fa";

import Container from "../../../components/common/Container";
import Button from "../../../components/common/Button";
import Reveal from "../../../components/common/Reveal";
import OptimizedImage from "../../../components/common/OptimizedImage";

const AboutPreviewSection = ({
  data,
}) => {
  if (!data) {
    return null;
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">

      {/* Background decorative glow */}
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-pink-200/20 blur-[110px]" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-fuchsia-200/20 blur-[110px]" />

      <Container className="relative z-10">

        <div className="relative overflow-hidden rounded-[36px] border border-pink-100 bg-gradient-to-br from-[#fffafd] via-white to-[#fff1f7] shadow-[0_30px_100px_rgba(95,18,57,.08)]">

          {/* Small decorative gradient */}
          <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-pink-200/20 blur-[90px]" />

          <div className="grid items-center gap-12 p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">

            {/* =========================
                IMAGE SIDE
            ========================== */}
            <Reveal
              variant="slideLeft"
              className="relative mx-auto w-full max-w-[430px]"
            >
              <div className="relative">

                {/* Glow */}
                <div className="absolute inset-8 rounded-[36px] bg-gradient-to-br from-pink-300/30 via-fuchsia-200/20 to-purple-200/20 blur-[70px]" />

                {/* Main image card */}
                <div className="relative overflow-hidden rounded-[30px] border border-white bg-white/70 p-2 shadow-[0_25px_80px_rgba(95,18,57,.12)] backdrop-blur-xl">

                  <div className="overflow-hidden rounded-[24px] bg-pink-50">
                    <OptimizedImage
                      src={data.image}
                      alt={data.imageAlt}
                      width={650}
                      height={760}
                      className="aspect-[4/4.7] w-full"
                    />
                  </div>

                </div>

                {/* Experience badge */}
                <div className="absolute -bottom-5 -right-3 rounded-2xl border border-pink-100 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-right-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-100 to-fuchsia-100 text-pink-700">
                      <FaCode size={16} />
                    </div>

                    <div>
                      <p className="text-sm font-black text-slate-950">
                        {data.highlight.value}
                      </p>

                      <p className="mt-0.5 text-[10px] font-medium text-slate-500">
                        {data.highlight.label}
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            </Reveal>

            {/* =========================
                CONTENT SIDE
            ========================== */}
            <div>

              <Reveal>
                <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-pink-700">
                  {data.eyebrow}
                </span>
              </Reveal>

              <Reveal delay={0.05}>
                <h2 className="mt-5 max-w-xl text-3xl font-black leading-[1.15] tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[46px]">
                  {data.titleBefore}

                  <span className="brand-text mx-2">
                    {data.titleAccent}
                  </span>

                  {data.titleAfter}
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-sm leading-8 text-slate-600 sm:text-base">
                  {data.description}
                </p>
              </Reveal>

              {/* Features */}
              <Reveal delay={0.15}>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">

                  {data.points.map((item) => (
                    <div
                      key={item}
                      className="group flex items-center gap-3 rounded-xl border border-pink-100 bg-white/70 px-4 py-3 transition-all duration-300 hover:border-pink-200 hover:bg-pink-50"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-pink-100 text-pink-700">
                        <FaCheck size={10} />
                      </div>

                      <span className="text-sm font-semibold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>
              </Reveal>

              {/* CTA */}
              <Reveal delay={0.2}>
                <div className="mt-8">
                  <Button
                    to={data.cta.path}
                    variant="secondary"
                    size="lg"
                    iconRight={FaArrowRight}
                  >
                    {data.cta.label}
                  </Button>
                </div>
              </Reveal>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default AboutPreviewSection;