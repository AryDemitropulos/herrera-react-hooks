import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Pruebas en el todoRedecer', () => {
  const initialState = [{ id: 1, todo: 'Demo TODO', done: false }];

  test('debe de regresar el estado inicial si no se manda accion', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test('debe de agregar un TODO', () => {
    const action = {
      payload: { id: 2, todo: 'Nuevo TODO', done: false },
      type: '[TODO] add todo',
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    //TODO: Jest Resumen: Usar el toContain para ver si un objeto esta en el array
    expect(newState).toContain(action.payload);
  });

  test('debe eliminar un TODO', () => {
    const action = {
      payload: 1,
      type: '[TODO] delete todo',
    };
    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test('debe hacer el toggle del done de un TODO', () => {
    const action = {
      payload: 1,
      type: '[TODO] toggle todo',
    };
    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBeTruthy();

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBeFalsy();
  });
});
