import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NavBar from "../components/NavBar";
import PrivateRouter from "./PrivateRouter";
import Profile from "../pages/Profile";
import Orders from "../pages/Orders";

const Approuter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<PrivateRouter />}>
          <Route path="" element={<Profile />} />
        </Route>
        <Route path="/orders" element={<PrivateRouter />}>
          <Route path="" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
