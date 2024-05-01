import React, { useContext } from "react"
import {UglyContext} from "./UglyContextProvider"

export default function Ugly (props) {

    const { handleEdit} = React.useContext(UglyContext)

    const [uglyThing, setUglyThing] = React.useState({
        title: props.title,
        description: props.description,
        imgUrl: props.imgUrl,
        _id: props._id
    })

    const [initialState, setInitialState] = React.useState({
        title: props.title,
        description: props.description,
        imgUrl: props.imgUrl,
        _id: props._id
    })

    const [displayEdit, setDisplayEdit] = React.useState(false)

    React.useEffect(() => {
        setUglyThing({
            ...uglyThing,
            title: props.title,
            description: props.description,
        })
        setInitialState({
            ...initialState,
            title: props.title,
            description: props.description,
        })
    }, [props.title, props.description])

    function handleChange(event) {
        const {name, value} = event.target
        setUglyThing(prevUglyThing => {
            return {
            ...prevUglyThing,
            [name]: value
            }
        })
        
    }

    function showEdit() {
        setDisplayEdit(true)
    }
    function saveEdit() {
        handleEdit(props._id, uglyThing)
        setInitialState(uglyThing)
        setDisplayEdit(false)
    }
    function cancelEdit() {
        setUglyThing(initialState)
        setDisplayEdit(false)
    }
    return(
        <div className="ugly-container">
            <div className="ugly-info">
                <h1>{uglyThing.title}</h1>
                <div className="description">{uglyThing.description}</div>
            </div>
            <img src={uglyThing.imgUrl}></img>
            <div className="edit-delete">
                <button onClick={showEdit}>
                    EDIT
                </button>
                <button type="button" onClick={() => props.handleDelete(props._id)}>
                    DELETE
                </button>
            </div>
            {displayEdit && (
            <div className="ugly-edit">
                <form className="edit-form">
                    <div className="edit-row">
                        <input type="text" placeholder="Edit Title" name="title" value={uglyThing.title} onChange={handleChange}></input>
                        <input type="text" placeholder="Edit Description" name="description" value={uglyThing.description} onChange={handleChange}></input>
                    </div>
                    <div className="edit-row">
                        <button type="button" onClick={saveEdit}>Submit Changes</button>
                        <button type="button" onClick={cancelEdit}>Cancel Changes</button>
                    </div>
                </form>
            </div>
            )}
        </div>
    )
}