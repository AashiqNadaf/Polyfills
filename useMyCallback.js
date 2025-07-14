import { useEffect, useRef } from 'react';

const useMyCallback = (cb, deps) => {
  const callbackRef = useRef(null);

  if (
    !callbackRef.current ||
    JSON.stringify(callbackRef.current.deps) !== JSON.stringify(deps)
  ) {
    callbackRef.current = {
      callback: cb,
      deps,
    };
  }

  useEffect(() => {
    return () => {
      callbackRef.current = null;
    };
  }, []);

  return callbackRef.current.callback;
};

export { useMyCallback };
