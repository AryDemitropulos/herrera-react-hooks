import React from 'react';
import Proptypes from 'prop-types';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length < 3) return;
    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        placeholder='Que hay que hacer?'
        type='text'
        name='description'
        className='form-control'
        value={description}
        onChange={onInputChange}
      />

      <button type='submit' className='btn btn-primary mt-4'>
        Agregar
      </button>
    </form>
  );
};

TodoAdd.proptypes = {
  onNewTodo: Proptypes.func.isRequired,
};
