import React, { useContext} from 'react'
import axios from "axios"

export const UglyContext = React.createContext()

export function UglyContextProvider(props) {
    
    //variables and states

    const defaultFormData = {
        title: "",
        imgUrl: "",
        description: ""
    }
    const [formData, setFormData] = React.useState({
        title: "",
        imgUrl: "",
        description: "",
    })

    const [uglyThings, setUglyThings] = React.useState([{
        title: "",
        imgUrl: "",
        description: "",
        _id: ""
    }])

    
    const [dependencyCounter, setDependencyCounter] = React.useState(0)

    //hooks
    React.useEffect(() => {
        axios.get("https://api.vschool.io/bradgayheart/thing")
            .then(res => {
                setUglyThings(res.data.map(item => {
                    return {
                        title: item.title,
                        description: item.description,
                        imgUrl: item.imgUrl,
                        _id: item._id
                    }
                }))
            })
    }, [dependencyCounter])

    //functions
    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
            ...prevFormData,
            [name]: value
            }
        })
        
    }

    function handleSubmit(event) {
        event.preventDefault()

        axios.post("https://api.vschool.io/bradgayheart/thing", formData)
            .then(res => {
                setDependencyCounter(depend => depend + 1)
            })
            .catch(err => console.log(err))
            setFormData(defaultFormData)
    }

    function handleDelete(id) {
        axios.delete(`https://api.vschool.io/bradgayheart/thing/${id}`)
        .then(res => {
            setDependencyCounter(depend => depend - 1)
        })
        .catch(err => console.log(err))
    }

    function handleEdit(id, uglyThing) {
        axios.put(`https://api.vschool.io/bradgayheart/thing/${id}`, uglyThing)
            .then(res => {
                setDependencyCounter(depend => depend + 1)
            })
            .catch(err => console.log(err))
    }

    return (
        <UglyContext.Provider value={{
            uglyThings: uglyThings,
            _id: formData._id,
            title: formData.title,
            description: formData.description,
            imgUrl: formData.imgUrl,
            handleChange: handleChange,
            handleSubmit: handleSubmit,
            handleDelete: handleDelete,
            handleEdit: handleEdit
        }}>
            {props.children}
        </UglyContext.Provider>
    )
}