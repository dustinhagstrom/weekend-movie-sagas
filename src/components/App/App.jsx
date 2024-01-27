import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import './App.css';
import Detail from '../Detail/Detail';
import { useState } from 'react';

function App() {

  const [movieDetail, setMovieDetail] = useState({});

  const getMovieDetail = (movie) => {
    setMovieDetail(movie);
  }
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList getMovieDetail={getMovieDetail}/>
        </Route>
        <Route path="/detail" exact>
        <Detail movieDetail={movieDetail}/>
        </Route>
        {/* Add Movie page */}
        
      </Router>
    </div>
  );
}

export default App;
