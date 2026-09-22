import { Route, Routes } from "react-router";

import PublicLayout from "../layouts/PublicLayout";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Skills from "../pages/public/Skills";
import Projects from "../pages/public/Projects";
// import ProjectDetails from "../pages/public/ProjectDetails";
// import CaseStudies from "../pages/public/CaseStudies";
// import CaseStudyDetails from "../pages/public/CaseStudyDetails";
// import Reviews from "../pages/public/Reviews";
// import Contact from "../pages/public/Contact";
// import ReviewRequest from "../pages/public/ReviewRequest";
import NotFound from "../pages/public/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
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
{/* 
        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />

        <Route
          path="/case-studies"
          element={<CaseStudies />}
        />

        <Route
          path="/case-studies/:slug"
          element={<CaseStudyDetails />}
        />

        <Route
          path="/reviews"
          element={<Reviews />}
        />

        <Route
          path="/contact"
          element={<Contact />}
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