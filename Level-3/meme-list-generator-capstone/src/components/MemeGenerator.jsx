import React from 'react'
import Meme from './Meme'
import { v4 as uuidv4 } from 'uuid';
export default function MemeGenerator() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])
    const [memeList, setMemeList] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getMemeImage(event) {
        event.preventDefault()
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    function handleSubmit(event) {
        event.preventDefault()
        const newMemeList = [...memeList]
        newMemeList.push({...meme, id: uuidv4()})
        setMemeList(newMemeList)
    }
    function removeMeme(id) {
        const newMemeList = memeList.filter((meme) => {
            if (meme.id === id) {
                return false
            }
            return true
            
        })
        setMemeList(newMemeList)
    }
    function editMeme(newMeme) {
        const newMemeList = memeList.map((meme) => {
            if (meme.id === newMeme.id) {
                return newMeme
            }
            return meme
        })
        setMemeList(newMemeList)
    }
    const memesToRender = memeList.map((meme, index) => {
        return (
            <li className="list-item">
                <Meme
                    id={meme.id}
                    image={meme.randomImage}
                    topText={meme.topText}
                    bottomText={meme.bottomText}
                    showButton={true}
                    removeMeme={removeMeme}
                    editMeme={editMeme}
                />
            </li>
        )
    })
    return (
        <div>
            <form className="form">
                <div className="row">
                    <button
                        className="form-button"
                        onClick={getMemeImage}
                    >
                        Refresh Meme Image
                    </button>
                </div>
                <div className="row">
                    <input
                        type="text"
                        placeholder="Top Text"
                        className="form-input"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Bottom Text"
                        className="form-input"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <div className="row">
                    <button
                        type="submit"
                        className="form-button"
                        onClick={handleSubmit}
                    >
                        Save Your Meme!
                    </button>
                </div>
            </form>
            <Meme
                image={meme.randomImage}
                topText={meme.topText}
                bottomText={meme.bottomText}
                showButton={false}
            />
            <div className="meme-list-container">
                <div className="list-title">
                    SAVED MEMES
                </div>
                <ul className="meme-list">
                    {memesToRender}
                </ul>
            </div>
        </div>
    )
}