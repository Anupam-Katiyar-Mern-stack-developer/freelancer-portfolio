import Container from "../../../components/common/Container";
import Reveal from "../../../components/common/Reveal";
import SectionTitle from "../../../components/common/SectionTitle";

const ProcessSection = ({
  data,
}) => {
  if (!data) {
    return null;
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-pink-200/20 blur-[100px]" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-fuchsia-200/20 blur-[100px]" />

      <Container className="relative z-10">
        <SectionTitle
          eyebrow={data.eyebrow}
          title={data.title}
        />

        <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {data.items?.map(
            (item, index) => (
              <Reveal
                key={item.number}
                delay={index * 0.05}
              >
                <article className="group relative h-full overflow-hidden rounded-[26px] border border-pink-100 bg-white p-6 shadow-[0_15px_50px_rgba(95,18,57,.05)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-[0_22px_65px_rgba(95,18,57,.10)]">

                  <div className="absolute right-4 top-3 text-[58px] font-black leading-none text-pink-50 transition-all duration-300 group-hover:text-pink-100">
                    {item.number}
                  </div>

                  <div className="relative z-10">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-pink-100 to-fuchsia-100 text-sm font-black text-pink-700">
                      {item.number}
                    </div>

                    <h3 className="mt-6 text-lg font-black text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
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

export default ProcessSection;