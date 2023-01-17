import { useState } from 'react';

export const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);

  function add(plus) {
    setCounter(counter + plus);
  }
  function substract(substraction) {
    add(-substraction);
  }
  function reset() {
    setCounter(initialValue);
  }

  return {
    counter,
    add,
    reset,
    substract,
  };
};
