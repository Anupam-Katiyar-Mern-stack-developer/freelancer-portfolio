import {
    Route,
    Routes,
} from "react-router";

import ProtectedAdminRoute from "./ProtectedAdminRoute";

import AdminLayout from "../layouts/AdminLayout";

import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";

// Pages jab ban jayenge tab uncomment/import karenge
import Hero from "../pages/admin/Hero";
// import About from "../pages/admin/About";
// import Skills from "../pages/admin/Skills";
// import Services from "../pages/admin/Services";
// import Projects from "../pages/admin/Projects";
// import ProjectEditor from "../pages/admin/ProjectEditor";
// import FAQs from "../pages/admin/FAQs";
// import Blogs from "../pages/admin/Blogs";
// import BlogEditor from "../pages/admin/BlogEditor";
// import Leads from "../pages/admin/Leads";
// import Reviews from "../pages/admin/Reviews";
// import Settings from "../pages/admin/Settings";

const AdminRoutes = () => {
    return (
        <Routes>

            {/* ============================ */}
            {/* PUBLIC ADMIN ROUTE */}
            {/* ============================ */}

            <Route
                path="login"
                element={<Login />}
            />


            {/* ============================ */}
            {/* PROTECTED ADMIN ROUTES */}
            {/* ============================ */}

            <Route
                element={<ProtectedAdminRoute />}
            >
                <Route
                    element={<AdminLayout />}
                >

                    {/* DASHBOARD */}

                    <Route
                        index
                        element={<Dashboard />}
                    />


                    {/* ======================== */}
                    {/* CONTENT */}
                    {/* ======================== */}


                    <Route
                        path="hero"
                        element={<Hero />}
                    />
                    {/*
          <Route
            path="about"
            element={<About />}
          />

          <Route
            path="skills"
            element={<Skills />}
          />

          <Route
            path="services"
            element={<Services />}
          />

          <Route
            path="projects"
            element={<Projects />}
          />

          <Route
            path="projects/new"
            element={<ProjectEditor />}
          />

          <Route
            path="projects/:slug/edit"
            element={<ProjectEditor />}
          />

          <Route
            path="faqs"
            element={<FAQs />}
          />

          <Route
            path="blogs"
            element={<Blogs />}
          />

          <Route
            path="blogs/new"
            element={<BlogEditor />}
          />

          <Route
            path="blogs/:slug/edit"
            element={<BlogEditor />}
          />
          */}


                    {/* ======================== */}
                    {/* BUSINESS */}
                    {/* ======================== */}

                    {/*
          <Route
            path="leads"
            element={<Leads />}
          />

          <Route
            path="reviews"
            element={<Reviews />}
          />
          */}


                    {/* ======================== */}
                    {/* SYSTEM */}
                    {/* ======================== */}

                    {/*
          <Route
            path="settings"
            element={<Settings />}
          />
          */}

                </Route>
            </Route>

        </Routes>
    );
};

export default AdminRoutes;