import { createContext, useEffect, useState } from "react";
import { userState } from "../auth/firebase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(true);
  useEffect(() => {
    userState();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
