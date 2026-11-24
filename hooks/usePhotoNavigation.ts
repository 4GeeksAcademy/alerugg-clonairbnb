import { useState } from "react";

export const usePhotoNavigation = (total: number) => {
  const [index, setIndex] = useState(0);

  const goPrevious = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  return { index, goPrevious, goNext };
};
