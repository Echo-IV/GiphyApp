import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import App from './components/App.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const savedFavorited = JSON.parse(localStorage.getItem("favorited")) || undefined;

const store = createStore(
  rootReducer,
  {
    favorites: savedFavorited
  },
  composeEnhancers(
    applyMiddleware(thunk)
  ),
);

let previousFavorites = store.getState().favorites;
const handleChangeFavorited = () => {
  const { favorites } = store.getState();

  if (previousFavorites !== favorites) {
    localStorage.setItem("favorited", JSON.stringify(favorites));
    previousFavorites = favorites;
  }
}

let subscribe = store.subscribe(handleChangeFavorited)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);