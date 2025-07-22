import { useLoginContext } from "../context/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRouter = () => {
  const { currentUser } = useLoginContext();
  const location = useLocation();
  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRouter;
