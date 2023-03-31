import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useAuthCalls from "../hooks/useAuthCalls";

const Dashboard = () => {
  const { currentUser, currentUserId } = useSelector((state) => state.auth);
  const { getProfile } = useAuthCalls();

  useEffect(() => {
    currentUser && getProfile(currentUserId);
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
