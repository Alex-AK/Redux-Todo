import { ADD_TODO, TOGGLE_COMPLETED, CLEAR_COMPLETED } from '../actions/types';
import store from '../index';

const initialState = {
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
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};

export default rootReducer;
