import {
  useMemo,
  useState,
} from "react";

import {
  FiBriefcase,
  FiLayers,
  FiMap,
  FiTarget,
  FiUser,
  FiZap,
} from "react-icons/fi";

import AdminPageHeader from "../../components/admin/AdminPageHeader";
import HomeAboutEditor from "../../components/admin/about/HomeAboutEditor";
import AboutHeroEditor from "../../components/admin/about/AboutHeroEditor";

import {
  aboutAdminTabs,
} from "../../configs/admin/about.config";


/* =========================================
   TAB META

   Ye sirf admin UI ke icons/descriptions
   ke liye hai.
========================================= */

const tabMeta = {
  home: {
    icon: FiLayers,

    description:
      "Manage the About section displayed on the homepage.",
  },

  hero: {
    icon: FiUser,

    description:
      "Manage the introduction, profile image and stats displayed at the top of the About page.",
  },

  journey: {
    icon: FiMap,

    description:
      "Manage your journey heading and story paragraphs.",
  },

  work: {
    icon: FiZap,

    description:
      "Manage the What I Do section and the capability cards displayed on the About page.",
  },

  career: {
    icon: FiBriefcase,

    description:
      "Manage professional experience and education from one place.",
  },

  process: {
    icon: FiTarget,

    description:
      "Manage the steps displayed in the About page work process section.",
  },
};


/* =========================================
   TEMPORARY SECTION PLACEHOLDER

   Jaise-jaise editors banenge,
   ye replace hota jayega.
========================================= */

const SectionPlaceholder = ({
  title,
  description,
}) => {
  return (
    <div
      className="
        rounded-2xl
        border
        border-dashed
        border-slate-200
        bg-slate-50
        px-5
        py-14
        text-center
      "
    >
      <p
        className="
          font-['Space_Grotesk']
          text-base
          font-bold
          text-slate-800
        "
      >
        {title}
      </p>

      <p
        className="
          mx-auto
          mt-2
          max-w-lg
          font-[Manrope]
          text-xs
          leading-6
          text-slate-400
        "
      >
        {description}
      </p>
    </div>
  );
};


