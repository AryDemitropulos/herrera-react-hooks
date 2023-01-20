import React from 'react';
import Proptypes from 'prop-types';

export const TodoItem = ({ id, description, done, onDeleteTodo, onToggle }) => {
  return (
    <li
      onClick={() => onToggle(id)}
      className='list-group-item d-flex justify-content-between'
    >
      <span
        className={`align-self-center ${
          done ? 'text-decoration-line-through' : ''
        } `}
        aria-label='span'
      >
        {description}
      </span>

      <button className='btn btn-danger' onClick={() => onDeleteTodo(id)}>
        Borrar
      </button>
    </li>
  );
};

TodoItem.proptypes = {
  id: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  done: Proptypes.bool.isRequired,
  onDeleteTodo: Proptypes.func.isRequired,
  onToggle: Proptypes.func.isRequired,
};
