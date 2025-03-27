import React, { useState } from 'react';

const Phone= () => 
    {
const [brand, setBrand] = useState('Samsung')
const [model, setModel] = useState('Galaxy S20')
const [color, setColor] = useState('black')
const [year, setYear] = useState(2020)

const changeColor = () => {
    return setColor('blue')
}

return (
    <>
    <h1>My phone is a {brand}</h1>
    <h3>It is a {color} {model} from {year}</h3>
    <button onClick={changeColor}>Change Color</button>
    </>
)
}

export default Phone