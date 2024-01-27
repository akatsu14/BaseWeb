import { AuthContext } from "@contexts/AuthContexts";
import { ScreenName } from "@navigates/ScreenName";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../LoadingScreen";
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);
  if (authLoading) {
    return <LoadingScreen />;
  }
  if (!isAuthenticated) navigate(ScreenName.Login, { replace: true });
  return children;
};

export default ProtectedRoute;
