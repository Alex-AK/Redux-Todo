import { createStore } from 'redux';
import rootReducer from './reducers';

const loadState = () => {
  try {
    const storedState = JSON.parse(localStorage.getItem('store'));
    if (storedState === null) {
      return undefined;
    }
    return storedState;
  } catch (err) {
    return undefined;
  }
};

const store = createStore(
  rootReducer, // holds initial state and switch statement
  loadState(), // loads local storage if present, loads undefined if not
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem('store', JSON.stringify(store.getState()));
});

export default store;
