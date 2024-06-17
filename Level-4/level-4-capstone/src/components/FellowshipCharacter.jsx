import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function FellowshipCharacter() {
    const [foundChar, setFoundChar] = useState({})
    const {charId} = useParams()

    useEffect(() => {
        const config = {
            headers: { Authorization: "Bearer wS6oXk6-v1H5CbUvuieL" }
        };
        axios
            .get(
                `https://the-one-api.dev/v2/character/${charId}`, config
            )
            .then((result) => {
                setFoundChar(result.data.docs[0])
            })
    },[])
    if(!foundChar) {
        return <div>...loading</div>
    }

    return (
        <div className="char-container">
            <h1>
                {foundChar.name ? foundChar.name : "NA"}
            </h1>
            <div className="char-info">
                Race: {foundChar.race ? foundChar.race : "NA"}
            </div>
            <div className="char-info">
                Gender: {foundChar.gender ? foundChar.gender : "NA"}
            </div>
            <div className="char-info">
                Spouse: {foundChar.spouse ? foundChar.spouse : "NA"}
            </div>
            <div className="char-info">
                Birthday: {foundChar.birth ? foundChar.birth : "NA"}
            </div>
            <div className="char-info">
                Death: {foundChar.death ? foundChar.death : "NA"}
            </div>
            <div className="char-info">
                Hair Color: {foundChar.hair ? foundChar.hair : "NA"}
            </div>
            <div className="char-info">
                Height: {foundChar.height ? foundChar.height : "NA"}
            </div>
            <div className="char-info">
                Realm: {foundChar.realm ? foundChar.realm : "NA"}
            </div>
        </div>
    )
}