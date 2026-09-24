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
  aboutHeroFormFields,
  aboutHeroStatColumns,
  aboutHeroStatFields,
} from "../../../configs/admin/about.config";


const AboutHeroEditor = ({
  data = {},
  saving = false,
  onSave,
}) => {
  /* ============================= */
  /* HERO DATA */
  /* ============================= */

  const hero =
    data.hero || {};


  /* ============================= */
  /* STATS DRAFT */
  /* ============================= */

  const [
    stats,
    setStats,
  ] = useState([]);


  /* ============================= */
  /* STAT MODAL */
  /* ============================= */

  const [
    statModalOpen,
    setStatModalOpen,
  ] = useState(false);

  const [
    selectedStat,
    setSelectedStat,
  ] = useState(null);


  /* ============================= */
  /* SYNC DATA */
  /* ============================= */

  useEffect(() => {
    setStats(
      Array.isArray(data.stats)
        ? data.stats
        : []
    );
  }, [data.stats]);


  /* ============================= */
  /* TABLE ROWS */
  /* ============================= */

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
  /* SAVE HERO */
  /* ============================= */

  const handleHeroSubmit = async (
    values
  ) => {
    await onSave?.({
      hero: {
        ...hero,
        ...values,
      },

      stats,
    });
  };


  /* ============================= */
  /* OPEN ADD STAT */
  /* ============================= */

  const openAddStat = () => {
    setSelectedStat(null);

    setStatModalOpen(true);
  };


  /* ============================= */
  /* OPEN EDIT STAT */
  /* ============================= */

  const openEditStat = (
    row
  ) => {
    setSelectedStat(row);

    setStatModalOpen(true);
  };


  /* ============================= */
  /* CLOSE STAT MODAL */
  /* ============================= */

  const closeStatModal = () => {
    setSelectedStat(null);

    setStatModalOpen(false);
  };


  /* ============================= */
  /* ADD / UPDATE STAT */
  /* ============================= */

  const handleStatSubmit = (
    values
  ) => {
    const newStat = {
      value: values.value.trim(),
      label: values.label.trim(),
    };


    /* EDIT */

    if (selectedStat) {
      setStats(
        (current) =>
          current.map(
            (item, index) =>
              index ===
              selectedStat.rowIndex
                ? newStat
                : item
          )
      );
    }


    /* CREATE */

    if (!selectedStat) {
      setStats(
        (current) => [
          ...current,
          newStat,
        ]
      );
    }


    closeStatModal();
  };


  /* ============================= */
  /* DELETE STAT */
  /* ============================= */

  const handleDeleteStat = (
    row
  ) => {
    setStats(
      (current) =>
        current.filter(
          (_, index) =>
            index !==
            row.rowIndex
        )
    );
  };


  return (
    <div className="space-y-8">

      {/* ============================= */}
      {/* HERO CONTENT */}
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
            Hero Content
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
            Manage the introduction and profile image displayed at the
            top of the About page.
          </p>
        </div>


        <AdminForm
          fields={
            aboutHeroFormFields
          }
          initialValues={hero}
          submitLabel="Save About Hero"
          loading={saving}
          onSubmit={
            handleHeroSubmit
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
        {/* HEADER */}

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
              Hero Stats
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
              Manage the proof stats displayed below the About hero.
            </p>
          </div>


          <button
            type="button"
            onClick={openAddStat}
            className="
              inline-flex
              shrink-0
              items-center
              justify-center
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
              duration-200

              hover:bg-blue-600
            "
          >
            <FiPlus />

            Add Stat
          </button>
        </div>


        {/* TABLE */}

        <AdminTable
          columns={
            aboutHeroStatColumns
          }
          data={statRows}
          rowKey="rowIndex"
          minWidth={650}
          emptyTitle="No hero stats"
          emptyDescription="Add stats to display below the About hero section."
          onEdit={
            openEditStat
          }
          onDelete={
            handleDeleteStat
          }
        />
      </section>


      {/* ============================= */}
      {/* STAT MODAL */}
      {/* ============================= */}

      <AdminModal
        open={statModalOpen}
        title={
          selectedStat
            ? "Edit Stat"
            : "Add Stat"
        }
        description="Manage a proof stat displayed in the About hero section."
        onClose={
          closeStatModal
        }
        size="sm"
      >
        <AdminForm
          fields={
            aboutHeroStatFields
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

export default AboutHeroEditor;