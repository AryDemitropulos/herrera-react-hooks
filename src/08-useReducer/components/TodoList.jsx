import React, { useReducer } from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [], onDeleteTodo, onToggle }) => {
  return (
    <ul className='list-group'>
      {todos.map((todo) => (
        <TodoItem
          {...todo}
          key={todo.id}
          onDeleteTodo={onDeleteTodo}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};
