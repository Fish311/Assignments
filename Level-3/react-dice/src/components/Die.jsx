import React from "react"
import {useState} from "react"

export default function Die (props) {
    function handleClick () {
        props.handleClick(props.index)
    }
    return (
        <div
        onClick={handleClick}>
            {props.number}
        </div>
    )
}