const Login = () => {
  return (
    <div
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-[#F8FAFC]
        px-5
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-[28px]
          border
          border-slate-200
          bg-white
          p-7
          shadow-[0_20px_60px_rgba(15,23,42,0.06)]
        "
      >
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
          Portfolio Admin
        </p>

        <h1
          className="
            mt-3
            font-['Space_Grotesk']
            text-3xl
            font-bold
            tracking-[-0.04em]
            text-slate-950
          "
        >
          Admin Login
        </h1>

        <p
          className="
            mt-2
            font-[Manrope]
            text-sm
            leading-6
            text-slate-500
          "
        >
          Authentication form will be connected when we build the
          admin auth module.
        </p>
      </div>
    </div>
  );
};

export default Login;