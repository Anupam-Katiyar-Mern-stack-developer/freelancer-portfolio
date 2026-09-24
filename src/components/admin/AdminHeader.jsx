import { Link } from "react-router";

import {
  FiBell,
  FiExternalLink,
  FiMenu,
  FiUser,
} from "react-icons/fi";

const AdminHeader = ({
  onMenuClick,
}) => {
  return (
    <header
      className="
        sticky
        top-0
        z-30
        flex
        h-[76px]
        items-center
        justify-between
        border-b
        border-slate-200
        bg-white/90
        px-4
        backdrop-blur-xl

        sm:px-6
        lg:px-8
      "
    >
      {/* ============================= */}
      {/* LEFT SIDE */}
      {/* ============================= */}

      <div className="flex items-center gap-3">

        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open admin sidebar"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-white
            text-lg
            text-slate-600
            transition
            duration-200

            hover:border-slate-300
            hover:bg-slate-50
            hover:text-slate-950

            lg:hidden
          "
        >
          <FiMenu />
        </button>


        {/* HEADER TEXT */}

        <div>
          <h2
            className="
              font-['Space_Grotesk']
              text-base
              font-bold
              tracking-[-0.02em]
              text-slate-950

              sm:text-lg
            "
          >
            Admin Dashboard
          </h2>

          <p
            className="
              hidden
              font-[Manrope]
              text-xs
              text-slate-400

              sm:block
            "
          >
            Manage your portfolio content
          </p>
        </div>

      </div>


      {/* ============================= */}
      {/* RIGHT SIDE */}
      {/* ============================= */}

      <div className="flex items-center gap-2">

        {/* VIEW WEBSITE */}

        <Link
          to="/"
          target="_blank"
          rel="noreferrer"
          className="
            hidden
            h-10
            items-center
            gap-2
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            font-[Manrope]
            text-xs
            font-bold
            text-slate-600
            transition
            duration-200

            hover:border-blue-200
            hover:bg-blue-50
            hover:text-blue-600

            sm:inline-flex
          "
        >
          View Website

          <FiExternalLink />
        </Link>


        {/* NOTIFICATION */}

        <button
          type="button"
          aria-label="Notifications"
          className="
            relative
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-white
            text-slate-500
            transition
            duration-200

            hover:border-slate-300
            hover:bg-slate-50
            hover:text-slate-950
          "
        >
          <FiBell />

          {/* Temporary notification dot */}

          <span
            className="
              absolute
              right-[8px]
              top-[8px]
              h-2
              w-2
              rounded-full
              border-2
              border-white
              bg-blue-600
            "
          />
        </button>


        {/* ADMIN PROFILE */}

        <button
          type="button"
          className="
            flex
            h-10
            items-center
            gap-2
            rounded-xl
            border
            border-slate-200
            bg-white
            px-2
            transition
            duration-200

            hover:border-slate-300
            hover:bg-slate-50

            sm:px-3
          "
        >
          {/* AVATAR */}

          <span
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-lg
              bg-slate-950
              text-xs
              text-white
            "
          >
            <FiUser />
          </span>


          {/* ADMIN INFO */}

          <div
            className="
              hidden
              text-left

              md:block
            "
          >
            <p
              className="
                font-[Manrope]
                text-xs
                font-bold
                leading-none
                text-slate-900
              "
            >
              Admin
            </p>

            <p
              className="
                mt-1
                font-[Manrope]
                text-[9px]
                leading-none
                text-slate-400
              "
            >
              Administrator
            </p>
          </div>

        </button>

      </div>
    </header>
  );
};

export default AdminHeader;