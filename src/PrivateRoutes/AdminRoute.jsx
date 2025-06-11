import { useContext } from "react";
import { AuthContext } from "../ShareComponent/AuthContext/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-spinner text-success"></span>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/signIn" state={location.pathname}></Navigate>;
};

export default AdminRoute;
AdminRoute.propTypes = {
  children: PropTypes.element,
};
