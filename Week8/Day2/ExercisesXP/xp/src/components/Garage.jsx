// Part III : Garage
import React from 'react';

// Use an attribute to pass a size to the Garage component, <Garage size="small" />.
const Garage=(props)=>{

    return (
        <h1>Who lives in my {props.size} Garage ?</h1>
    )
}

export default Garage
// Use the Garage component inside the Car component and pass the size ‘small’. The Garage component should render Who lives in my <size> Garage?