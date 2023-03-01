import React, { createContext, useContext } from "react";

//! Authentiocation verileri için context oluşturma
const AuthContext = createContext();

//! AurhContext den veri almak için function oluşturma

function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = () => {
  return <div>AuthContextProvider</div>;
};

export default AuthContextProvider;
