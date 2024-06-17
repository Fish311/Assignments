import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import Movie from "./Movie"
import AddMovieForm from "./AddMovieForm"

export default function Movies() {
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
    <div>
      <h1>MOVIES</h1>
      { 
        movies.map(movie => 
          <Movie 
            {...movie} 
            key={movie._id}
            editMovie={editMovie}
            deleteMovie={deleteMovie}/>)
      }
      <div>Add a new movie you saw below!</div>
      <AddMovieForm
        submit={addMovie}
        btnText="Add Movie"
      />
    </div>
  )
}