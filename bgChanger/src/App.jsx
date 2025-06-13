// import { useState } from 'react';
// import './App.css'

// function App() {
//   const [color,setColor]=useState("olive");
  

//   return (
//     <div className="color" style={{backgroundColor:color}}>
//      <div className="colorSet">
//       <div className="colorBtn">
//           <button onClick={()=> setColor("red")} className="btnStyle" style={{backgroundColor:"red"}}>Red</button>
//           <button onClick={()=> setColor("green")} className="btnStyle" style={{backgroundColor:"green"}}>Green</button>
//           <button onClick={()=> setColor("blue")} className="btnStyle" style={{backgroundColor:"blue"}}>Blue</button>
//           <button onClick={()=> setColor("gray")} className="btnStyle" style={{backgroundColor:"gray"}}>Gray</button>
//           <button onClick={()=> setColor("white")} className="btnStyle" style={{backgroundColor:"white"}}>White</button>
//           <button onClick={()=> setColor("pink")} className="btnStyle" style={{backgroundColor:"pink"}}>Pink</button>
//           <button onClick={()=> setColor("violet")} className="btnStyle" style={{backgroundColor:"violet"}}>Violet</button>
//       </div>
//      </div>
//     </div>
//   )
// }

// export default App

import React from 'react'
import PrincipleInterest from './comps/PrincipleInterest'

const App = () => {
  return (
    <div>
      
      <PrincipleInterest />
    </div>
  )
}

export default App
