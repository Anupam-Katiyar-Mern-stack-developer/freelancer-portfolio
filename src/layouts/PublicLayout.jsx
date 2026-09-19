import {
  Outlet,
} from "react-router";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default PublicLayout;