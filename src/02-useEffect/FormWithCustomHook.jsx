import React, { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { Message } from './Message';

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } =
    useForm({
      username: '',
      email: '',
      password: '',
    });

  return (
    <>
      <h1>Formulario With CUstom Hook</h1>
      <hr />
      <h3>Username: {username}</h3>
      <h3>Email: {email}</h3>
      <input
        type='text'
        name='username'
        value={username}
        onChange={onInputChange}
        placeholder='Username'
        className='form-control'
      />

      <input
        type='email'
        name='email'
        value={email}
        onChange={onInputChange}
        placeholder='Email'
        className='form-control mt-2'
      />

      <input
        type='password'
        name='password'
        value={password}
        onChange={onInputChange}
        placeholder='Password'
        className='form-control mt-2'
      />

      <button onClick={onResetForm} className='btn btn-primary mt-2'>
        Borrar
      </button>
    </>
  );
};
