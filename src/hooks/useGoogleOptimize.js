import { useEffect, useState } from "react";

export const useGoogleOptimize = (experimentId) => {
  const [variant, setVariant] = useState();

  useEffect(() => {
    (async () => {
      if (window.dataLayer) {
        await window.dataLayer.push({ event: "optimize.activate" });
      }
      const intervalId = setInterval(() => {
        if (window.google_optimize !== undefined) {
          setVariant(window.google_optimize.get(experimentId));
          clearInterval(intervalId);
        }
      }, 100);
    })();
  });

  return variant;
};
