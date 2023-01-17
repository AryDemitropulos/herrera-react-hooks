import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const onIncrement = useCallback(
    (value = 1) => setCounter((val) => val + value),
    []
  );

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={() => onIncrement(5)} />
    </>
  );
};
