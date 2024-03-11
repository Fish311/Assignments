import React from "react"
import FriendList from "./FriendList"
import data from "../data.js"
import Pet from "./Pet"

export default function Friend (props){
    const pet = props.pets.map(item => {
        return (
            <Pet 
                name={item.name}
                breed={item.breed}
            />
        )
    })
    return (
        <div className="container">
            <div>
                {props.name}
            </div>
            <div>
                {props.age}
            </div>
            <div>
                {pet}
            </div>
        </div>
    )
}