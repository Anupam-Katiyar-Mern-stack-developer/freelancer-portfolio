import { Route, Routes } from "react-router";

import PublicLayout from "../layouts/PublicLayout";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Skills from "../pages/public/Skills";
import Projects from "../pages/public/Projects";
import ProjectDetails from "../pages/public/ProjectDetails";
import Services from "../pages/public/Services";
// import Reviews from "../pages/public/Reviews";
import Contact from "../pages/public/Contact";
import BlogDetails from "../pages/public/BlogDetails";
import NotFound from "../pages/public/NotFound";
import Blog from "../pages/public/Blog";

import AdminRoutes from "./AdminRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/admin/*"
        element={<AdminRoutes />}
      />
      <Route element={<PublicLayout />}>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/skills"
          element={<Skills />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />

        <Route
          path="/service"
          element={<Services />}
        />


        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/blog"
          element={<Blog />}
        />
        <Route
          path="/blog/:slug"
          element={<BlogDetails />}
        />


        {/* 
        <Route
          path="/reviews"
          element={<Reviews />}
        />

      

        <Route
          path="/review/:token"
          element={<ReviewRequest />}
        />
*/}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;