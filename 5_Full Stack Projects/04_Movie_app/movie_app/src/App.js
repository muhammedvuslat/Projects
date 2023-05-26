import React from "react";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContextProvider";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
};

export default App;
