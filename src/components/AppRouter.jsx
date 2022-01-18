import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Registration } from "../pages";

import { RouteNames } from "../router";
import MultiStep from "./MultiStep";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={RouteNames.HOME} element={<Home />} />
      <Route path={RouteNames.REGISTRATION} element={<Registration />}>
        <Route path=":step" element={<MultiStep />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
