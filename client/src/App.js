import React, { useState } from "react";

import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import AuthProvider, { useAuth } from "./context/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
        <Toaster />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
