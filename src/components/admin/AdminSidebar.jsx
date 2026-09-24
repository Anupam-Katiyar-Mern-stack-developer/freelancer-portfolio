import { NavLink } from "react-router";
import {
  FiCode,
  FiX,
} from "react-icons/fi";

import { adminNavigation } from "../../configs/admin/adminNavigation";

const AdminSidebar = ({
  isOpen,
  onClose,
}) => {
  return (
    <>
      {/* ============================= */}
      {/* MOBILE OVERLAY */}
      {/* ============================= */}

      <button
        type="button"
        onClick={onClose}
        aria-label="Close admin sidebar overlay"
        className={`
          fixed
          inset-0
          z-40
          bg-slate-950/40
          backdrop-blur-sm
          transition-all
          duration-300

          lg:hidden

          ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />


      {/* ============================= */}
      {/* SIDEBAR */}
      {/* ============================= */}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          flex
          h-dvh
          w-[280px]
          flex-col
          border-r
          border-slate-200
          bg-white
          shadow-[10px_0_40px_rgba(15,23,42,0.04)]
          transition-transform
          duration-300
          ease-out

          lg:translate-x-0

          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* ============================= */}
        {/* LOGO / BRAND */}
        {/* ============================= */}

        <div
          className="
            flex
            h-[76px]
            shrink-0
            items-center
            justify-between
            border-b
            border-slate-100
            px-5
          "
        >
          <NavLink
            to="/admin"
            onClick={onClose}
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-slate-950
                text-lg
                text-white
              "
            >
              <FiCode />
            </span>

            <div>
              <p
                className="
                  font-['Space_Grotesk']
                  text-lg
                  font-bold
                  tracking-[-0.03em]
                  text-slate-950
                "
              >
                Portfolio
              </p>

              <p
                className="
                  font-[Manrope]
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-blue-600
                "
              >
                Admin Panel
              </p>
            </div>
          </NavLink>


          {/* MOBILE CLOSE */}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              text-slate-500
              transition
              duration-200

              hover:bg-slate-100
              hover:text-slate-950

              lg:hidden
            "
          >
            <FiX />
          </button>
        </div>


        {/* ============================= */}
        {/* NAVIGATION */}
        {/* ============================= */}

        <nav
          className="
            flex-1
            overflow-y-auto
            px-3
            py-5

            [scrollbar-width:thin]
          "
        >
          <div className="space-y-7">

            {adminNavigation.map(
              (section) => (
                <div key={section.group}>

                  {/* GROUP TITLE */}

                  <p
                    className="
                      mb-2
                      px-3
                      font-[Manrope]
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-slate-400
                    "
                  >
                    {section.group}
                  </p>


                  {/* GROUP ITEMS */}

                  <div className="space-y-1">

                    {section.items.map(
                      (item) => {
                        const Icon =
                          item.icon;

                        return (
                          <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.end}
                            onClick={onClose}
                            className={({
                              isActive,
                            }) => `
                              group
                              flex
                              items-center
                              gap-3
                              rounded-xl
                              px-3
                              py-3
                              font-[Manrope]
                              text-sm
                              font-semibold
                              transition
                              duration-200

                              ${
                                isActive
                                  ? `
                                    bg-slate-950
                                    text-white
                                    shadow-[0_8px_24px_rgba(15,23,42,0.12)]
                                  `
                                  : `
                                    text-slate-500
                                    hover:bg-slate-50
                                    hover:text-slate-950
                                  `
                              }
                            `}
                          >
                            {({
                              isActive,
                            }) => (
                              <>
                                {/* ICON */}

                                <span
                                  className={`
                                    flex
                                    h-8
                                    w-8
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-lg
                                    text-[16px]
                                    transition
                                    duration-200

                                    ${
                                      isActive
                                        ? `
                                          bg-white/10
                                          text-blue-200
                                        `
                                        : `
                                          bg-slate-50
                                          text-slate-400

                                          group-hover:bg-white
                                          group-hover:text-blue-600
                                        `
                                    }
                                  `}
                                >
                                  <Icon />
                                </span>


                                {/* LABEL */}

                                <span>
                                  {item.label}
                                </span>
                              </>
                            )}
                          </NavLink>
                        );
                      }
                    )}

                  </div>
                </div>
              )
            )}

          </div>
        </nav>


        {/* ============================= */}
        {/* BOTTOM INFO CARD */}
        {/* ============================= */}

        <div
          className="
            shrink-0
            border-t
            border-slate-100
            p-4
          "
        >
          <div
            className="
              rounded-2xl
              border
              border-blue-100
              bg-blue-50
              p-4
            "
          >
            <p
              className="
                font-['Space_Grotesk']
                text-sm
                font-bold
                text-slate-950
              "
            >
              Portfolio Manager
            </p>

            <p
              className="
                mt-1
                font-[Manrope]
                text-xs
                leading-5
                text-slate-500
              "
            >
              Manage your website content
              from one place.
            </p>
          </div>
        </div>

      </aside>
    </>
  );
};

export default AdminSidebar;