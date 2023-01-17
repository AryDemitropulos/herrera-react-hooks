import React, { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({ username: '', email: '' });

  const { username, email } = formState;

  function onInputChange({ target }) {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  }

  useEffect(() => {}, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <h3>Username: {username}</h3>
      <h3>Email: {email}</h3>
      <input
        type='text'
        name='username'
        placeholder='Username'
        className='form-control'
        onChange={onInputChange}
      />

      <input
        type='email'
        name='email'
        placeholder='Email'
        className='form-control mt-2'
        onChange={onInputChange}
      />

      {username === 'strider2' && <Message />}
    </>
  );
};
