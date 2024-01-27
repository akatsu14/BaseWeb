import Landing from "@components/layout/Landing";
import ProtectedRoute from "@components/routing/ProtectedRoute";
import Auth from "@screens/Auth";
import DashBoard from "@screens/DashBoard";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ScreenName } from "./ScreenName";
const RootNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route
          exact
          path={ScreenName.Login}
          element={<Auth authRoute="login" />}
        />
        <Route
          exact
          path={ScreenName.Register}
          element={<Auth authRoute="register" />}
        />
        <Route
          exact
          path={ScreenName.DashBoard}
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default RootNavigation;
