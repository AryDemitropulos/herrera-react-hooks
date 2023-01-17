import React, { useState } from 'react';
import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const { counter, add, substract, reset } = useCounter(0);

  return (
    <>
      <h1>Counter With Hook: {counter}</h1>
      <hr />
      <button className='btn btn-primary' onClick={() => add(1)}>
        +1
      </button>
      <button className='btn btn-primary' onClick={reset}>
        Reset
      </button>
      <button className='btn btn-primary' onClick={() => substract(1)}>
        -1
      </button>
    </>
  );
};
