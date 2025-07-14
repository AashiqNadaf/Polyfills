import { useEffect, useRef } from 'react';

const useMyMemo = (cb, deps) => {
  const resultValue = useRef(null);
  if (
    !resultValue.current ||
    JSON.stringify(resultValue.current.defs) !== JSON.stringify(deps)
  ) {
    resultValue.current = {
      value: cb(),
      deps,
    };
  }

  useEffect(() => {
    return () => {
      resultValue.current = null;
    };
  }, []);

  return resultValue.current.value;
};

export { useMyMemo };
