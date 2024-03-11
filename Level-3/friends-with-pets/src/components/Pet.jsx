import React from "react"
import Friend from "./Friend"

export default function Pet(props) {
    return (
        <div className="pets">
            <div>
                Pet Name: {props.name}
            </div>
            <div>
                Pet Breed: {props.breed}
            </div>
        </div>
    )
}