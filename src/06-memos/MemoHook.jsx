import { useEffect, useMemo, useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './Small';

const heavyStuff = (itaration = 100) => {
  for (let index = 0; index < itaration; index++) {
    console.log('Ahi vamos');
  }

  return `${itaration} iteraciones procesadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(400);
  const [show, setShow] = useState(true);
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);
  useEffect(() => {
    heavyStuff(counter);
  }, [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{memorizedValue}</h4>
      <button onClick={() => increment(1)} className='btn btn-primary mt-4'>
        +1
      </button>
      <button onClick={() => setShow(!show)} className='btn btn-primary mt-4'>
        Toggle Show: {JSON.stringify(show)}
      </button>
    </>
  );
};
