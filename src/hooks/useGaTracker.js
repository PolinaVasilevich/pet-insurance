import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const useGaTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [location]);
};

export default useGaTracker;
