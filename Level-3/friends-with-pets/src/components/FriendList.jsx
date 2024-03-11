import React from "react"
import data from "../data"
import Friend from "./Friend"

export default function FriendList () {
    const friends = data.map(item => {
        return (
            <Friend 
                name={item.name}
                age={item.age}
                pets={item.pets}
            />
        )
    })
    return (
        <div>
            {friends}
        </div>
    )
}