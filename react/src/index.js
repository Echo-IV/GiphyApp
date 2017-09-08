import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import gifApp from './reducers/';
import App from './components/App.js';
import Favorited from './components/Favorited';

const store = createStore((gifApp),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>>
        <Route exact path='/' component={App} />
        <Route path="/favorited" component={Favorited} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app')
);
