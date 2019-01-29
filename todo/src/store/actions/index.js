import { ADD_TODO, TOGGLE_COMPLETED } from './types';

export const addTodo = task => {
  return {
    type: ADD_TODO,
    payload: {
      task: task,
      completed: false,
      id: Date.now()
    }
  };
};

export const toggleCompleted = id => {
  return {
    type: TOGGLE_COMPLETED,
    payload: id
  };
};
