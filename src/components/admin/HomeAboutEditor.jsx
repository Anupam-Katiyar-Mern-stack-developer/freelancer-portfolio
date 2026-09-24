import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FiPlus,
} from "react-icons/fi";

import AdminForm from "../AdminForm";
import AdminModal from "../AdminModal";
import AdminTable from "../AdminTable";

import {
  homeAboutFormFields,
  homeAboutHighlightColumns,
  homeAboutHighlightFields,
  homeAboutStatColumns,
  homeAboutStatFields,
} from "../../../configs/admin/about.config";


const HomeAboutEditor = ({
  data = {},
  saving = false,
  onSave,
}) => {
  const [
    highlights,
    setHighlights,
  ] = useState([]);

  const [
    stats,
    setStats,
  ] = useState([]);

  const [
    highlightModal,
    setHighlightModal,
  ] = useState(false);

  const [
    selectedHighlight,
    setSelectedHighlight,
  ] = useState(null);

  const [
    statModal,
    setStatModal,
  ] = useState(false);

  const [
    selectedStat,
    setSelectedStat,
  ] = useState(null);


  /* ============================= */
  /* SYNC EXISTING DATA */
  /* ============================= */

  useEffect(() => {
    setHighlights(
      Array.isArray(data.highlights)
        ? data.highlights
        : []
    );

    setStats(
      Array.isArray(data.stats)
        ? data.stats
        : []
    );
  }, [data]);


  /* ============================= */
  /* TABLE DATA */
  /* ============================= */

  const highlightRows =
    useMemo(
      () =>
        highlights.map(
          (text, index) => ({
            rowIndex: index,
            text,
          })
        ),
      [highlights]
    );


  const statRows = useMemo(
    () =>
      stats.map(
        (item, index) => ({
          ...item,
          rowIndex: index,
        })
      ),
    [stats]
  );


  /* ============================= */
  /* MAIN CONTENT SAVE */
  /* ============================= */

  const handleContentSubmit = async (
    values
  ) => {
    await onSave?.({
      ...data,
      ...values,
      highlights,
      stats,
    });
  };


  /* ============================= */
  /* HIGHLIGHT MODAL */
  /* ============================= */

  const openAddHighlight = () => {
    setSelectedHighlight(null);
    setHighlightModal(true);
  };


  const openEditHighlight = (
    row
  ) => {
    setSelectedHighlight(row);
    setHighlightModal(true);
  };


  const closeHighlightModal =
    () => {
      setSelectedHighlight(null);
      setHighlightModal(false);
    };


  const handleHighlightSubmit = (
    values
  ) => {
    const text =
      values.text.trim();

    if (
      selectedHighlight !== null
    ) {
      setHighlights(
        (current) =>
          current.map(
            (item, index) =>
              index ===
              selectedHighlight.rowIndex
                ? text
                : item
          )
      );
    } else {
      setHighlights(
        (current) => [
          ...current,
          text,
        ]
      );
    }

    closeHighlightModal();
  };


  const handleDeleteHighlight = (
    row
  ) => {
    setHighlights(
      (current) =>
        current.filter(
          (_, index) =>
            index !==
            row.rowIndex
        )
    );
  };


  /* ============================= */
  /* STAT MODAL */
  /* ============================= */

  const openAddStat = () => {
    setSelectedStat(null);
    setStatModal(true);
  };


  const openEditStat = (row) => {
    setSelectedStat(row);
    setStatModal(true);
  };


  const closeStatModal = () => {
    setSelectedStat(null);
    setStatModal(false);
  };


  const handleStatSubmit = (
    values
  ) => {
    const newStat = {
      value: values.value.trim(),
      label: values.label.trim(),
    };

    if (selectedStat !== null) {
      setStats((current) =>
        current.map(
          (item, index) =>
            index ===
            selectedStat.rowIndex
              ? newStat
              : item
        )
      );
    } else {
      setStats((current) => [
        ...current,
        newStat,
      ]);
    }

    closeStatModal();
  };


  const handleDeleteStat = (
    row
  ) => {
    setStats((current) =>
      current.filter(
        (_, index) =>
          index !== row.rowIndex
      )
    );
  };


  return (
    <div className="space-y-8">

      {/* ============================= */}
      {/* MAIN CONTENT */}
      {/* ============================= */}

      <section>
        <div
          className="
            mb-5
            border-b
            border-slate-100
            pb-4
          "
        >
          <h3
            className="
              font-['Space_Grotesk']
              text-base
              font-bold
              text-slate-950
            "
          >
            Section Content
          </h3>

          <p
            className="
              mt-1
              font-[Manrope]
              text-xs
              text-slate-500
            "
          >
            Manage the dynamic content displayed in the homepage About section.
          </p>
        </div>

        <AdminForm
          fields={
            homeAboutFormFields
          }
          initialValues={{
            ...data,

            ctaLink:
              data.ctaLink ||
              "#projects",
          }}
          submitLabel="Save Home About"
          loading={saving}
          onSubmit={
            handleContentSubmit
          }
        />
      </section>


      {/* ============================= */}
      {/* HIGHLIGHTS */}
      {/* ============================= */}

      <section
        className="
          border-t
          border-slate-100
          pt-7
        "
      >
        <div
          className="
            mb-5
            flex
            items-center
            justify-between
            gap-4
          "
        >
          <div>
            <h3
              className="
                font-['Space_Grotesk']
                text-base
                font-bold
                text-slate-950
              "
            >
              Highlights
            </h3>

            <p
              className="
                mt-1
                font-[Manrope]
                text-xs
                text-slate-500
              "
            >
              Manage the feature highlights displayed beside the About content.
            </p>
          </div>

          <button
            type="button"
            onClick={
              openAddHighlight
            }
            className="
              inline-flex
              shrink-0
              items-center
              gap-2
              rounded-xl
              bg-slate-950
              px-4
              py-2.5
              font-[Manrope]
              text-xs
              font-bold
              text-white
              transition

              hover:bg-blue-600
            "
          >
            <FiPlus />

            Add Highlight
          </button>
        </div>

        <AdminTable
          columns={
            homeAboutHighlightColumns
          }
          data={highlightRows}
          rowKey="rowIndex"
          minWidth={650}
          onEdit={
            openEditHighlight
          }
          onDelete={
            handleDeleteHighlight
          }
        />
      </section>


      {/* ============================= */}
      {/* STATS */}
      {/* ============================= */}

      <section
        className="
          border-t
          border-slate-100
          pt-7
        "
      >
        <div
          className="
            mb-5
            flex
            items-center
            justify-between
            gap-4
          "
        >
          <div>
            <h3
              className="
                font-['Space_Grotesk']
                text-base
                font-bold
                text-slate-950
              "
            >
              Stats
            </h3>

            <p
              className="
                mt-1
                font-[Manrope]
                text-xs
                text-slate-500
              "
            >
              Manage the proof stats displayed in the homepage About section.
            </p>
          </div>

          <button
            type="button"
            onClick={openAddStat}
            className="
              inline-flex
              shrink-0
              items-center
              gap-2
              rounded-xl
              bg-slate-950
              px-4
              py-2.5
              font-[Manrope]
              text-xs
              font-bold
              text-white
              transition

              hover:bg-blue-600
            "
          >
            <FiPlus />

            Add Stat
          </button>
        </div>

        <AdminTable
          columns={
            homeAboutStatColumns
          }
          data={statRows}
          rowKey="rowIndex"
          minWidth={650}
          onEdit={openEditStat}
          onDelete={
            handleDeleteStat
          }
        />
      </section>


      {/* ============================= */}
      {/* HIGHLIGHT MODAL */}
      {/* ============================= */}

      <AdminModal
        open={highlightModal}
        title={
          selectedHighlight
            ? "Edit Highlight"
            : "Add Highlight"
        }
        description="Manage a highlight displayed in the homepage About section."
        onClose={
          closeHighlightModal
        }
        size="sm"
      >
        <AdminForm
          fields={
            homeAboutHighlightFields
          }
          initialValues={
            selectedHighlight || {}
          }
          submitLabel={
            selectedHighlight
              ? "Update Highlight"
              : "Add Highlight"
          }
          onSubmit={
            handleHighlightSubmit
          }
          onCancel={
            closeHighlightModal
          }
        />
      </AdminModal>


      {/* ============================= */}
      {/* STAT MODAL */}
      {/* ============================= */}

      <AdminModal
        open={statModal}
        title={
          selectedStat
            ? "Edit Stat"
            : "Add Stat"
        }
        description="Manage a stat displayed in the homepage About section."
        onClose={
          closeStatModal
        }
        size="sm"
      >
        <AdminForm
          fields={
            homeAboutStatFields
          }
          initialValues={
            selectedStat || {}
          }
          submitLabel={
            selectedStat
              ? "Update Stat"
              : "Add Stat"
          }
          onSubmit={
            handleStatSubmit
          }
          onCancel={
            closeStatModal
          }
        />
      </AdminModal>

    </div>
  );
};

export default HomeAboutEditor;