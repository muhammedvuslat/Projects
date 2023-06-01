import { createContext, useEffect, useState } from "react";
import { userState } from "../auth/firebase";

export const AuthContext = createContext();

//! useContext costum hook alternatif tip 2
// export const useAuthContext = ( ) => {
//   return useConntext(AuthContext)
// }

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(false);
  console.log(currentUser);

  useEffect(() => {
    userState(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
