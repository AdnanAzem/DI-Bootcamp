import React, { useState, useEffect } from 'react';

function Counter() {
    const[counter, setCounter] = useState(0)
    
    const handleClick = () => {
        setCounter(prevCounter => {
            const newCounter = prevCounter+1
        
        console.log(newCounter);
        if (newCounter > 4){
            throw new Error ('I crashed')
        }
        return newCounter
    })
    }

    return (
        <>
            <button onClick={()=> handleClick()}>Click</button>
            <h2>{counter}</h2>
        </>
    )
}

export default Counter