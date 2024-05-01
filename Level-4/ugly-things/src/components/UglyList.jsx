import React, { useContext } from 'react'
import {UglyContext} from "./UglyContextProvider"
import Ugly from "./Ugly"

export default function UglyList() {
    const {uglyThings, handleDelete, handleEdit} = useContext(UglyContext)

    return    (
        <ul className="ugly-list">
            {uglyThings.map((thing) => {
            return (
                
                <li key={thing._id}>
                    <Ugly
                        title={thing.title}
                        imgUrl={thing.imgUrl}
                        description={thing.description}
                        _id={thing._id}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    />
                </li>
            )
    })}
    </ul>
    )
}