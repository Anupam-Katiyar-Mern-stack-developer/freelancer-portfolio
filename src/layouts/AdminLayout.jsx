import {
  useEffect,
  useState,
} from "react";

import {
  Outlet,
  useLocation,
} from "react-router";

import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const location = useLocation();


  /* ============================= */
  /* SIDEBAR HANDLERS */
  /* ============================= */

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };


  /* ============================= */
  /* ROUTE CHANGE */
  /* ============================= */

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);


  /* ============================= */
  /* MOBILE BODY SCROLL LOCK */
  /* ============================= */

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);


  return (
    <div
      className="
        min-h-screen
        bg-[#F8FAFC]
      "
    >
      {/* ============================= */}
      {/* SIDEBAR */}
      {/* ============================= */}

      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={closeSidebar}
      />


      {/* ============================= */}
      {/* MAIN ADMIN AREA */}
      {/* ============================= */}

      <div
        className="
          min-h-screen
          transition-all
          duration-300

          lg:pl-[280px]
        "
      >
        {/* HEADER */}

        <AdminHeader
          onMenuClick={openSidebar}
        />


        {/* ============================= */}
        {/* PAGE CONTENT */}
        {/* ============================= */}

        <main
          className="
            min-h-[calc(100vh-76px)]
            px-4
            py-6

            sm:px-6
            sm:py-7

            lg:px-8
            lg:py-8
          "
        >
          <div
            className="
              mx-auto
              w-full
              max-w-[1500px]
            "
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;