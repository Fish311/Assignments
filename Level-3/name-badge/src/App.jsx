import { useState } from 'react'
import React from "react"
import './App.css'
import Badge from './components/badge'

const defaultFormData = {
    firstName: "",
    lastName: "",
    email: "",
    placeOfBirth: "",
    phoneNumber: "",
    favoriteFood: "",
    aboutYou: "",
}
export default function App() {

  const [formData, setFormData] = React.useState(defaultFormData)
  const [badges, setBadges] = React.useState([])
  const [isDisabled, setIsDisabled] = React.useState(true)

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
      const newData = {
      ...prevFormData,
      [name]: value
      }
      validate(newData)
      return newData
    })
  }
  function validate(newFormData){
    //if all form data values are valid, then set isDisabled to false, else, set isDisabled to true
    if(newFormData.firstName.length >= 3 &&
       newFormData.lastName.length >= 3 &&
       newFormData.email.length >= 3 &&
       newFormData.placeOfBirth.length >= 3 &&
       newFormData.phoneNumber.length >= 3 &&
       newFormData.favoriteFood.length >= 3 &&
       newFormData.aboutYou.length >= 3) {
        setIsDisabled(false)
       }
      else {
        setIsDisabled(true)
      }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newBadges = [...badges]
    newBadges.push({...formData})
    setBadges(newBadges)
    setFormData(defaultFormData)
    setIsDisabled(true)
  }
  const badgesToRender = badges.map((badge) => {
    return (
      <li className="list-item">
        <Badge
          firstName={badge.firstName}
          lastName={badge.lastName}
          email={badge.email}
          placeOfBirth={badge.placeOfBirth}
          phoneNumber={badge.phoneNumber}
          favoriteFood={badge.favoriteFood}
          aboutYou={badge.aboutYou}
        />
      </li>
    )
  })
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="text"
            placeholder="First Name"
            className="form--input"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
            minlength="3"
            required
          />    
          <input
            type="text"
            placeholder="Last Name"
            className="form--input"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            minlength="3"
            required
          />
        </div>
        <div className="row">    
          <input 
            type="email" 
            placeholder="Email address"
            className="form--input"
            name="email"
            onChange={handleChange}
            value={formData.email}
            minlength="3"
            required
          />
          <input
            type="text"
            placeholder="Place of Birth"
            className="form--input"
            name="placeOfBirth"
            onChange={handleChange}
            value={formData.placeOfBirth}
            minlength="3"
            required
          />
        </div>
        <div className="row">
          <input
            type="tel"
            placeholder="Phone"
            className="form--input"
            name="phoneNumber"
            onChange={handleChange}
            value={formData.phoneNumber}
            minlength="10"
            maxlength="10"
            required
          />
          <input
            type="text"
            placeholder="Favorite Food"
            className="form--input"
            name="favoriteFood"
            onChange={handleChange}
            value={formData.favoriteFood}
            minlength="3"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Tell us about yourself"
          className="form-about-you"
          name="aboutYou"
          onChange={handleChange}
          value={formData.aboutYou}
          minlength="3"
          required
        />
        <button
          className="form--submit"
          disabled={isDisabled}
        >
          Submit
        </button>
      </form>
      <ul className="badge-list">
        {badgesToRender}
      </ul>
    </div>
  )
}


