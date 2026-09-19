export const UI = {
  button: {
    base:
      "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 active:scale-[0.98]",

    variants: {
      primary:
        "bg-gradient-to-r from-[#9d174d] via-[#be185d] to-[#c026d3] text-white shadow-[0_12px_35px_rgba(190,24,93,.20)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(190,24,93,.28)]",

      secondary:
        "border border-pink-200 bg-white/80 text-slate-800 shadow-sm hover:-translate-y-0.5 hover:border-pink-300 hover:bg-pink-50",

      dark:
        "bg-[#240711] text-white shadow-lg hover:-translate-y-0.5 hover:bg-[#3c081f]",

      ghost:
        "text-slate-700 hover:bg-pink-50 hover:text-pink-700",
    },

    sizes: {
      sm: "min-h-10 px-4 py-2 text-xs",
      md: "min-h-11 px-5 py-2.5 text-sm",
      lg: "min-h-12 px-6 py-3 text-sm",
    },
  },

  card: {
    premium:
      "rounded-[26px] border border-pink-100 bg-white shadow-[0_18px_60px_rgba(95,18,57,.06)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-[0_22px_70px_rgba(95,18,57,.10)]",

    soft:
      "rounded-[26px] border border-pink-100 bg-gradient-to-br from-white via-white to-pink-50/60",
  },
};