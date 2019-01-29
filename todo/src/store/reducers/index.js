import { ADD_TODO, TOGGLE_COMPLETED } from '../actions/types';

export const initialState = {
  todos: [
    {
      task: 'todo app mvp',
      completed: false,
      id: 1234
    },
    {
      task: 'stretch goals',
      completed: false,
      id: 1235
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    default:
      return state;
  }
};

export default rootReducer;
