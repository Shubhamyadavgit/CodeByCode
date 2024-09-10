import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement} from '../redux/slices/counterSlice'
const Counter = () => {
    const count = useSelector(state=>state.counter);
  return (
    <div>
        <h2>{count}</h2>
    </div>
  )
}

export default Counter