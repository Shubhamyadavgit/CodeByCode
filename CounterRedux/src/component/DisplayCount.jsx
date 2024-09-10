import React from 'react'
import {useSelector} from 'react-redux'
const DisplayCount = () => {

    const display = useSelector(state=>state.counter)
  return (
    <div>
    <h1>{display}</h1>
    </div>
  )
}

export default DisplayCount