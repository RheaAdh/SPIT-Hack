import React, { useEffect } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth.user ? children : <Navigate to="/" />;
}
