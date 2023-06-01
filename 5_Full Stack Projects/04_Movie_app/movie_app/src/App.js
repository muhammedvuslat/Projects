import React from "react";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContextProvider";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
      {/* App Router AutContectProvider ile sarmalladığından dolayı children propunun özelliği olarark içeriğinde bulunan bütün yapı iletilecektir. ayrı olarak <AuthContextProvider / children={<AppRouter/>}> şeklinde bildirilmesine gerek yoktur //! Not prop gönderilme durumlarında zaten self closing gereklidir  */}
    </div>
  );
};

export default App;
