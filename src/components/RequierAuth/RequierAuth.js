import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../Firebase_init";

const RequierAuth = ({ children }) => {
  const [user] = useAuthState(auth);
  let location = useLocation();
  if (!user) {
    console.log(user, "user");
    return <Navigate to="/Login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequierAuth;
