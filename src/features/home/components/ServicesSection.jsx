import Container from "../../../components/common/Container";
import SectionTitle from "../../../components/common/SectionTitle";
import Reveal from "../../../components/common/Reveal";

const ServicesSection = ({
  data,
}) => {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map(
            ({
              title,
              description,
              icon: Icon,
            }, index) => (
              <Reveal
                key={title}
                delay={index * 0.05}
              >
                <article className="group h-full rounded-[26px] border border-pink-100 bg-gradient-to-br from-white via-white to-pink-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-fuchsia-100 text-pink-700 transition-all duration-300 group-hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-fuchsia-600 group-hover:text-white">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-6 text-lg font-black text-slate-950">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {description}
                  </p>
                </article>
              </Reveal>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;