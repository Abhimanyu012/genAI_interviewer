import React from "react";

import Register from "./features/auth/pages/Register";
import Login from "./features/auth/pages/Login";
import { AuthProvider } from "./features/auth/context/auth.context";

const App = () => {
  return (
    <AuthProvider>
      <div className="bg-white">
        {/* <Register /> */}
        <Login />
      </div>
    </AuthProvider>
  );
};

export default App;
