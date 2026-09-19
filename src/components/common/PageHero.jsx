import Container from "./Container";
import Reveal from "./Reveal";

const PageHero = ({
    eyebrow,
    title,
    accent,
    description,
}) => {
    return (
        <section className="premium-grid relative overflow-hidden pb-16 pt-12 sm:pb-20 sm:pt-16">
            <div className="pointer-events-none absolute -left-28 top-0 h-80 w-80 rounded-full bg-pink-300/20 blur-[110px]" />

            <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-fuchsia-300/20 blur-[110px]" />

            <Container className="relative z-10">
                <Reveal>
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-flex rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-pink-700 shadow-sm backdrop-blur-xl">
                            {eyebrow}
                        </span>

                        <h1 className="mt-6 text-4xl font-black leading-tight tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
                            {title}

                            {accent && (
                                <span className="brand-text ml-3">
                                    {accent}
                                </span>
                            )}
                        </h1>

                        {description && (
                            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
                                {description}
                            </p>
                        )}
                    </div>
                </Reveal>
            </Container>
        </section>
    );
};

export default PageHero;