import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const GuestRoute = ({ children }) => {
  const { isAuthenticated, loading, user } = useAuth();
  console.log({
    user,
    isAuthenticated,
    loading,
  });
  if (loading) {
    return <p>loading ...</p>;
  }
  if (!isAuthenticated) {
    return children;
  }
  return <Navigate to="/dashboard" replace />;
};

export default GuestRoute;
