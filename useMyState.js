import { useReducer, useRef } from 'react';

const useMyState = (initialValue) => {
  const [, dispatch] = useReducer((x) => x + 1, 0);
  const myState = useRef(initialValue);

  if (myState.current === undefined) {
    myState.current = initialValue;
  }

  const setMyState = (value) => {
    if (typeof value === 'function') {
      myState.current = value(myState.current);
    } else {
      myState.current = value;
    }
    dispatch();
  };

  return [myState.current, setMyState];
};

export default useMyState;
