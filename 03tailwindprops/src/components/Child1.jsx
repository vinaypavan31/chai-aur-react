import React from 'react'
import Child2 from './child2'

const Child1 = ({c,dets,n,k}) => {
let j=90;

   
  return (
    <>
    <div>
       {k}<br/> &nbsp;{n}<br/>{c[3]}<br/>{dets.sex}
    </div>
    <Child2 age={j}/>
    </>
    
  )
}

export default Child1