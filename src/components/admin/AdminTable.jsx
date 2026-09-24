import {
  FiEdit2,
  FiEye,
  FiTrash2,
} from "react-icons/fi";

import AdminStatusBadge from "./AdminStatusBadge";


/* =========================================
   NESTED VALUE

   Example:
   author.name
   category.name
========================================= */

const getByPath = (
  object,
  path
) => {
  if (!path) {
    return undefined;
  }

  return path
    .split(".")
    .reduce(
      (current, key) =>
        current?.[key],
      object
    );
};


/* =========================================
   DEFAULT CELL RENDERER
========================================= */

const renderCellValue = (
  row,
  column
) => {
  const value =
    getByPath(
      row,
      column.key
    );


  /* ============================= */
  /* CUSTOM RENDER */
  /* ============================= */

  if (column.render) {
    return column.render(
      value,
      row
    );
  }


  /* ============================= */
  /* STATUS */
  /* ============================= */

  if (
    column.type === "status"
  ) {
    return (
      <AdminStatusBadge
        value={value}
      />
    );
  }


  /* ============================= */
  /* BOOLEAN */
  /* ============================= */

  if (
    column.type === "boolean"
  ) {
    return (
      <AdminStatusBadge
        value={Boolean(value)}
        label={
          value
            ? column.trueLabel ||
              "Active"
            : column.falseLabel ||
              "Inactive"
        }
      />
    );
  }


  /* ============================= */
  /* IMAGE */
  /* ============================= */

  if (
    column.type === "image"
  ) {
    if (!value) {
      return (
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-slate-100
            font-[Manrope]
            text-[10px]
            font-bold
            text-slate-400
          "
        >
          N/A
        </div>
      );
    }

    return (
      <img
        src={value}
        alt={
          column.alt ||
          "Table item"
        }
        loading="lazy"
        className="
          h-11
          w-11
          rounded-xl
          border
          border-slate-200
          object-cover
        "
      />
    );
  }


  /* ============================= */
  /* ARRAY */
  /* ============================= */

  if (Array.isArray(value)) {
    if (!value.length) {
      return "—";
    }

    return value
      .map((item) => {
        if (
          typeof item === "string" ||
          typeof item === "number"
        ) {
          return item;
        }

        return (
          item?.name ||
          item?.label ||
          ""
        );
      })
      .filter(Boolean)
      .join(", ");
  }


  /* ============================= */
  /* EMPTY */
  /* ============================= */

  if (
    value === undefined ||
    value === null ||
    value === ""
  ) {
    return "—";
  }


  return String(value);
};


