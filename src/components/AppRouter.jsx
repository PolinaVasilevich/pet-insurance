import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Registration } from "../pages";

import UserPage from "../pages/UserPage";

import { RouteNames } from "../router";
import MultiStep from "./MultiStep";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={RouteNames.HOME} element={<Home />} />
      <Route path={RouteNames.REGISTRATION} element={<Registration />}>
        <Route path="1" element={<MultiStep />} />
        <Route path="2" element={<MultiStep />} />
        <Route path="3" element={<MultiStep />} />
        <Route path="4" element={<MultiStep />} />
      </Route>
      <Route path={RouteNames.USERPAGE} element={<UserPage />} />
    </Routes>
  );
};

export default AppRouter;
