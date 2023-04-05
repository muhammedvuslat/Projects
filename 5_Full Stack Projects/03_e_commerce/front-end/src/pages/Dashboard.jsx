import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useAuthCalls from "../hooks/useAuthCalls";

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const { getProfile } = useAuthCalls();

  useEffect(() => {
    currentUser && getProfile(currentUser?.id);
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
