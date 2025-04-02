import { useState } from 'react'
import CharacterCounter from './components/CharacterCounter';
import './styles.css';
import './App.css'

function App() {

  return (
    <div className="app">
      <h1>Character Counter Demo</h1>
      <CharacterCounter />
    </div>
  )
}

export default App
