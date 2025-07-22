import { createContext, useContext, useEffect, useState } from "react";
import { userObserver } from "../auth/firebase";

//! Create işlemi
export const LoginContext = createContext();

//! provide işlemi
const LoginProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    console.log(currentUser);
    userObserver(setCurrentUser);
  }, []);

  const values = { currentUser, setCurrentUser, movieData, setMovieData };

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;

export const useLoginContext = () => {
  return useContext(LoginContext);
};
