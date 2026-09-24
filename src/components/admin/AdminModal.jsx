import { useEffect } from "react";
import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  FiX,
} from "react-icons/fi";

const AdminModal = ({
  open,
  title,
  description,
  children,
  onClose,
  size = "md",
  closeOnOverlay = true,
}) => {
  /* ============================== */
  /* MODAL WIDTH */
  /* ============================== */

  const modalSizes = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
  };

  const modalWidth =
    modalSizes[size] ||
    modalSizes.md;


  /* ============================== */
  /* ESCAPE + BODY SCROLL LOCK */
  /* ============================== */

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.body.style.overflow =
      "hidden";

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [
    open,
    onClose,
  ]);


  /* ============================== */
  /* OVERLAY CLICK */
  /* ============================== */

  const handleOverlayClick = () => {
    if (closeOnOverlay) {
      onClose?.();
    }
  };


  return (
    <AnimatePresence>

      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-end
            justify-center
            bg-slate-950/45
            p-0
            backdrop-blur-sm

            sm:items-center
            sm:p-5
          "
          onMouseDown={
            handleOverlayClick
          }
        >

          {/* ========================== */}
          {/* MODAL BOX */}
          {/* ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 25,
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="admin-modal-title"
            onMouseDown={(event) =>
              event.stopPropagation()
            }
            className={`
              flex
              max-h-[92dvh]
              w-full
              flex-col
              overflow-hidden
              rounded-t-[26px]
              border
              border-slate-200
              bg-white
              shadow-[0_30px_100px_rgba(15,23,42,0.20)]

              sm:rounded-[26px]

              ${modalWidth}
            `}
          >

            {/* ========================== */}
            {/* MODAL HEADER */}
            {/* ========================== */}

            <div
              className="
                flex
                shrink-0
                items-start
                justify-between
                gap-5
                border-b
                border-slate-100
                px-5
                py-5

                sm:px-6
              "
            >
              <div className="min-w-0">

                <h2
                  id="admin-modal-title"
                  className="
                    font-['Space_Grotesk']
                    text-xl
                    font-bold
                    tracking-[-0.03em]
                    text-slate-950
                  "
                >
                  {title}
                </h2>

                {description && (
                  <p
                    className="
                      mt-1
                      max-w-xl
                      font-[Manrope]
                      text-xs
                      leading-5
                      text-slate-500
                    "
                  >
                    {description}
                  </p>
                )}

              </div>


              {/* CLOSE BUTTON */}

              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
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
                <FiX />
              </button>

            </div>


            {/* ========================== */}
            {/* MODAL CONTENT */}
            {/* ========================== */}

            <div
              className="
                flex-1
                overflow-y-auto
                px-5
                py-5

                sm:px-6
                sm:py-6

                [scrollbar-width:thin]
              "
            >
              {children}
            </div>

          </motion.div>

        </motion.div>
      )}

    </AnimatePresence>
  );
};

export default AdminModal;