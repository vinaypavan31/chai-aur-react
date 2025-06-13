import React,{ useState } from 'react';
import './App.css'

function App() {
  const [counter,setCounter]=useState(5)
  //let counter=25;

  const addValue=()=>{
    
    setCounter(pcounter => pcounter+1)
    setCounter(pcounter => pcounter+1) 
    
  }
  const removeValue=()=>{
    
    setCounter(counter-1)
  }
  
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add value </button><br/><br/>
      <button onClick={removeValue}>Remove value </button>
    </>
  )
}

export default App
