import React, { useState } from 'react'
import AddMovieForm from './AddMovieForm'

export default function Movie(props) {
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div>
            { !editToggle ?
                <>
                    <h2>{ props.movieName }</h2>
                    <div>Date Seen: { props.dateSeen }</div>
                    <div>Genre: { props.genre }</div>
                    <div>Rating: { props.rating }</div>
                    <button
                        onClick={() => props.deleteMovie(props._id)}>Delete Movie
                    </button>
                    <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >Edit</button>
                </>
            :
            <>
                <AddMovieForm
                    movieName={props.movieName}
                    dateSeen={props.dateSeen}
                    genre={props.genre}
                    rating={props.rating}
                    _id={props._id}
                    btnText="Submit Edit"
                    submit={props.editMovie}
                    toggleEdit = {setEditToggle}
                />
                <button
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}
                >Close</button>
            </>
            }
        </div>
    )
}