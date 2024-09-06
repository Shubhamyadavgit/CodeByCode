import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'

function App() {
  const [count, setCount] = useState(0)
  let inputref = useRef(null)

  function handref(){
    inputref.current.focus()
    inputref.current.value = "shubham"
    inputref.current.style.color="Red"
  }
  // const inputref = useRef(null)

  // function handleInput(){
  //   // inputref.current.value="1000"
  //   // inputref.current.focus()
  //   // inputref.current.style.color="red"
  //   inputref.current.style.display="none"
  // }
  return (
    <>
    {/* <div>
      <h1>useRef hook</h1>
      <input type="text" ref={inputref}/>
      <button onClick={handleInput}>Handle Input</button>
    </div> */}
    <h1>forwardRef in react</h1>
    <User ref = {inputref}/>
    <button onClick={handref}>Update</button>
    </>
  )
}

export default App
