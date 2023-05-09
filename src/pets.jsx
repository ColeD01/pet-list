import React from "react"

export default function pets(props) {
    return(
        <div>
            <li className="petList">{props.name}, Breed: {props.breed}</li>
        </div>
    )
}