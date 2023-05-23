import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Navbar2 /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
