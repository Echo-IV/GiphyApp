import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormContainer from '../containers/FormContainer';

class Header extends Component {
  render() {

    const { history } = this.props;

    return (
      <header>
        <h1>Giphy App !</h1>
        {history && history.location.pathname !== '/favorited' ?
          <FormContainer /> : null}

        <ul className="menu">
          {history && history.location.pathname === '/favorited' ?
            <li>
              <Link to="/">Résultats de la recherche</Link>
            </li>
            : <li>
              <Link to="/favorited">Favoris</Link>
            </li>}
        </ul>
      </header>
    )
  }
}

export default Header;