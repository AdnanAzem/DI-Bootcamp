import React, { useState, useEffect } from 'react';


class Color extends React.Component {
    constructor() {
        super()
        this.state = {
            favoriteColor : 'red',
            show: true
        }
    }

    // update only if fav color changes
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.favoriteColor !== this.state.favoriteColor
        // if(nextState.favoriteColor !== this.state.favoriteColor)
        // {return false}
      }
    
    updateColor = () => {
        this.setState({favoriteColor:'blue'})
      }

    componentDidUpdate(){
        setTimeout(()=>{
            this.setState({favoriteColor:'yellow'})}, 2000)
            console.log("after update")
        }

    getSnapshotBeforeUpdate(){
        console.log("in getSnapshotBeforeUpdate")
    }

    updateShow = () =>{
        this.setState({show:false})

    }

      render(){
        return (
            <header>
                <h1>My favorite color is <span style={{ fontStyle: 'italic' }}>{this.state.favoriteColor}</span> </h1>
                <button onClick={(this.updateColor)}>Change color in blue</button> <br/>
                <button onClick={(this.updateShow)}>Delete Header</button>
                {this.state.show && <Child />}
            </header>
            )
        }
    }
    class Child extends React.Component {

        componentWillUnmount(){
            alert('The ... is about to be unmoiunted')
        }

        render(){
            return <h2>Hello World</h2>
        }
    }

export default Color;