const AdminTable = ({
  columns = [],
  data = [],

  loading = false,

  emptyTitle = "No data found",
  emptyDescription =
    "There is currently no data available.",

  rowKey = "slug",

  onView,
  onEdit,
  onDelete,

  actionLoadingKey = null,

  minWidth = 900,

  stickyActions = true,
}) => {
  const hasActions =
    Boolean(
      onView ||
      onEdit ||
      onDelete
    );

  const totalColumns =
    columns.length +
    (hasActions ? 1 : 0);


  return (
    <div
      className="
        overflow-hidden
        rounded-[22px]
        border
        border-slate-200
        bg-white
        shadow-[0_10px_40px_rgba(15,23,42,0.03)]
      "
    >
      {/* ============================= */}
      {/* HORIZONTAL SCROLL AREA */}
      {/* ============================= */}

      <div
        className="
          w-full
          overflow-x-auto
          overscroll-x-contain

          [scrollbar-width:thin]
        "
      >
        <table
          className="
            w-full
            border-collapse
            text-left
          "
          style={{
            minWidth: `${minWidth}px`,
          }}
        >

          {/* ============================= */}
          {/* TABLE HEADER */}
          {/* ============================= */}

          <thead>
            <tr
              className="
                border-b
                border-slate-200
                bg-slate-50
              "
            >
              {columns.map(
                (column) => (
                  <th
                    key={
                      column.key ||
                      column.label
                    }
                    scope="col"
                    className={`
                      whitespace-nowrap
                      px-5
                      py-4
                      font-[Manrope]
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-slate-500

                      ${
                        column.className ||
                        ""
                      }
                    `}
                    style={
                      column.width
                        ? {
                            width:
                              column.width,
                          }
                        : undefined
                    }
                  >
                    {column.label}
                  </th>
                )
              )}


              {/* ACTION HEADER */}

              {hasActions && (
                <th
                  scope="col"
                  className={`
                    whitespace-nowrap
                    px-5
                    py-4
                    text-right
                    font-[Manrope]
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-slate-500

                    ${
                      stickyActions
                        ? `
                          sticky
                          right-0
                          z-20
                          border-l
                          border-slate-200
                          bg-slate-50
                        `
                        : ""
                    }
                  `}
                >
                  Actions
                </th>
              )}
            </tr>
          </thead>


          {/* ============================= */}
          {/* TABLE BODY */}
          {/* ============================= */}

          <tbody
            className="
              divide-y
              divide-slate-100
            "
          >

            {/* ========================= */}
            {/* LOADING */}
            {/* ========================= */}

            {loading &&
              Array.from({
                length: 5,
              }).map((_, rowIndex) => (
                <tr
                  key={`loading-${rowIndex}`}
                >
                  {Array.from({
                    length:
                      totalColumns,
                  }).map(
                    (
                      _,
                      cellIndex
                    ) => (
                      <td
                        key={
                          cellIndex
                        }
                        className="
                          px-5
                          py-5
                        "
                      >
                        <div
                          className="
                            h-4
                            w-full
                            max-w-[140px]
                            animate-pulse
                            rounded-md
                            bg-slate-100
                          "
                        />
                      </td>
                    )
                  )}
                </tr>
              ))}


            {/* ========================= */}
            {/* DATA */}
            {/* ========================= */}

            {!loading &&
              data.map(
                (
                  row,
                  rowIndex
                ) => {
                  const resolvedRowKey =
                    getByPath(
                      row,
                      rowKey
                    ) ??
                    row.id ??
                    rowIndex;

                  const isActionLoading =
                    actionLoadingKey !==
                      null &&
                    actionLoadingKey ===
                      resolvedRowKey;

                  return (
                    <tr
                      key={
                        resolvedRowKey
                      }
                      className="
                        group
                        bg-white
                        transition
                        duration-200

                        hover:bg-slate-50/70
                      "
                    >
                      {columns.map(
                        (column) => (
                          <td
                            key={
                              column.key ||
                              column.label
                            }
                            className={`
                              px-5
                              py-4
                              align-middle
                              font-[Manrope]
                              text-sm
                              text-slate-600

                              ${
                                column.nowrap ===
                                false
                                  ? ""
                                  : "whitespace-nowrap"
                              }

                              ${
                                column.cellClassName ||
                                ""
                              }
                            `}
                          >
                            {renderCellValue(
                              row,
                              column
                            )}
                          </td>
                        )
                      )}


                      {/* ================= */}
                      {/* ACTIONS */}
                      {/* ================= */}

                      {hasActions && (
                        <td
                          className={`
                            px-5
                            py-4
                            align-middle

                            ${
                              stickyActions
                                ? `
                                  sticky
                                  right-0
                                  z-10
                                  border-l
                                  border-slate-100
                                  bg-white

                                  group-hover:bg-slate-50
                                `
                                : ""
                            }
                          `}
                        >
                          <div
                            className="
                              flex
                              items-center
                              justify-end
                              gap-2
                              whitespace-nowrap
                            "
                          >

                            {/* VIEW */}

                            {onView && (
                              <button
                                type="button"
                                disabled={
                                  isActionLoading
                                }
                                onClick={() =>
                                  onView(
                                    row
                                  )
                                }
                                aria-label="View item"
                                title="View"
                                className="
                                  flex
                                  h-9
                                  w-9
                                  items-center
                                  justify-center
                                  rounded-xl
                                  border
                                  border-slate-200
                                  bg-white
                                  text-slate-500
                                  transition
                                  duration-200

                                  hover:border-blue-200
                                  hover:bg-blue-50
                                  hover:text-blue-600

                                  disabled:cursor-not-allowed
                                  disabled:opacity-50
                                "
                              >
                                <FiEye />
                              </button>
                            )}


                            {/* EDIT */}

                            {onEdit && (
                              <button
                                type="button"
                                disabled={
                                  isActionLoading
                                }
                                onClick={() =>
                                  onEdit(
                                    row
                                  )
                                }
                                aria-label="Edit item"
                                title="Edit"
                                className="
                                  flex
                                  h-9
                                  w-9
                                  items-center
                                  justify-center
                                  rounded-xl
                                  border
                                  border-slate-200
                                  bg-white
                                  text-slate-500
                                  transition
                                  duration-200

                                  hover:border-blue-200
                                  hover:bg-blue-50
                                  hover:text-blue-600

                                  disabled:cursor-not-allowed
                                  disabled:opacity-50
                                "
                              >
                                <FiEdit2 />
                              </button>
                            )}


                            {/* DELETE */}

                            {onDelete && (
                              <button
                                type="button"
                                disabled={
                                  isActionLoading
                                }
                                onClick={() =>
                                  onDelete(
                                    row
                                  )
                                }
                                aria-label="Delete item"
                                title="Delete"
                                className="
                                  flex
                                  h-9
                                  w-9
                                  items-center
                                  justify-center
                                  rounded-xl
                                  border
                                  border-red-100
                                  bg-white
                                  text-red-500
                                  transition
                                  duration-200

                                  hover:border-red-200
                                  hover:bg-red-50

                                  disabled:cursor-not-allowed
                                  disabled:opacity-50
                                "
                              >
                                {isActionLoading ? (
                                  <span
                                    className="
                                      h-4
                                      w-4
                                      animate-spin
                                      rounded-full
                                      border-2
                                      border-red-100
                                      border-t-red-500
                                    "
                                  />
                                ) : (
                                  <FiTrash2 />
                                )}
                              </button>
                            )}

                          </div>
                        </td>
                      )}
                    </tr>
                  );
                }
              )}


            {/* ========================= */}
            {/* EMPTY STATE */}
            {/* ========================= */}

            {!loading &&
              data.length === 0 && (
                <tr>
                  <td
                    colSpan={
                      totalColumns
                    }
                    className="
                      px-6
                      py-16
                      text-center
                    "
                  >
                    <div
                      className="
                        mx-auto
                        max-w-sm
                      "
                    >
                      <div
                        className="
                          mx-auto
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-2xl
                          bg-slate-100
                          font-['Space_Grotesk']
                          text-lg
                          font-bold
                          text-slate-400
                        "
                      >
                        —
                      </div>

                      <h3
                        className="
                          mt-4
                          font-['Space_Grotesk']
                          text-base
                          font-bold
                          text-slate-950
                        "
                      >
                        {emptyTitle}
                      </h3>

                      <p
                        className="
                          mt-1
                          font-[Manrope]
                          text-xs
                          leading-5
                          text-slate-500
                        "
                      >
                        {
                          emptyDescription
                        }
                      </p>
                    </div>
                  </td>
                </tr>
              )}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;