import React from "react"

export default function Badge(props) {
    return (
        <div className="badge-container">
            <div className="title">Badge:</div>
            <div className="row-container">
                <div className="row badge-row">
                    <div>Name: {props.firstName} {props.lastName}</div>
                    <div>Phone: {props.phoneNumber}</div>
                </div>
                <div className="row badge-row">
                    <div>Place of birth: {props.placeOfBirth}</div>
                    <div>Favorite food: {props.favoriteFood}</div>
                </div>
                <div className="row badge-row">
                    <div>Email: {props.email}</div>
                </div>
                <div className="form-about-you badge-about-you">{props.aboutYou}</div>
            </div>
        </div>
    )
}