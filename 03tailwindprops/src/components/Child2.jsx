import React from 'react'

const Child2 = ({age="0000",k="....",n="____"}) => {
    console.log(age)
  return (
    <div>
    {age}<br/>
    {k }<br/>
    {n }
    </div>
  )
}

export default Child2;