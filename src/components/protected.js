import React from "react";
import { Navigate } from "react-router-dom";

function Nav ({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default Nav;