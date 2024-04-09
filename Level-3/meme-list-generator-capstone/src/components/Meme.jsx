import React from 'react'

export default function Meme(props) {
    const [meme, setMeme] = React.useState({
        image: props.image,
        topText: props.topText,
        bottomText: props.bottomText
    })
    const [showEdit, setShowEdit] = React.useState(false)
    const [initialState, setInitialState] = React.useState({
            image: props.image,
            topText: props.topText,
            bottomText: props.bottomText
        
    })

    React.useEffect(() => {
        setMeme({
            image: props.image,
            topText: props.topText,
            bottomText: props.bottomText
        })
        setInitialState({
            image: props.image,
            topText: props.topText,
            bottomText: props.bottomText
        })
    }, [props.image, props.topText, props.bottomText])

    function deleteMeme(){
        props.removeMeme(props.id)
    }
    function editMeme(props){
        setShowEdit(true)
    }
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    function saveChange() {
        props.editMeme(meme)
        setInitialState(meme)
        setShowEdit(false)
    }
    function cancelChange() {
        setShowEdit(false)
        setMeme(initialState)
    }
    return (
        <>
            <div className="meme">
                <img src={meme.image} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            <div className="button-container">
                {props.showButton && (
                    <>
                        <button
                            className="meme-button"
                            onClick={deleteMeme}
                        >
                            DELETE
                        </button>
                        <button
                            className="meme-button"
                            onClick={editMeme}
                            >
                                EDIT
                        </button>
                        {showEdit && (
                            <div className="edit-container">
                                <input
                                    type="text"
                                    className="edit-text"
                                    placeholder="New Top Text"
                                    name="topText"
                                    value={meme.topText}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    className="edit-text"
                                    placeholder="New Bottom Text"
                                    name="bottomText"
                                    value={meme.bottomText}
                                    onChange={handleChange}
                                />
                                <button
                                    className="edit-button"
                                    onClick={saveChange}
                                >
                                    SAVE CHANGES
                                </button>
                                <button
                                    className="edit-button"
                                    onClick={cancelChange}
                                >
                                    CANCEL CHANGES
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    )
}