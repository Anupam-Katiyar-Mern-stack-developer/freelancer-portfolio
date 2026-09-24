const AdminStatusBadge = ({
  value,
  label,
}) => {
  const normalizedValue = String(
    value ?? ""
  )
    .trim()
    .toLowerCase();

  const statusStyles = {
    active:
      "border-emerald-200 bg-emerald-50 text-emerald-700",

    approved:
      "border-emerald-200 bg-emerald-50 text-emerald-700",

    published:
      "border-emerald-200 bg-emerald-50 text-emerald-700",

    visible:
      "border-emerald-200 bg-emerald-50 text-emerald-700",

    true:
      "border-emerald-200 bg-emerald-50 text-emerald-700",

    converted:
      "border-emerald-200 bg-emerald-50 text-emerald-700",

    pending:
      "border-amber-200 bg-amber-50 text-amber-700",

    draft:
      "border-amber-200 bg-amber-50 text-amber-700",

    new:
      "border-blue-200 bg-blue-50 text-blue-700",

    contacted:
      "border-blue-200 bg-blue-50 text-blue-700",

    qualified:
      "border-violet-200 bg-violet-50 text-violet-700",

    inactive:
      "border-slate-200 bg-slate-100 text-slate-600",

    hidden:
      "border-slate-200 bg-slate-100 text-slate-600",

    false:
      "border-slate-200 bg-slate-100 text-slate-600",

    closed:
      "border-slate-200 bg-slate-100 text-slate-600",

    rejected:
      "border-red-200 bg-red-50 text-red-600",
  };

  const style =
    statusStyles[normalizedValue] ||
    "border-slate-200 bg-slate-50 text-slate-600";

  const displayLabel =
    label ||
    (typeof value === "boolean"
      ? value
        ? "Active"
        : "Inactive"
      : String(value || "Unknown"));

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        whitespace-nowrap
        rounded-full
        border
        px-2.5
        py-1
        font-[Manrope]
        text-[10px]
        font-bold
        capitalize
        ${style}
      `}
    >
      <span
        className="
          h-1.5
          w-1.5
          rounded-full
          bg-current
        "
      />

      {displayLabel}
    </span>
  );
};

export default AdminStatusBadge;