const About = () => {
  /* =========================================
     ACTIVE TAB
  ========================================= */

  const [
    activeTab,
    setActiveTab,
  ] = useState("home");


  /* =========================================
     TEMPORARY HOME ABOUT DATA

     Backend/Redux connect hone par
     ye useAdminAbout() se aayega.
  ========================================= */

  const [
    homeAboutData,
    setHomeAboutData,
  ] = useState({
    eyebrow: "",
    heading: "",
    highlight: "",
    description: "",
    secondDescription: "",
    availability: "",

    ctaLink: "#projects",

    highlights: [],

    stats: [],
  });


  /* =========================================
     ACTIVE TAB DATA
  ========================================= */

  const activeTabData = useMemo(
    () =>
      aboutAdminTabs.find(
        (tab) =>
          tab.id === activeTab
      ),
    [activeTab]
  );


  const activeMeta =
    tabMeta[activeTab];

  const ActiveIcon =
    activeMeta?.icon;


  /* =========================================
     HOME ABOUT SAVE

     Abhi local admin draft.
     Redux/API connect hone par ye
     updateAbout handler se replace hoga.
  ========================================= */

  const handleHomeAboutSave =
    async (values) => {
      setHomeAboutData(values);
    };


  /* =========================================
     TAB CONTENT
  ========================================= */

  const renderTabContent = () => {
    /* ============================= */
    /* HOME ABOUT */
    /* ============================= */

    if (activeTab === "home") {
      return (
        <HomeAboutEditor
          data={homeAboutData}
          saving={false}
          onSave={
            handleHomeAboutSave
          }
        />
      );
    }


    /* ============================= */
    /* ABOUT HERO */
    /* ============================= */

    if (activeTab === "hero") {
      return (
        <SectionPlaceholder
          title="About Hero Editor"
          description="This editor will manage the About page introduction, profile image and proof stats."
        />
      );
    }


    /* ============================= */
    /* JOURNEY */
    /* ============================= */

    if (
      activeTab === "journey"
    ) {
      return (
        <SectionPlaceholder
          title="Journey Editor"
          description="This editor will manage the Journey heading, highlighted text and story paragraphs."
        />
      );
    }


    /* ============================= */
    /* WHAT I DO */
    /* ============================= */

    if (activeTab === "work") {
      return (
        <SectionPlaceholder
          title="What I Do Editor"
          description="This editor will manage the section heading and capability cards."
        />
      );
    }


    /* ============================= */
    /* CAREER */
    /* ============================= */

    if (
      activeTab === "career"
    ) {
      return (
        <SectionPlaceholder
          title="Career Editor"
          description="Experience and Education tables will be managed together inside this tab."
        />
      );
    }


    /* ============================= */
    /* WORK PROCESS */
    /* ============================= */

    if (
      activeTab === "process"
    ) {
      return (
        <SectionPlaceholder
          title="Work Process Editor"
          description="This editor will manage the numbered process steps displayed on the About page."
        />
      );
    }


    return null;
  };


  return (
    <div className="space-y-7">

      {/* ============================= */}
      {/* PAGE HEADER */}
      {/* ============================= */}

      <AdminPageHeader
        eyebrow="Website Content"
        title="About"
        description="Manage homepage About content and the complete dedicated About page."
      />


      {/* ============================= */}
      {/* ADMIN PANEL */}
      {/* ============================= */}

      <div
        className="
          overflow-hidden
          rounded-[24px]
          border
          border-slate-200
          bg-white
          shadow-[0_10px_40px_rgba(15,23,42,0.03)]
        "
      >

        {/* ============================= */}
        {/* TABS */}
        {/* ============================= */}

        <div
          className="
            w-full
            overflow-x-auto
            border-b
            border-slate-200

            [scrollbar-width:thin]
          "
        >
          <div
            className="
              flex
              min-w-max
              items-center
              gap-1
              px-3
              pt-3
            "
          >
            {aboutAdminTabs.map(
              (tab) => {
                const isActive =
                  activeTab ===
                  tab.id;

                const meta =
                  tabMeta[tab.id];

                const Icon =
                  meta?.icon;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() =>
                      setActiveTab(
                        tab.id
                      )
                    }
                    className={`
                      relative
                      inline-flex
                      items-center
                      gap-2
                      whitespace-nowrap
                      rounded-t-xl
                      px-4
                      py-3
                      font-[Manrope]
                      text-xs
                      font-bold
                      transition
                      duration-200

                      ${
                        isActive
                          ? `
                            bg-blue-50/70
                            text-blue-600
                          `
                          : `
                            text-slate-500

                            hover:bg-slate-50
                            hover:text-slate-900
                          `
                      }
                    `}
                  >
                    {Icon && (
                      <Icon className="text-sm" />
                    )}

                    {tab.label}


                    {/* ACTIVE BORDER */}

                    {isActive && (
                      <span
                        className="
                          absolute
                          bottom-0
                          left-3
                          right-3
                          h-0.5
                          rounded-full
                          bg-blue-600
                        "
                      />
                    )}
                  </button>
                );
              }
            )}
          </div>
        </div>


        {/* ============================= */}
        {/* ACTIVE SECTION HEADER */}
        {/* ============================= */}

        <div
          className="
            border-b
            border-slate-100
            px-5
            py-5

            sm:px-6
          "
        >
          <div
            className="
              flex
              items-start
              gap-3
            "
          >
            {ActiveIcon && (
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-50
                  text-blue-600
                "
              >
                <ActiveIcon />
              </div>
            )}

            <div>
              <h2
                className="
                  font-['Space_Grotesk']
                  text-lg
                  font-bold
                  tracking-[-0.03em]
                  text-slate-950
                "
              >
                {
                  activeTabData?.label
                }
              </h2>

              {activeMeta?.description && (
                <p
                  className="
                    mt-1
                    max-w-2xl
                    font-[Manrope]
                    text-xs
                    leading-5
                    text-slate-500
                  "
                >
                  {
                    activeMeta.description
                  }
                </p>
              )}
            </div>
          </div>
        </div>


        {/* ============================= */}
        {/* ACTIVE TAB BODY */}
        {/* ============================= */}

        <div
          className="
            min-h-[450px]
            p-5

            sm:p-6
          "
        >
          {renderTabContent()}
        </div>

      </div>

    </div>
  );
};

export default About;