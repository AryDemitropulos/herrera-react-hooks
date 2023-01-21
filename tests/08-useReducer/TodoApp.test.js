import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
//TODO: JEST: mocks de hooks: Usar ruta completa, no el archivo de barril
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('Pruebas sobre <TodoApp/>', () => {
  useTodos.mockReturnValue({
    todos: [
      { id: 1, description: 'Demo TODO 1', done: false },
      { id: 2, description: 'Demo TODO 2', done: false },
      { id: 3, description: 'Demo TODO 3', done: true },
    ],
    todosCount: 3,
    pendingTodosCount: 1,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });

  test('debe de mostrar el componente correctamente', () => {
    render(<TodoApp />);
    //screen.debug();

    expect(screen.getByText('Demo TODO 1')).toBeTruthy();
    expect(screen.getByText('Demo TODO 2')).toBeTruthy();
    expect(screen.getByText('Demo TODO 3')).toBeTruthy();

    expect(screen.getByRole('textbox').placeholder).toBe('Que hay que hacer?');
  });
});
