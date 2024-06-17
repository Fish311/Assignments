import React, { useState } from 'react'

export default function AddMovieForm(props) {
    const initInputs = { movieName: props.movieName || "", dateSeen: props.dateSeen || "", genre: props.genre || "", rating: props.rating || "" }
    const [inputs, setInputs] = useState(initInputs)
    
    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="movieName"
                value={inputs.movieName}
                onChange={handleChange}
                placeholder="Movie Name"/>
            <input
                type="text"
                name="dateSeen"
                value={inputs.dateSeen}
                onChange={handleChange}
                placeholder="Date you saw the movie"/>
            <input
                type="text"
                name="genre"
                value={inputs.genre}
                onChange={handleChange}
                placeholder="Movie genre"/>
            <input
                type="number"
                name="rating"
                value={inputs.rating}
                onChange={handleChange}
                placeholder="What you rate the movie from 1-10"/>
            <button>{props.btnText}</button>
        </form>
    )
}