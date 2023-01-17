import React, { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();
  console.log(inputRef);

  function handleFocus() {
    inputRef.current.select();
  }

  return (
    <>
      <h1> Focus Screen</h1>
      <hr />
      <input
        type='text'
        name='name'
        placeholder='Ingrese su nombre'
        className='form-control'
      />
      <input
        ref={inputRef}
        type='text'
        name='name'
        placeholder='Ingrese su nombre'
        className='form-control'
      />
      <input
        type='text'
        name='name'
        placeholder='Ingrese su nombre'
        className='form-control'
      />

      <button onClick={handleFocus} className='btn btn-primary mt-4'>
        Set Focus
      </button>
    </>
  );
};
