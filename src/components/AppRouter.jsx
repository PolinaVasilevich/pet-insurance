import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Registration, FirstStep, SecondStep, ThirdStep } from "../pages";
import FourthStep from "../pages/FourthStep";
import UserPage from "../pages/UserPage";

import { RouteNames } from "../router";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={RouteNames.HOME} element={<Home />} />
      <Route path={RouteNames.REGISTRATION} element={<Registration />}>
        <Route path="1" element={<FirstStep />} />
        <Route path="2" element={<SecondStep />} />
        <Route path="3" element={<ThirdStep />} />
        <Route path="4" element={<FourthStep />} />
      </Route>
      <Route path={RouteNames.USERPAGE} element={<UserPage />} />
    </Routes>
  );
};

export default AppRouter;
