import React, { useState, useEffect } from 'react';

function Vote() {
  const style_container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }

  
  const style_language = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid #ddd',
    padding: '10px',
    width: '300px',
    margin: '10px',
    backgroundColor: 'lightyellow',
    color: 'black',
    fontSize: '22px',
  }


  const style_button = {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'green',
    cursor: 'pointer',
    marginTop: '10px',}

  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])

  const addCount=(index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes +=1;
    setLanguages(newLanguages)
  }


  return(
    <>
      <div style = {style_container}>
        <h1>Vote your Language!</h1>
        {languages.map((languages, index) =>(
        <div key = {index} style= {style_language}>
          <h5>{languages.votes}</h5>
          <h5>                     </h5>
          <h5>{languages.name}</h5>
          <button style = {style_button} onClick={()=>addCount(index)}>Click Here!</button>
        </div>
        ))}
      </div>
    </>
  )

}

export default Vote