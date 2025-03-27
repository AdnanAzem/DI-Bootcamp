import React, { useState, useEffect } from 'react';

function Color () {
    // const favoriteColor = 'red'
    const [favoriteColor, setFavoriteColor] = useState("red")

    useEffect(()=> {
        alert('useEffect reached');
        setFavoriteColor("yellow");
    }, [])

    const handleColor = () => {
         setFavoriteColor("blue")
    }

    return(
        <header>
            <h1>My favorite color is <span style={{ fontStyle: 'italic' }}>{favoriteColor }</span> </h1>
            <button onClick={handleColor}>Change color in blue</button>
        </header>
    )
}


export default Color;