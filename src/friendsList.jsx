import React from "react"
import Data from "./data.js"
import Friends from "./friend.jsx"

export default function friendsList(props) {
    const friendComp= Data.map(person => {
        return<Friends name={person.name} age={person.age} pets={person.pets} />
    })
    return(
        <div className="container">
            {friendComp}
        </div>
    )
}