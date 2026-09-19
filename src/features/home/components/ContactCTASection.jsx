import {
  FaArrowRight,
} from "react-icons/fa";

import Container from "../../../components/common/Container";
import Button from "../../../components/common/Button";
import Reveal from "../../../components/common/Reveal";

const ContactCTASection = ({
  data,
}) => {
  return (
    <section className="pb-24 pt-16">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#260712] via-[#5a0c31] to-[#86144c] px-6 py-14 text-center shadow-[0_30px_100px_rgba(90,12,49,.20)] sm:px-10 sm:py-20">

            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-pink-400/20 blur-[100px]" />

            <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-fuchsia-400/20 blur-[110px]" />

            <div className="relative mx-auto max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-pink-300">
                {data.eyebrow}
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                {data.title}
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-pink-100/65 sm:text-base">
                {data.description}
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  to={data.primary.path}
                  variant="secondary"
                  size="lg"
                  iconRight={FaArrowRight}
                >
                  {data.primary.label}
                </Button>

                <Button
                  to={data.secondary.path}
                  variant="ghost"
                  size="lg"
                  className="text-pink-100 hover:bg-white/10 hover:text-white"
                >
                  {data.secondary.label}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default ContactCTASection;