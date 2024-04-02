import React from "react"
import axios from "axios"
export default function RandomColor() {
    const [color, setColor] = React.useState('white')
    React.useEffect(function(){
        axios({
            url: `https://x-colors.yurace.pro/api/random`,
            method: "GET"
        })
        .then(res => {
            console.log(res.data)
            setColor(res.data.hex)
        }) 
    }, [])
    console.log(color)
    return (
        <div style={{
            backgroundColor: color,
            height: '100vh',
            width: '100%'
        }}>

        </div>
    )
}