import React, { useState } from 'react';

const ClickMe =() =>{
    // const [inputValue, setinputValue] = useState('')
    const [isToggleOn, setIsToggleOn] = useState(true);

    const handleclick =()=>{
        alert('I was clicked')
    }
    
    const handleKeyDown = (event) => {
            if(event.key==="Enter"){
            alert('The Enter key was pressed, your input is:'+inputValue)
        }
      }

    const handleclickp3 =()=>{
        setIsToggleOn(prevState => !prevState);
    }
    
    const handleState = () => {
        return isToggleOn ? 'ON' : 'OFF'
    }

    return(
    // <button onClick={handleclick}>ClickMe</button>
    // <input value = {inputValue} 
    // onChange={(e) => setinputValue(e.target.value)} 
    // onKeyDown={handleKeyDown} 
    // placeholder="Please enter a key"/>
    <button onClick={handleclickp3}>{handleState()}</button>
    )
}

export default ClickMe