import {
  FiBriefcase,
  FiEdit3,
  FiFolder,
  FiMessageSquare,
} from "react-icons/fi";

const Dashboard = () => {
  const stats = [
    {
      label: "Projects",
      value: "0",
      icon: FiFolder,
    },
    {
      label: "Services",
      value: "0",
      icon: FiBriefcase,
    },
    {
      label: "Blogs",
      value: "0",
      icon: FiEdit3,
    },
    {
      label: "Pending Reviews",
      value: "0",
      icon: FiMessageSquare,
    },
  ];

  return (
    <div>
      {/* PAGE INTRO */}

      <div>
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
          Overview
        </p>

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
          Welcome back.
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
          Manage and monitor your portfolio content from one place.
        </p>
      </div>


      {/* STATS */}

      <div
        className="
          mt-8
          grid
          grid-cols-1
          gap-4

          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                rounded-[22px]
                border
                border-slate-200
                bg-white
                p-5
                shadow-[0_10px_35px_rgba(15,23,42,0.03)]
              "
            >
              <div className="flex items-center justify-between gap-4">

                <div>
                  <p
                    className="
                      font-[Manrope]
                      text-xs
                      font-semibold
                      text-slate-400
                    "
                  >
                    {item.label}
                  </p>

                  <p
                    className="
                      mt-2
                      font-['Space_Grotesk']
                      text-3xl
                      font-bold
                      text-slate-950
                    "
                  >
                    {item.value}
                  </p>
                </div>


                <span
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-lg
                    text-blue-600
                  "
                >
                  <Icon />
                </span>

              </div>
            </div>
          );
        })}
      </div>


      {/* TEMPORARY CONTENT */}

      <div
        className="
          mt-6
          rounded-[24px]
          border
          border-slate-200
          bg-white
          p-6
        "
      >
        <h2
          className="
            font-['Space_Grotesk']
            text-lg
            font-bold
            text-slate-950
          "
        >
          Admin Panel Setup
        </h2>

        <p
          className="
            mt-2
            max-w-2xl
            font-[Manrope]
            text-sm
            leading-7
            text-slate-500
          "
        >
          Dashboard data will become dynamic after the backend and
          admin APIs are connected.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;