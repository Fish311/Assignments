import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm'


export default function Bounty(props) {
    const [editToggle, setEditToggle] = useState(false)

  
    return (
        <div>
            { !editToggle ?
                <>
                    <h2>{ props.firstName } { props.lastName }</h2>
                    <div>Living: { props.living ? 'Yes' : 'No' }</div>
                    <div>Bounty Amount: {props.bountyAmount}</div>
                    <div>Type: {props.type}</div>
                    <button
                        onClick={() => props.deleteBounty(props._id)}>Delete Bounty
                    </button>
                    <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >Edit</button>
                </>
            :
            <>
                <AddBountyForm
                    firstName={props.firstName}
                    lastName={props.lastName}
                    living={props.living}
                    bountyAmount={props.bountyAmount}
                    type={props.type}
                    _id={props._id}
                    btnText="Submit Edit"
                    submit={props.editBounty}
                    toggleEdit = {setEditToggle}
                />
                <button
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}
                >Close</button>
            </>
            }
        </div>
    )
}