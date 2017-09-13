import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchContainer from '../containers/SearchContainer';
import FavoritesContainer from '../containers/FavoritesContainer';

class App extends Component {
  render() {

    const { history } = this.props;

    return (
      <Router>
        <Switch history={history}>
          <Route exact path='/' component={SearchContainer} />
          <Route path="/favorited" component={FavoritesContainer} />
        </Switch>
      </Router>
    )
  }
}

export default App;
