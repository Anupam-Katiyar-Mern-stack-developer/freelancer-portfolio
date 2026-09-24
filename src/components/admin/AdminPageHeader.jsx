import { FiPlus } from "react-icons/fi";

const AdminPageHeader = ({
  eyebrow = "Content Management",
  title,
  description,
  actionLabel,
  onAction,
  ActionIcon = FiPlus,
}) => {
  return (
    <div
      className="
        flex
        flex-col
        gap-5

        sm:flex-row
        sm:items-end
        sm:justify-between
      "
    >
      {/* LEFT CONTENT */}

      <div className="max-w-2xl">
        {eyebrow && (
          <p
            className="
              font-[Manrope]
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-blue-600
            "
          >
            {eyebrow}
          </p>
        )}

        <h1
          className="
            mt-2
            font-['Space_Grotesk']
            text-2xl
            font-bold
            tracking-[-0.04em]
            text-slate-950

            sm:text-3xl
          "
        >
          {title}
        </h1>

        {description && (
          <p
            className="
              mt-2
              max-w-xl
              font-[Manrope]
              text-sm
              leading-6
              text-slate-500
            "
          >
            {description}
          </p>
        )}
      </div>


      {/* ACTION BUTTON */}

      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="
            inline-flex
            w-fit
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-slate-950
            px-5
            py-3
            font-[Manrope]
            text-xs
            font-bold
            text-white
            transition
            duration-300

            hover:-translate-y-0.5
            hover:bg-blue-600
            hover:shadow-[0_12px_30px_rgba(37,99,235,0.18)]
          "
        >
          <ActionIcon className="text-base" />

          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default AdminPageHeader;