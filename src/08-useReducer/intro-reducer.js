const ADDTODOTYPE = '[TODO] add todo';

const initialState = [
  { id: 1, todo: 'Recolectar piedra del Alma', done: false },
];

const todoReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case ADDTODOTYPE:
      return [...state, payload];

    default:
      break;
  }
  return state;
};

let todos = todoReducer();

const newTodo = { id: 2, todo: 'Recolectar piedra del Poder', done: false };

const addTodoAction = {
  type: ADDTODOTYPE,
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);
console.log(todos);
