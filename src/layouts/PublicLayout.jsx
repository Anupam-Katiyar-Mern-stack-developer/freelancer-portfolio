import { Outlet } from "react-router";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/layout/ScrollToTop";

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <ScrollToTop />

      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default PublicLayout;