import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Search from '../Search.jsx';
import Favorites from '../Favorites.jsx'

function App() {
  return (
    <>
      <div>
        <h1>Giphy Search!</h1>
      </div>
        <Route exact path='/'>
          <Search/>
        </Route>
        <Route exact path='/favorites'>
          <Favorites/>
        </Route>

    </>











  );
}


export default App;
