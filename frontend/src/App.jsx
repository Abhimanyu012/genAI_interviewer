import React from "react";

import Register from "./features/auth/pages/Register";
import Login from "./features/auth/pages/Login";
import { AuthProvider } from "./features/auth/context/AuthProvider";
import ProtectedRoute from "./features/auth/routes/ProtectedRoute";
import Dashboard from "./features/auth/pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import HomePage from "./features/auth/pages/HomePage";
import GuestRoute from "./features/auth/routes/GuestRoute";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <GuestRoute>
              <HomePage />
            </GuestRoute>
          }
        />
        <Route
          path="/login"
          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }
        />
        <Route path="/register" 
        element={ 
        <GuestRoute>
          <Register /> 
        </GuestRoute>}/>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
