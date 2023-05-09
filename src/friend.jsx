import React from "react"
import Pets from "./pets.jsx"

export default function friends(props) {
    const petList=props.pets.map(pet => {
        return <Pets name={pet.name} breed={pet.breed} />
    })
    console.log(props)
    console.log(props.pets)
    return(
        <div className="friends">  
            <h3 className="one">This is {props.name}</h3>
            <div className="two">Age: {props.age} years old</div>
            <div className="three">Has pets: {petList}</div>
        </div>
    )
}
