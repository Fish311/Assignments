import React from "react"

export default function Card(props) {
    let dollarSigns
    if (props.item.price <= 500) {
        dollarSigns = "$"
    } else if (props.item.price > 500 && props.item.price <= 1000) {
        dollarSigns = "$$"
    } else if (props.item.price > 1000 ) {
        dollarSigns = "$$$"
    }
    let backgroundColor = "white"
    if (props.item.timeToGo === "Spring") {
        backgroundColor = "yellow"
    }
    else if (props.item.timeToGo === "Summer") {
        backgroundColor = "green"
    }
    else if (props.item.timeToGo === "Fall") {
        backgroundColor = "orange"
    }
    else if (props.item.timeToGo === "Winter") {
        backgroundColor = "#89CFF0"
    }
    return (
        <div className="card" style={{
            backgroundColor: backgroundColor
        }}>
            <img src={props.item.coverImg} className="card--image" />
            <div className="place">{props.item.place}</div>
            <div className="price">{dollarSigns}{props.item.price}</div>
            <div className="bestTime">Best time to go: {props.item.timeToGo}</div>
        </div>
    )
}