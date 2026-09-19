import Container from "../../../components/common/Container";
import Reveal from "../../../components/common/Reveal";
import SectionTitle from "../../../components/common/SectionTitle";

const TechStackSection = ({
  data,
}) => {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow={data.eyebrow}
          title={data.title}
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {data.items.map(
            ({
              name,
              icon: Icon,
            }, index) => (
              <Reveal
                key={name}
                delay={index * 0.04}
              >
                <div className="group flex min-h-28 flex-col items-center justify-center rounded-2xl border border-pink-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-lg">
                  <Icon
                    size={25}
                    className="text-pink-600 transition-transform duration-300 group-hover:scale-110"
                  />

                  <span className="mt-3 text-xs font-bold text-slate-700">
                    {name}
                  </span>
                </div>
              </Reveal>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default TechStackSection;