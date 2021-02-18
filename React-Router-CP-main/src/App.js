import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Filter from './Components/Filter';
import NavBar from './Components/NavBar';
import data from './Data'
import Trailer from "./Components/Trailer"


function App() {

  const [movieList, setMovieList] = useState(data)
  const [newTitle, setNewTitle] = useState("");
  const [newRate, setNewRate] = useState("");

  const handleFilter = (fTitle, fRate) => {
    setNewTitle(fTitle)
    setNewRate(fRate)
  }

  const handleAdd = (newMovie) => {
    setMovieList([...movieList, newMovie]);
  }
  return (
    <Router>

      <Route exact path='/' >
        <div className="">
          <NavBar handleAdd={handleAdd} handleFilter={handleFilter} />
          <Filter movieList={movieList} newRate={newRate} newTitle={newTitle} />

        </div>
      </Route>
      <Route exact path="/Trailer/:id" render={(props) => <Trailer movieList={movieList} {...props} />} />

    </Router>


  );
}

export default App;
