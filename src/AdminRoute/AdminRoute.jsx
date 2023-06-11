import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import UseAdmin from "../UseQuery/UseAdmin";

const AdminRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  const [isAdmin, isAdminLoading] = UseAdmin();
  if (loader || isAdminLoading) {
    return <span className="loading loading-spinner text-warning"></span>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
