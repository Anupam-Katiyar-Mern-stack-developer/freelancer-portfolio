import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  FaArrowRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import {
  Link,
  NavLink,
} from "react-router";

import Container from "../common/Container";
import Button from "../common/Button";

import { SITE } from "../../config/site.config";
import useNavbar from "../../hooks/useNavbar";

const Navbar = () => {
  const {
    isOpen,
    isScrolled,
    toggleMenu,
    closeMenu,
  } = useNavbar();

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-2.5" : "py-4"
        }`}
      >
        <Container>
          <motion.div
            initial={{
              opacity: 0,
              y: -18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className={`relative flex h-[68px] items-center justify-between rounded-[22px] border px-4 backdrop-blur-2xl transition-all duration-500 sm:px-6 ${
              isScrolled
                ? "border-pink-200/80 bg-white/90 shadow-[0_16px_55px_rgba(95,18,57,.10)]"
                : "border-white/80 bg-white/70 shadow-[0_10px_40px_rgba(95,18,57,.05)]"
            }`}
          >
            <Link
              to="/"
              onClick={closeMenu}
              className="text-[22px] font-black tracking-[-0.055em] text-slate-950"
            >
              {SITE.brand.name}
              <span className="text-pink-600">
                {SITE.brand.suffix}
              </span>
            </Link>

            <nav className="hidden items-center rounded-2xl border border-pink-100 bg-white/70 p-1 lg:flex">
              {SITE.navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="relative"
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.div
                          layoutId="active-navigation"
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-50 to-fuchsia-50"
                        />
                      )}

                      <span
                        className={`relative z-10 block px-3.5 py-2 text-[13px] font-semibold transition ${
                          isActive
                            ? "text-pink-700"
                            : "text-slate-600 hover:text-pink-700"
                        }`}
                      >
                        {item.label}
                      </span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button
                to={SITE.navbarCta.path}
                iconRight={FaArrowRight}
                className="hidden sm:inline-flex"
              >
                {SITE.navbarCta.label}
              </Button>

              <button
                type="button"
                onClick={toggleMenu}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-pink-200 bg-pink-50 text-pink-700 lg:hidden"
              >
                {isOpen ? (
                  <FaTimes size={14} />
                ) : (
                  <FaBars size={14} />
                )}
              </button>
            </div>
          </motion.div>
        </Container>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#240711]/30 backdrop-blur-md lg:hidden"
            onClick={closeMenu}
          >
            <Container>
              <motion.div
                initial={{
                  opacity: 0,
                  y: -20,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                onClick={(event) =>
                  event.stopPropagation()
                }
                className="mt-[92px] rounded-[26px] border border-pink-100 bg-white/95 p-3 shadow-2xl"
              >
                {SITE.navLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3.5 text-sm font-semibold ${
                        isActive
                          ? "bg-pink-100 text-pink-700"
                          : "text-slate-700 hover:bg-pink-50"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                <Button
                  to={SITE.navbarCta.path}
                  iconRight={FaArrowRight}
                  className="mt-3 w-full"
                  onClick={closeMenu}
                >
                  {SITE.navbarCta.label}
                </Button>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-[96px]" />
    </>
  );
};

export default Navbar;