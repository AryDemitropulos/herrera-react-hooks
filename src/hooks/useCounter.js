import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  function increment(plus = 1) {
    setCounter((current) => current + plus);
  }
  function decrement(substraction = 1) {
    increment(-substraction);
  }
  function reset() {
    setCounter(initialValue);
  }

  return {
    counter,
    increment,
    reset,
    decrement,
  };
};
