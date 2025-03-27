import React, { useState, useEffect } from 'react';
import Garage from "./Garage";

const CarInfo = (props) =>{
    const [color, setColor] = useState('red')  
    return(
        <>
        <h1>This car is a {color} {props.car.model}</h1>
        <Garage size='small'/>
        </>
    )
}
export default CarInfo;