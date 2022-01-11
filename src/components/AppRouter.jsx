import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Registration, FirstStep, SecondStep, ThirdStep } from "../pages";

import { RouteNames } from "../router";

const AppRouter = () => (
  <Routes>
    <Route path={RouteNames.HOME} element={<Home />} />
    <Route path={RouteNames.REGISTRATION} element={<Registration />}>
      <Route path="1" element={<FirstStep />} />
      <Route path="2" element={<SecondStep />} />
      <Route path="3" element={<ThirdStep />} />
    </Route>
  </Routes>
);

export default AppRouter;
