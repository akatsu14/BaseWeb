import Landing from "@components/layout/Landing";
import Auth from "@screens/Auth";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
const RootNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Auth authRoute="login" />} />
        <Route exact path="/register" element={<Auth authRoute="register" />} />
        
      </Routes>
    </Router>
  );
};

export default RootNavigation;
