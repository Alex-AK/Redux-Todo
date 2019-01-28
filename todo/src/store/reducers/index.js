import { ADD_TODO, TOGGLE_COMPLETED } from '../actions/types';

export const initialState = {
  todos: [
    {
      task: 'complete todo mvp',
      completed: false,
      id: 1234
    },
    {
      task: 'complete todo stretch',
      completed: false,
      id: 1234
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
      return {};
    default:
      return state;
  }
};

export default rootReducer;
