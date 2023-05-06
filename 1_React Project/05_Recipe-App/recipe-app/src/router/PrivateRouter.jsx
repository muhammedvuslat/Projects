import { Outlet, Navigate } from "react-router-dom";

const PrivateRouter = () => {
  const userStorage = sessionStorage.length > 0;
  const user = userStorage;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
