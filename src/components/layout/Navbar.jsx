import { AnimatePresence, motion } from "motion/react";
import {
  FiArrowUpRight,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { NavLink } from "react-router";

import useNavbar from "../../hooks/useNavbar";
import useSiteData from "../../hooks/useSiteData";

const Navbar = () => {
  const { siteData } = useSiteData();

  const {
    isOpen,
    toggleMenu,
    closeMenu,
  } = useNavbar();

  if (!siteData) {
    return null;
  }

  const { settings, navigation } = siteData;

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-[0_8px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:px-6">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white shadow-lg">
            {settings.developerName
              ?.split(" ")
              .map((word) => word[0])
              .slice(0, 2)
              .join("")}
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-bold tracking-tight text-slate-950">
              {settings.developerName}
            </p>

            <p className="text-[11px] font-medium text-slate-500">
              {settings.professionalTitle}
            </p>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {navigation?.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) => `
        relative
        rounded-xl
        px-4
        py-2
        font-[Manrope]
        text-sm
        font-semibold
        transition
        duration-300

        ${isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                }
      `}
            >
              {({ isActive }) => (
                <>
                  {item.label}

                  {isActive && (
                    <span
                      className="
                absolute
                -bottom-1
                left-1/2
                h-1
                w-1
                -translate-x-1/2
                rounded-full
                bg-blue-600
              "
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <NavLink
            to={"/contact"}
            className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg"
          >
            Hire Me

            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-xl text-slate-900 lg:hidden"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -15,
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
            }}
            className="mx-auto mt-2 max-w-7xl rounded-2xl border border-slate-200 bg-white p-3 shadow-xl lg:hidden"
          >
            {navigation?.map((item) => (
              <a
                key={item.label}
                href={item.path}
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
            >
              Hire Me

              <FiArrowUpRight />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;