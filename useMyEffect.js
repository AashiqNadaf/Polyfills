import { useRef } from "react";

const useMyEffect = (callback, dependencyArr) => {
  const isFirstRender = useRef(true);
  const prevDependency = useRef([]);

  if (isFirstRender.current) {
    isFirstRender.current = false;
    const cleanUp = callback();
    if (cleanUp && typeof cleanUp === "function") {
      cleanUp();
    }
    return;
  }

  const dependecyChange = dependencyArr
    ? JSON.stringify(dependencyArr) !== JSON.stringify(prevDependency.current)
    : true;

  if (dependecyChange) {
    const cleanUp = callback();
    if (cleanUp && typeof cleanUp === "function" && dependencyArr) {
      cleanUp();
    }
  }

  prevDependency.current = dependencyArr || [];
};

export default useMyEffect;
