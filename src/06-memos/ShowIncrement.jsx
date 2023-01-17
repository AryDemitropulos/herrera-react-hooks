import React, { memo } from 'react';

export const ShowIncrement = memo(({ increment }) => {
  console.log('Me volvi a generar');
  return (
    <button onClick={increment} className='btn btn-primary mt-4'>
      +1
    </button>
  );
});
