import React, { useContext } from 'react'
import { UglyContext } from "./UglyContextProvider"

export default function Form(props) {

    const {title, imgUrl, description, handleChange, handleSubmit} = useContext(UglyContext)

    return (
        <form className="main-form">
            <div className="row">
                <input
                    className="main-form-input"
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={handleChange}
                >
                </input>

                <input
                    className="main-form-input"
                    type="text"
                    placeholder="Image URL"
                    name="imgUrl"
                    value={imgUrl}
                    onChange={handleChange}
                >

                </input>

                <input
                    className="main-form-input"
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={description}
                    onChange={handleChange}
                >
                
                </input>
            </div>
            <div className="row submit">
                <button onClick={handleSubmit} className="submit-button">
                    SUBMIT
                </button>
            </div>
        </form>
    )
}