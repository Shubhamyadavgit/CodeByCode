import React, { useState } from 'react'

const Input = () => {
    const[data,setData] = useState(null)
    const[print,setPrint] = useState(false)

    function getData(e){
        setData(e.target.value)
    }
  return (
    <div>
    <h1>{
        print ? data : "No Data"
    }</h1>
        <input type="text" placeholder="Enter your name" onChange={getData}/>
        <button onClick={()=>setPrint(true)}>Click ME</button>
    </div>
  )
}

export default Input