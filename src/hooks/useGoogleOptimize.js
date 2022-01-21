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
          const variant = window.google_optimize.get(experimentId);
          if (typeof variant !== "undefined") setVariant(Number(variant));
          clearInterval(intervalId);
        }
      }, 100);
    })();
  });

  return variant;
};
