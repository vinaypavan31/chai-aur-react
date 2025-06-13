import React from 'react'
import Child1 from './components/child1';
import Child2 from './components/child2';
const App = () => {
  let name="areti"
  const cars=["BMW","Audi","Mercedes","ferrari","lambo"];
  const list={
    name:"vinay",age:25,sex:"male"
  }
  return (
    <>
    <div>My App</div>
    <Child1 n="saw" k={name} c={cars} dets={list}/>
    <Child2 n="saw" k={name}/>
    </>
    
  )
}

export default App
