import React from "react";

import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import useGaTracker from "./hooks/useGaTracker";

const App = () => {
  useGaTracker();
  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
