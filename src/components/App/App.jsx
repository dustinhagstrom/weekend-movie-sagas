import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import './App.css';
import Detail from '../Detail/Detail';
import { useState } from 'react';

function App() {


  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList/>
        </Route>
        <Route path="/detail/:id">
        <Detail />
        </Route>
        {/* Add Movie page */}
        
      </Router>
    </div>
  );
}

export default App;
