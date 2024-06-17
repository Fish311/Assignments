import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import Movies from "./components/Movies"
import Movie from "./components/Movie"
import AddMovieForm from "./components/AddMovieForm"
import Home from './components/Home'
import About from './components/About'
import MovieReviews from './components/MovieReviews'
function App() {
  const [movies, setMovies] = useState([])

  function getMovies() {
    axios.get("/api/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.log(err))
  }

  function addMovie(newMovie) {
    axios.post("/api/movies", newMovie)
      .then(res => setMovies(prevMovies => [...prevMovies, res.data]))
      .catch(err => console.log(err))
  }

  function deleteMovie(movieId) {
    axios.delete(`/api/movies/${movieId}`)
      .then(res => {
        setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
      })
      .catch(err => console.log(err))
  }

  function editMovie(updates, movieId) {
    axios.put(`/api/movies/${movieId}`, updates)
      .then(res => {
        setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    // <div>
    //   {/* <h1>MOVIES</h1>
    //   { 
    //     movies.map(movie => 
    //       <Movie 
    //         {...movie} 
    //         key={movie._id}
    //         editMovie={editMovie}
    //         deleteMovie={deleteMovie}/>)
    //   }
    //   <div>Add a new movie you saw below!</div>
    //   <AddMovieForm
    //     submit={addMovie}
    //     btnText="Add Movie"
    //   /> */}
    //   <Movies/>
    // </div>
    <Router>

      <nav>
      <Link className="nav-text" to="/">
          Home
        </Link>
        <Link className="nav-text" to="/about">
          About
        </Link>
        <Link className="nav-text" to="/movies">
          Movies
        </Link>
        <Link className="nav-text" to="/movieReviews">
          Reviews
        </Link>
      </nav>

      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/movies" element={<Movies />} />
        <Route path ="/movieReviews" element={<MovieReviews />} />
      </Routes>
    </Router>
  )
}

export default App
