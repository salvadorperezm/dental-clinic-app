/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const [accessToken, setAccessToken] = useState(undefined);

  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken"));
  }, []);

  if (accessToken === null) {
    return <Navigate to={"/"} replace />;
  }

  return children;
};
