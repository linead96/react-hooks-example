import React from 'react'
import './Person.css'

const person = ({name,age,click,changed,children}) => {
    return (
    <div className = 'Person'>
        <p onClick={click}>I'm a {name} and I am {age} years old!</p>
        <p>{children}</p>
        <input type="text" onChange={changed} defaultValue={name}></input>
    </div>
    )
}

export default person