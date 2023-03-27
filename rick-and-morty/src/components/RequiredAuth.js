import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children, authenticated }) {
  const location = useLocation();
  return !authenticated ? (
    <Navigate to="/login" state={{ from: location }} replace />
  ) : (
    children
  );
}
