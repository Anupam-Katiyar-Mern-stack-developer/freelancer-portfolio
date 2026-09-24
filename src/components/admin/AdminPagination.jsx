import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const AdminPagination = ({
  page = 1,
  totalPages = 1,
  totalItems = 0,
  limit = 10,
  onPageChange,
  disabled = false,
}) => {
  const currentPage = Math.max(
    1,
    Math.min(page, totalPages || 1)
  );

  const safeTotalPages = Math.max(
    1,
    totalPages || 1
  );

  const startItem =
    totalItems === 0
      ? 0
      : (currentPage - 1) * limit + 1;

  const endItem = Math.min(
    currentPage * limit,
    totalItems
  );


  /* ============================= */
  /* PAGE NUMBERS */
  /* ============================= */

  const getPageNumbers = () => {
    const pages = [];

    if (safeTotalPages <= 7) {
      for (
        let i = 1;
        i <= safeTotalPages;
        i++
      ) {
        pages.push(i);
      }

      return pages;
    }

    pages.push(1);

    if (currentPage > 4) {
      pages.push("left-ellipsis");
    }

    const start = Math.max(
      2,
      currentPage - 1
    );

    const end = Math.min(
      safeTotalPages - 1,
      currentPage + 1
    );

    for (
      let i = start;
      i <= end;
      i++
    ) {
      pages.push(i);
    }

    if (
      currentPage <
      safeTotalPages - 3
    ) {
      pages.push("right-ellipsis");
    }

    pages.push(safeTotalPages);

    return pages;
  };


  const pages = getPageNumbers();


  /* ============================= */
  /* CHANGE PAGE */
  /* ============================= */

  const handlePageChange = (
    nextPage
  ) => {
    if (disabled) return;

    if (
      nextPage < 1 ||
      nextPage > safeTotalPages ||
      nextPage === currentPage
    ) {
      return;
    }

    onPageChange?.(nextPage);
  };


  if (
    totalItems === 0 ||
    safeTotalPages <= 1
  ) {
    return null;
  }


  return (
    <div
      className="
        mt-5
        flex
        flex-col
        gap-4
        rounded-[18px]
        border
        border-slate-200
        bg-white
        px-4
        py-4

        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      {/* ============================= */}
      {/* RESULT INFO */}
      {/* ============================= */}

      <p
        className="
          font-[Manrope]
          text-xs
          text-slate-500
        "
      >
        Showing{" "}
        <span
          className="
            font-bold
            text-slate-800
          "
        >
          {startItem}
        </span>

        {" "}to{" "}

        <span
          className="
            font-bold
            text-slate-800
          "
        >
          {endItem}
        </span>

        {" "}of{" "}

        <span
          className="
            font-bold
            text-slate-800
          "
        >
          {totalItems}
        </span>

        {" "}results
      </p>


      {/* ============================= */}
      {/* PAGINATION CONTROLS */}
      {/* ============================= */}

      <div
        className="
          flex
          items-center
          gap-1
          overflow-x-auto
          pb-1

          [scrollbar-width:thin]

          sm:pb-0
        "
      >

        {/* PREVIOUS */}

        <button
          type="button"
          aria-label="Previous page"
          disabled={
            disabled ||
            currentPage === 1
          }
          onClick={() =>
            handlePageChange(
              currentPage - 1
            )
          }
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
            text-slate-600
            transition
            duration-200

            hover:border-blue-200
            hover:bg-blue-50
            hover:text-blue-600

            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <FiChevronLeft />
        </button>


        {/* PAGE NUMBERS */}

        {pages.map((item) => {
          if (
            item === "left-ellipsis" ||
            item === "right-ellipsis"
          ) {
            return (
              <span
                key={item}
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  font-[Manrope]
                  text-xs
                  text-slate-400
                "
              >
                ...
              </span>
            );
          }

          const isActive =
            item === currentPage;

          return (
            <button
              key={item}
              type="button"
              disabled={
                disabled ||
                isActive
              }
              onClick={() =>
                handlePageChange(
                  item
                )
              }
              className={`
                flex
                h-9
                min-w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                px-2
                font-[Manrope]
                text-xs
                font-bold
                transition
                duration-200

                ${
                  isActive
                    ? `
                      border-slate-950
                      bg-slate-950
                      text-white
                    `
                    : `
                      border-slate-200
                      bg-white
                      text-slate-600

                      hover:border-blue-200
                      hover:bg-blue-50
                      hover:text-blue-600
                    `
                }

                disabled:cursor-default
              `}
            >
              {item}
            </button>
          );
        })}


        {/* NEXT */}

        <button
          type="button"
          aria-label="Next page"
          disabled={
            disabled ||
            currentPage ===
              safeTotalPages
          }
          onClick={() =>
            handlePageChange(
              currentPage + 1
            )
          }
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
            text-slate-600
            transition
            duration-200

            hover:border-blue-200
            hover:bg-blue-50
            hover:text-blue-600

            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <FiChevronRight />
        </button>

      </div>
    </div>
  );
};

export default AdminPagination;