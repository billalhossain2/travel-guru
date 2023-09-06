import { useContext } from "react";
import { userContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../pages/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(userContext);
  const location = useLocation();

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (!user) {
    return (
      <Navigate to="/login" state={{ from: location.pathname }}></Navigate>
    );
  }

  return children;
};

export default PrivateRoute;
