import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../../src/08-useReducer/components/TodoItem';

describe('Pruebas sobre el <TodoItem/>', () => {
  const todo = { id: 1, description: 'Demo TODO', done: false };
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  const props = {
    ...todo,
    onDeleteTodo: onDeleteTodoMock,
    onToggle: onToggleTodoMock,
  };

  //TODO: JEST: Probar funciones: Si sabes que vas a llamar a funciones mock => tengo que limpiar todos los mocks
  beforeEach(() => jest.clearAllMocks());

  test('debe de mostrar el Todo pendiente de completar', () => {
    render(<TodoItem {...props} />);

    //TODO: JEST: Forma de obtener un elemento: getByRole => los nombres de los roles no son siempre intuitivos. Si se pone un rol invalido, la consola te ofrece los roles disponibles en el Component
    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );

    //TODO: JEST: Forma de obtener un elemento: getByLabelText => apunta al aria-label
    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).not.toContain('text-decoration-line-through');

    //TODO: JEST: Forma de obtener un elemento: getByText => busca elementos que tengan un texto (innerText?)
    expect(screen.getByText(todo.description));
  });

  test('debe de llamar el Todo completado', () => {
    const todoCompleted = { ...todo, done: true };

    const todoDoneProps = {
      ...todoCompleted,
      onDeleteTodo: onDeleteTodoMock,
      onToggle: onToggleTodoMock,
    };
    render(<TodoItem {...todoDoneProps} />);

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('text-decoration-line-through');

    expect(screen.getByText(todo.description));
  });

  test('span debe de llamar al onToggleTodoMock al hacer click', () => {
    //TODO: JEST: NOTA: No debo testear en este caso, si el componente se pone en done: true cuando hago click, solo si llama a la funcion. No es responsabilidad del componente saber que cuando se hace click, se debe setear done: true. Eso lo define el padre en su funcion onToggleTodo
    render(<TodoItem {...props} />);

    const spanElement = screen.getByLabelText('span');
    //TODO: JEST: Probar Funciones: Disparar eventos: fireEvent.[EVENTO]([ELEMENTO])
    fireEvent.click(spanElement);

    //TODO: JEST: Probar Funciones: probar llamada de funcion con argumentos usando toHaveBeenCalledWith
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test('button debe de llamar al onDeleteTodo', () => {
    render(<TodoItem {...props} />);
    const deleteButton = screen.getByRole('button');

    fireEvent.click(deleteButton);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
