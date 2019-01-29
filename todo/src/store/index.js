import { createStore } from 'redux';
import rootReducer from './reducers';

const loadedState = JSON.parse(localStorage.getItem('store'));

const store = createStore(
  rootReducer,
  loadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem('store', JSON.stringify(store.getState()));
});

export default store;
