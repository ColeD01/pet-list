import React from "react"
import FriendsList from "./friendsList.jsx"

export default function app() {
    return ( 
        <div>
            <h1 className="title">List of Friends</h1>
            <hr className="break" />
         <FriendsList /> 
        </div>
    )
}