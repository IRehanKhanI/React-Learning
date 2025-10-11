import React, { useState } from 'react'

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(1)
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName("Rehan")
    }
    const IncrementAge = () => {
        setAge(age + 2)
    }
    const toggleEmployerStatus = () => {
        setIsEmployed(!isEmployed)
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Update Name</button>

            <p>Age: {age}</p>
            <button onClick={IncrementAge}>Increment Age</button>

            <p>Status: {isEmployed ? "Employed" : "Not employed"}</p>
            <button onClick={toggleEmployerStatus}>Is Employed</button>
        </div>
    )
}
export default MyComponent 