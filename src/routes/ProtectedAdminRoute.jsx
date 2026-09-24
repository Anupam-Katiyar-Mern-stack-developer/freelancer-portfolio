import { Navigate, Outlet } from "react-router";

const ProtectedAdminRoute = () => {
  const adminToken =
    localStorage.getItem("adminToken");

  if (adminToken) {
    return (
      <Navigate
        to="/admin/login"
        replace
      />
    );
  }

  return <Outlet />;
};

export default ProtectedAdminRoute;