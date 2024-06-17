import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';


export default function FellowshipList() { 

    const [fellowshipList, setFellowshiplist] = React.useState([])

    useEffect(() => {
        const config = {
            headers: { Authorization: "Bearer wS6oXk6-v1H5CbUvuieL" }
        };
        const fellowshipNames = ['Aragorn II Elessar', "Legolas", "Gimli", "Gandalf", "Boromir", "Frodo Baggins", "Samwise Gamgee", "Meriadoc Brandybuck", "Peregrin Took",]
        axios
            .get(
                `https://the-one-api.dev/v2/character`, config
            )
            .then((result) => {

                const charList = result.data.docs.filter((item) => {
                    return fellowshipNames.find((name) => {
                        return name === item.name
                    })
                })
                setFellowshiplist(charList)
            })
            .catch((err) => {
                console.log(err)
            })
    },[]) 

    const characters = fellowshipList.map((char) => {
        
        return (
        <div key={char._id}>
            <Link to={`/characters/${char._id}`}>{char.name}</Link>
        </div>
        )
    })
    return (
        <div className="list-container">
            <h1>LIST OF CHARACTERS IN THE FELLOWSHIP</h1>
            {characters}
        </div>
    )
}