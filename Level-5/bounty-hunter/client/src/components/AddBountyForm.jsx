import React, { useState } from 'react'

export default function AddBountyForm(props) {
    const initInputs = { firstName: props.firstName || "", lastName: props.lastName || "", living: props.living || true, bountyAmount: props.bountyAmount || "", type: props.type || ""}
    const [inputs, setInputs] = useState(initInputs)
    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }
    return (
        <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="firstName"
                    value={inputs.firstName}
                    onChange={handleChange}
                    placeholder="First Name"/>

                <input 
                    type="text"
                    name="lastName"
                    value={inputs.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"/>

                <input 
                    type="number"
                    name="bountyAmount"
                    value={inputs.bountyAmount}
                    onChange={handleChange}
                    placeholder="Bounty Amount"/>    
                <label>
                    <input 
                        type="radio" 
                        name="type" 
                        value="Jedi"
                        onChange={handleChange}/>
                    Jedi
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="type" 
                        value="Sith" 
                        onChange={handleChange}/>
                    Sith
                </label>
                <button>{props.btnText}</button>
        </form>
    )
}