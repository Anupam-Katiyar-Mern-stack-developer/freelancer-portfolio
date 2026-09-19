import Reveal from "./Reveal";

const SectionTitle = ({
  eyebrow,
  title,
  description,
  align = "center",
}) => {
  const isLeft = align === "left";

  return (
    <Reveal>
      <div
        className={`flex flex-col ${
          isLeft
            ? "items-start text-left"
            : "mx-auto items-center text-center"
        } max-w-2xl`}
      >
        {eyebrow && (
          <span className="rounded-full border border-pink-200 bg-pink-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-pink-700">
            {eyebrow}
          </span>
        )}

        <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-[44px]">
          {title}
        </h2>

        {description && (
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
};

export default SectionTitle;