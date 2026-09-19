import Container from "../../../components/common/Container";
import Reveal from "../../../components/common/Reveal";

const WhyWorkWithMeSection = ({
  data,
}) => {
  return (
    <section className="py-16">
      <Container>
        <Reveal>
          <div className="grid overflow-hidden rounded-[28px] border border-pink-100 bg-white sm:grid-cols-2 lg:grid-cols-4">
            {data.items.map(
              ({
                title,
                icon: Icon,
              }) => (
                <div
                  key={title}
                  className="flex items-center gap-3 border-b border-pink-100 p-6 last:border-b-0 sm:even:border-l lg:border-b-0 lg:border-l lg:first:border-l-0"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
                    <Icon size={19} />
                  </div>

                  <span className="text-sm font-semibold text-slate-800">
                    {title}
                  </span>
                </div>
              )
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default WhyWorkWithMeSection;