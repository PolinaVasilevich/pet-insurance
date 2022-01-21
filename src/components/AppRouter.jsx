import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Registration } from "../pages";
import Checkout from "../pages/Checkout";

import { RouteNames } from "../router";
import MultiStep from "./MultiStep";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={RouteNames.HOME} element={<Home />} />
      <Route path={RouteNames.REGISTRATION} element={<Registration />}>
        <Route path=":step" element={<MultiStep />} />
      </Route>
      <Route path={RouteNames.CHECKOUT} element={<Checkout />} />
    </Routes>
  );
};

export default AppRouter;
