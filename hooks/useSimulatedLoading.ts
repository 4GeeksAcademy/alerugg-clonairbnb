import { useEffect, useState } from "react";

export const useSimulatedLoading = (delayMs: number) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsLoading(false), delayMs);
    return () => clearTimeout(timeoutId);
  }, [delayMs]);

  return isLoading;
};
