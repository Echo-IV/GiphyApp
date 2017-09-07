import React from 'react';
import {Link} from 'react-router-dom';
import RenderFavorited from './RenderFavorited';

const Favorited = () => {
  return (
    <div>
      <header>
        <h1>Giphy App !</h1>
        <ul>
          <li>
            <Link to="/">Chercher un gif</Link>
          </li>
        </ul>
      </header>
      <main>
        <div>
          <RenderFavorited/>
        </div>
      </main>
    </div>
  )
}

export default Favorited;
